"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validate(payload) {
  const schema = Joi.object({
    workerId: Joi.string()
      .guid({ version: ["uuidv4"] })
      .required(),
    userId: Joi.string()
      .guid({ version: ["uuidv4"] })
      .required()
  });

  Joi.assert(payload, schema);
}

async function getDocumentsWorker(req, res, next) {
  const { workerId, requirementId } = req.params;
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
    const getDocumentQuery = `SELECT id, Trabajadores_id, Requisitos_id, Usuarios_id, secureUrl,FechaCaducidad
      FROM Uploads 
      WHERE Trabajadores_id = ?
      AND Obsoleto = 0
      ORDER BY id DESC
      LIMIT 3`;
    const [results] = await connection.execute(getDocumentQuery, [workerId]);
    console.log(results);
    connection.release();

    return res.send({
      data: results
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: e.message
    });
  }
}

module.exports = getDocumentsWorker;
