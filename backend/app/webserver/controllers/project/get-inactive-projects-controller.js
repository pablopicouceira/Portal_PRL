"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getInactiveProjects(req, res, next) {
  const { userId } = req.claims;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT *
      FROM Actuaciones
      WHERE deleted_At IS NOT NULL`;
    const [rows] = await connection.execute(sqlQuery);
    connection.release();

    const projects = rows.map(project => {
      return {
        ...project,
        created_At: undefined,
        updated_At: undefined,
        deleted_At: undefined
      };
    });

    return res.status(200).send(projects);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getInactiveProjects;
