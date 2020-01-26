"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    dni: Joi.string()
      .trim()
      .min(9)
      .max(9)
      .required(),
    apellidos: Joi.string()
      .trim()
      .min(1)
      .max(255)
      .required(),
    nombre: Joi.string()
      .trim()
      .min(1)
      .max(255)
      .required(),
    workerId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required(),
    userId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
    // tags: Joi.array().items(Joi.string().guid({ version: ['uuidv4'] })),
  });

  Joi.assert(payload, schema);
}

/**
 * Create a new tag if does not exist
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} Tag created
 */
async function updateWorker(req, res, next) {
  const { workerId } = req.params;
  const { userId } = req.claims;
  const workerData = {
    ...req.body,
    workerId,
    userId
  };

  try {
    await validateSchema(workerData);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  let connection;
  try {
    connection = await mysqlPool.getConnection();
    // const now = new Date()
    //   .toISOString()
    //   .replace("T", " ")
    //   .substring(0, 19);
    /**
     * Exercise: modify upated_at column to keep track when this record was modified
     */
    const sqlUpdateWorker = `UPDATE Trabajadores
      SET dni = ?,
        apellidos = ?,
        nombre = ?
      WHERE id = ?`;

    /**
     * Exercise: return 404 if the update was not possible
     */
    await connection.query(sqlUpdateWorker, [
      workerData.dni,
      workerData.apellidos,
      workerData.nombre,
      workerId
    ]);
    connection.release();

    return res.status(204).send();
  } catch (e) {
    if (connection) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send({
      message: e.message
    });
  }
}

module.exports = updateWorker;
