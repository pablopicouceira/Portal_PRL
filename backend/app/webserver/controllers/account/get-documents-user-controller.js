"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getDocumentsUser(req, res, next) {
  const { userId } = req.claims;
  console.log(userId);

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT * FROM Uploads WHERE Usuarios_id =?`;

    const [rows] = await connection.execute(sqlQuery, [userId]);
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

module.exports = getDocumentsUser;
