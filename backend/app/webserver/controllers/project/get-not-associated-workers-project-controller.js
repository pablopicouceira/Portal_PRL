"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function getNotAssociatedWorkers(req, res, next) {
  const { userId } = req.claims;
  const { projectId } = req.params;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `select * from Trabajadores where not exists 
        (select * from Actuaciones_Trabajadores WHERE 
        Actuaciones_id=?
        and Trabajadores.id = Actuaciones_Trabajadores.Trabajadores_id 
        )
        and deleted_At IS NULL ORDER by apellidos asc;`;

    const [rows] = await connection.execute(sqlQuery, [projectId]);
    connection.release();

    return res.status(200).send(rows);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getNotAssociatedWorkers;
