"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getWorkersByUser(req, res, next) {
  const { userId } = req.claims;
  const { minDate, maxDate } = req.query;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT * FROM Trabajadores WHERE Usuarios_id =? and created_At BETWEEN ? and ?;`;

    const [rows] = await connection.execute(sqlQuery, [
      userId,
      minDate,
      maxDate
    ]);
    connection.release();
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

module.exports = getWorkersByUser;
