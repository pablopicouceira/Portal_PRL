"use strict";

const Joi = require("@hapi/joi");
const uuidV4 = require("uuid/v4");
const mysqlPool = require("../../../database/mysql-pool");

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

async function validate(payload) {
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
    descripcion: Joi.string()
      .trim()
      .min(1)
      .max(10000)
      .required()
  });

  Joi.assert(payload, schema);
}

async function createProject(req, res, next) {
  const projectData = { ...req.body };
  const { userId } = req.claims;
  const Usuarios_id = userId;

  let id = null;
  try {
    await validate(projectData);
  } catch (e) {
    return res.status(400).send(e);
  }

  const created_At = new Date()
    .toISOString()
    .substring(0, 19)
    .replace("T", " ");
  const { nombre, direccion, poblacion, provincia, descripcion } = projectData;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT *
      FROM Actuaciones 
      ORDER BY id DESC LIMIT 1`;
    const [rows] = await connection.execute(sqlQuery);
    id = rows[0].id;
    console.log(id);
    connection.release();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }

  const project = {
    nombre,
    direccion,
    poblacion,
    provincia,
    descripcion,
    Usuarios_id,
    created_At
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
