"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getWorkers(req, res, next) {
  const { userId } = req.claims;

  // 2. Select all tags
  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT *
      FROM Trabajadores
      WHERE deleted_At IS NULL`;
    //WHERE user_id = ?`;
    const [rows] = await connection.execute(sqlQuery); //, [userId]);
    connection.release();
    console.log(await connection.execute(sqlQuery));
    // preparar respuesta
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

module.exports = getWorkers;
