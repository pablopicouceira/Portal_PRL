"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validate(payload) {
  const schema = Joi.object({
    projectId: Joi.number().required(),
    userId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
  });

  Joi.assert(payload, schema);
}

async function getProject(req, res, next) {
  const { projectId } = req.params;
  const { userId } = req.claims;

  const payload = {
    projectId,
    userId
  };

  try {
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    const connection = await mysqlPool.getConnection();
    const getProjectQuery = `SELECT id, descripcion, direccion, poblacion, provincia
      FROM Actuaciones 
      WHERE id = ?`;
    const [results] = await connection.execute(getProjectQuery, [projectId]);
    connection.release();
    if (results.length < 1) {
      return res.status(404).send();
    }

    const [projectData] = results;

    return res.send({
      data: projectData
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: e.message
    });
  }
}

module.exports = getProject;
