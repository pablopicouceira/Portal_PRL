"use strict";

const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const mysqlPool = require("../../../database/mysql-pool");

async function validate(payload) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required()
  });

  Joi.assert(payload, schema);
}

/**
 * 1. Validar datos (400 Bad request :( )
 * 2. Query a la bbdd para ver si existe el usuario con el email dado
 *  2.1 Mirar si la pass es correcta
 * 3. Crear token JWT:
 *  3.1 Que expire en 15 min
 *  3.2 Que almacene el user id y el role del usuario
 * 4. Devolver los "datos" del usuario
 */
async function login(req, res, next) {
  const accountData = { ...req.body };
  try {
    await validate(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  const sqlQuery = `SELECT id, email, password, created_At
    FROM Usuarios
    WHERE email = '${accountData.email}'`;
  // pedir conexion + hacer query + release

  try {
    const connection = await mysqlPool.getConnection();
    // connection.query devuelve: [[filaEncontrada], [c1Metadata, cNmetadata]]
    const [rows] = await connection.query(sqlQuery);
    connection.release();
    console.log(await connection.query(sqlQuery));
    if (rows.length !== 1) {
      return res.status(401).send();
    }

    const user = rows[0];

    try {
      // *  2.1 Mirar si la pass es correcta
      const isPasswordOk = await bcrypt.compare(
        accountData.password,
        user.password
      );
      if (!isPasswordOk) {
        return res.status(401).send();
      }
    } catch (e) {
      return res.status(500);
    }

    const payloadJwt = {
      userId: user.id,
      role: "admin"
    };

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn
    });

    return res.send({
      accessToken: token,
      avatarUrl: user.avatar_url,
      expiresIn: jwtExpiresIn
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = login;
