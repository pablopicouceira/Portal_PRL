"use strict";

const Joi = require("@hapi/joi");
const uuidV4 = require("uuid/v4");
const mysqlPool = require("../../../database/mysql-pool");

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

/*
{
	"descripción": "Reparación techo ofinas logística",
	"direccion": "Avda. de la Diputación",
  "poblacion": "Arteixo",
  "provincia": "A Coruña"
}
*/
async function validate(payload) {
  const schema = Joi.object({
    descripcion: Joi.string()
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
      .required()
  });

  Joi.assert(payload, schema);
}

async function createProject(req, res, next) {
  const projectData = { ...req.body };
  // const { userId } = req.claims;

  try {
    await validate(projectData);
  } catch (e) {
    return res.status(418).send(e);
  }

  //   const now = new Date()
  //     .toISOString()
  //     .substring(0, 19)
  //     .replace("T", " ");
  const { descripcion, direccion, poblacion, provincia } = projectData;

  const id = uuidV4();
  const project = {
    id,
    descripcion,
    direccion,
    poblacion,
    provincia
    //created_at: now
  };

  try {
    const connection = await mysqlPool.getConnection();
    try {
      const sqlCreateProject = "INSERT INTO Actuaciones SET ?";
      await connection.query(sqlCreateProject, project);

      connection.release();

      res.header("Location", `${httpServerDomain}/api/projects/${id}`);
      return res.status(201).send();
    } catch (e) {
      connection.release();
      throw e;
    }
  } catch (e) {
    console.error(e);

    if (e.code === "ER_DUP_ENTRY") {
      return res.status(409).send();
    }

    return res.status(500).send();
  }
}

module.exports = createProject;