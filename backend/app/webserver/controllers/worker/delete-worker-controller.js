"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validate(payload) {
  const schema = Joi.object({
    workerId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
  });

  Joi.assert(payload, schema);
}

async function deleteWorker(req, res, next) {
  const { workerId } = req.params;
  //const { userId } = req.claims;

  try {
    await validate({ workerId });
  } catch (e) {
    return res.status(400).send(e);
  }

  let connection;
  try {
    connection = await mysqlPool.getConnection();
    const sqlQuery = `UPDATE Trabajadores
      SET deleted_At = ?
      WHERE id = ?
        
        AND deleted_at IS NULL`;

    const deleted_At = new Date()
      .toISOString()
      .substring(0, 19)
      .replace("T", " ");
    const [deletedStatus] = await connection.execute(sqlQuery, [
      deleted_At,
      workerId
    ]);
    connection.release();

    if (deletedStatus.changedRows !== 1) {
      return res.status(404).send();
    }

    return res.status(204).send();
  } catch (e) {
    if (connection) {
      connection.release();
    }

    return res.status(500).send(e.message);
  }
}

module.exports = deleteWorker;
