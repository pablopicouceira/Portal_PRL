"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validate(payload) {
  const schema = Joi.object({
    projectId: Joi.number().required()
  });

  Joi.assert(payload, schema);
}

async function getWorkersFromProject(req, res, next) {
  const { projectId } = req.params;
  const { userId } = req.claims;
  try {
    const payload = {
      projectId
    };
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }
  const Actuaciones_id = projectId;
  let connection;
  try {
    connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT t.nombre, t.apellidos
      FROM Trabajadores t
      JOIN Actuaciones_Trabajadores at
        ON t.id = at.Trabajadores_id
      WHERE
        at.Actuaciones_id = ?
        ORDER BY Apellidos ASC`;
    const [rows] = await connection.execute(sqlQuery, [Actuaciones_id]);
    connection.release();

    const Trabajadores = rows.map(trabajador => {
      return {
        ...trabajador,
        created_At: undefined,
        updated_At: undefined,
        deleted_At: undefined
      };
    });

    return res.send(Trabajadores);
  } catch (e) {
    if (connection) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getWorkersFromProject;
