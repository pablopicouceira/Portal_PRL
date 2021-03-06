"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    nombre: Joi.string()
      .trim()
      .min(1)
      .max(255)
      .required(),
    direccion: Joi.string()
      .trim()
      .min(1)
      .max(255)
      .required(),
    poblacion: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    provincia: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    projectId: Joi.number().required(),
    userId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
  });

  Joi.assert(payload, schema);
}

async function updateProject(req, res, next) {
  const { projectId } = req.params;
  const { userId } = req.claims;
  const projectData = {
    ...req.body,
    projectId,
    userId
  };

  try {
    await validateSchema(projectData);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  let connection;
  try {
    connection = await mysqlPool.getConnection();
    const updated_At = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);

    const sqlUpdateProject = `UPDATE Actuaciones
      SET nombre = ?,
        direccion = ?,
        poblacion = ?,
        provincia = ?,
        updated_At = ?
      WHERE id = ?
      AND deleted_At IS NULL`;

    await connection.query(sqlUpdateProject, [
      projectData.nombre,
      projectData.direccion,
      projectData.poblacion,
      projectData.provincia,
      updated_At,
      projectId
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

module.exports = updateProject;
