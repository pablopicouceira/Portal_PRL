"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getInactiveWorkers(req, res, next) {
  const { userId } = req.claims;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT *
      FROM Trabajadores
      WHERE deleted_At IS NOT NULL
      ORDER BY Apellidos ASC`;
    const [rows] = await connection.execute(sqlQuery);
    connection.release();
    console.log(await connection.execute(sqlQuery));
    const Trabajadores = rows.map(trabajador => {
      return {
        ...trabajador,
        created_At: undefined,
        updated_At: undefined,
        deleted_At: undefined
      };
    });

    return res.status(200).send(Trabajadores);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getInactiveWorkers;
