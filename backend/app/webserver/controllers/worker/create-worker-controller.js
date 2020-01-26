"use strict";

const Joi = require("@hapi/joi");
const uuidV4 = require("uuid/v4");
const mysqlPool = require("../../../database/mysql-pool");

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

/*
{
	"dni": "Z5790285V",
	"apellidos": "Niño Carbo",
	"nombre": "Cristian"
}
*/
async function validate(payload) {
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
      .required()
  });

  Joi.assert(payload, schema);
}

async function createWorker(req, res, next) {
  const workerData = { ...req.body };
  // const { userId } = req.claims;

  try {
    await validate(workerData);
  } catch (e) {
    return res.status(400).send(e);
  }

  const created_At = new Date()
    .toISOString()
    .substring(0, 19)
    .replace("T", " ");
  const { dni, apellidos, nombre } = workerData;

  const id = uuidV4();
  const worker = {
    id,
    dni,
    apellidos,
    nombre,
    created_At
  };

  try {
    const connection = await mysqlPool.getConnection();
    try {
      const sqlCreateNote = "INSERT INTO Trabajadores SET ?";
      await connection.query(sqlCreateNote, worker);

      connection.release();

      res.header("Location", `${httpServerDomain}/api/workers/${id}`);
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

module.exports = createWorker;
