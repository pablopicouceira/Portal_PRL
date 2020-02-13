"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

/**
 *
 * @param {Object} payload
 */

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

async function getProjectsFromWorker(req, res, next) {
  const { workerId } = req.params;
  const { userId } = req.claims;
  try {
    const payload = {
      workerId
    };
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }
  const Trabajadores_id = workerId;
  let connection;
  try {
    connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT a.id, a.descripcion, a.poblacion 
    FROM Actuaciones a 
    JOIN Actuaciones_Trabajadores at 
    ON a.id = at.Actuaciones_id
    WHERE at.Trabajadores_id = ?`;

    const [rows] = await connection.execute(sqlQuery, [Trabajadores_id]);
    connection.release();

    if (rows.length === 0) {
      return res.send([]);
    }

    const Actuaciones = rows.map(actuacion => {
      return {
        ...actuacion,
        created_At: undefined,
        updated_At: undefined,
        deleted_At: undefined
      };
    });

    return res.send(Actuaciones);
  } catch (e) {
    if (connection) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getProjectsFromWorker;
