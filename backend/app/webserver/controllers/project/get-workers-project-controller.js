"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

/**
 *
 * @param {Object} payload
 */
async function validate(payload) {
  const schema = Joi.object({
    projectId: Joi.number().required()
  });

  Joi.assert(payload, schema);
}

// /**
//  *
//  * @param {Array} rows Each row note with a tagId / tag per row
//  * @returns {Object} note Note object with array of tags:
//  *  {
//  *    title: "title note",
//  *    tags: [{
//  *      tagId: "uuid-of-tag-id-1",
//  *      tag: "JS"
//  *    }]
//  *  }
//  */
// function hydrateNoteTags(rows) {
//   const noteHydrated = rows.reduce((acc, rawNote) => {
//     /**
//      * esta nota tiene un tag?
//      */
//     const tag = rawNote.tagId
//       ? {
//           tagId: rawNote.tagId,
//           tag: rawNote.tag
//         }
//       : undefined;

//     const notaProcesada = acc.id !== undefined;

//     /**
//      * La primera vez creamos el objeto nota con el array de tags
//      * si tiene
//      */
//     if (!notaProcesada) {
//       return {
//         ...acc,
//         ...rawNote,
//         createdAt: rawNote.created_at,
//         updatedAt: rawNote.updated_at,
//         tags: tag ? [tag] : [],
//         tagId: undefined,
//         tag: undefined,
//         created_at: undefined,
//         updated_at: undefined
//       };
//     }

//     /**
//      * El acumulador ya tiene la nota, necesitamos ir
//      * añadiendo los tags
//      */
//     return {
//       ...acc,
//       tags: [...acc.tags, tag]
//     };
//   }, {});

//   return noteHydrated;
// }

async function getWorkersFromProject(req, res, next) {
  const { projectId } = req.params;
  const { userId } = req.claims;
  try {
    const payload = {
      projectId
    };
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }
  const Actuaciones_id = projectId;
  let connection;
  try {
    connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT t.nombre, t.apellidos
      FROM Trabajadores t
      JOIN Actuaciones_Trabajadores at
        ON t.id = at.Trabajadores_id
      WHERE
        at.Actuaciones_id = ?
        ORDER BY Apellidos ASC`;
    const [rows] = await connection.execute(sqlQuery, [Actuaciones_id]);
    connection.release();

    // if (rows.length === 0) {
    //   return res.status(404).send();
    // }

    const Trabajadores = rows.map(trabajador => {
      return {
        ...trabajador,
        created_At: undefined,
        updated_At: undefined,
        deleted_At: undefined
      };
    });

    return res.send(Trabajadores);
  } catch (e) {
    if (connection) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getWorkersFromProject;
