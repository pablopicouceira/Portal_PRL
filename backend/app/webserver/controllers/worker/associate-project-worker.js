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

async function getWorker(workerId) {
  const connection = await mysqlPool.getConnection();
  const getProjectQuery = `SELECT id, dni, apellidos, nombre, created_At, updated_At, deleted_At 
  FROM Trabajadores
    WHERE id = ?
      AND deleted_at IS NULL`;
  const [workerData] = await connection.execute(getWorkerQuery, [workerId]);
  connection.release();

  if (workerData.length < 1) {
    return null;
  }

  return workerData[0];
}

async function associateProjectToWorker(req, res, next) {
  // /api/notes/37664a0b-0811-4005-8a26-db41b93825a8/tags
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
    const worker = await getWorker(workerId, userId);

    if (!worker) {
      return res.status(404).send();
    }

    /**
     * Exercise 1
     *  Delete tag from a note
     *    Exercise: Do a proper query to delete a tag from a note for the logged in user
     * Exercise 2
     *  Is it possible to delete a tag from note without perform a getProject call?
     */
    const sqlAssociateProjectToWorker = `INSERT INTO 
    Trabajadores_Actuaciones SET ?`;

    const connection = await mysqlPool.getConnection();
    try {
      await connection.query(sqlAssociateProjectToWorker, [
        { Trabajadores_id: workerId, Trabajadores_id: projectId }
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

module.exports = associateProjectToWorker;
