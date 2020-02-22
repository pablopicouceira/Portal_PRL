"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validate(payload) {
  const schema = Joi.object({
    projectId: Joi.number().required(),
    workerId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
  });

  Joi.assert(payload, schema);
}

async function getProject(projectId) {
  const connection = await mysqlPool.getConnection();
  const getProjectQuery = `SELECT id, descripcion, direccion, poblacion, provincia, created_At, updated_At, deleted_At 
  FROM Actuaciones
    WHERE id = ?
      AND deleted_at IS NULL`;
  const [projectData] = await connection.execute(getProjectQuery, [projectId]);
  connection.release();

  if (projectData.length < 1) {
    return null;
  }

  return projectData[0];
}

async function associateWorkerToProject(req, res, next) {
  const { projectId, workerId } = req.params;
  const { userId } = req.claims;

  const payload = {
    projectId,
    workerId
  };

  try {
    await validate(payload);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  try {
    const project = await getProject(projectId, userId);

    if (!project) {
      return res.status(404).send();
    }

    const sqlAssociateWorkerToProject = `INSERT INTO 
    Actuaciones_Trabajadores SET ?`;

    const connection = await mysqlPool.getConnection();
    try {
      await connection.query(sqlAssociateWorkerToProject, [
        { Actuaciones_id: projectId, Trabajadores_id: workerId }
      ]);
      connection.release();
    } catch (e) {
      console.error(e);
      connection.release();
      return res.status(500).send({
        message: e.message
      });
    }

    return res.status(204).send();
  } catch (e) {
    console.error(e);

    return res.status(500).send({
      message: e.message
    });
  }
}

module.exports = associateWorkerToProject;
