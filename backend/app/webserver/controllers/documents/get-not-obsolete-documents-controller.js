"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getNotObsoletDocuments(req, res, next) {
  const { userId } = req.claims;
  console.log(userId);

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT * 
      FROM Uploads u
      JOIN Trabajadores t
      ON u.Trabajadores_id = t.id
      WHERE u.Obsoleto = FALSE
      AND deleted_At IS NULL
      ORDER BY u.FechaCaducidad ASC;`;

    const [rows] = await connection.execute(sqlQuery);
    connection.release();
    const uploads = rows.map(upload => {
      return {
        ...upload,
        created_At: undefined,
        updated_At: undefined,
        deleted_At: undefined
      };
    });

    return res.status(200).send(uploads);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getNotObsoletDocuments;
