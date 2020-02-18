"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getWorkersByUser(req, res, next) {
  const { userId } = req.claims;
  console.log(userId);

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT * FROM Trabajadores WHERE Usuarios_id =?`;

    const [rows] = await connection.execute(sqlQuery, [userId]);
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
