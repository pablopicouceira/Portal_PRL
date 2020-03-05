"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getDocumentsByUser(req, res, next) {
  const { userId } = req.claims;
  const { minDate, maxDate } = req.query;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT * FROM Uploads WHERE Usuarios_id =? and created_At BETWEEN ? and ?;`;

    const [rows] = await connection.execute(sqlQuery, [
      userId,
      minDate,
      maxDate
    ]);
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

module.exports = getDocumentsByUser;
