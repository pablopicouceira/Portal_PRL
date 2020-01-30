"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validate(payload) {
  const schema = Joi.object({
    workerId: Joi.string().required(),
    userId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
  });

  Joi.assert(payload, schema);
}

async function getWorker(req, res, next) {
  const { workerId } = req.params;
  const { userId } = req.claims;

  const payload = {
    workerId,
    userId
  };

  try {
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    const connection = await mysqlPool.getConnection();
    const getWorkerQuery = `SELECT id, dni, apellidos, nombre
      FROM Trabajadores 
      WHERE id = ?`;
    const [results] = await connection.execute(getWorkerQuery, [workerId]);
    connection.release();
    if (results.length < 1) {
      return res.status(404).send();
    }

    const [workerData] = results;

    return res.send({
      data: workerData
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: e.message
    });
  }
}

module.exports = getWorker;
