"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getExpiringDocuments(req, res, next) {
  const { userId } = req.claims;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT u.id, t.apellidos, t.nombre, r.tipo, u.FechaCaducidad, u.secureUrl
    FROM Trabajadores t 
    JOIN Uploads u on t.id = u.Trabajadores_id 
    JOIN Requisitos r on u.Requisitos_id = r.id
    WHERE u.FechaCaducidad >= CURDATE()
    AND u.FechaCaducidad <= DATE_ADD(CURDATE(), INTERVAL 1 month)
    AND t.deleted_At IS NULL
    AND u.Obsoleto = false
    ORDER BY u.FechaCaducidad ASC;`;

    const [rows] = await connection.execute(sqlQuery);
    connection.release();
    console.log(await connection.execute(sqlQuery));

    const Documentos = rows.map(documento => {
      return {
        ...documento
        // created_At: undefined,
        // updated_At: undefined,
        // deleted_At: undefined
      };
    });

    return res.status(200).send(Documentos);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getExpiringDocuments;
