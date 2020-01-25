'use strict';

const jwt = require('jsonwebtoken');

async function checkAccountSession(req, res, next) {
  /**
   * Necesitamos checkear si el usuario es válido:
   *  1. Manda header authorization: Bearer token
   *  2. Es el token valido?
   *    2.1 token expirado?
   *    2.2 jwt payload no alterado (coincida la firma)
   */
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send();
  }

  // empieza el authorization por Bearer. Tenemos: Bearer JWT_TOKEN
  const [prefix, token] = authorization.split(' ');
  if (prefix !== 'Bearer' || !token) {
    return res.status(401).send();
  }

  try {
    const {
      userId,
      role,
    } = jwt.verify(token, process.env.AUTH_JWT_SECRET);

    /**
     * Necesitamos pasar información al siguiente middleware. Esta información es
     * el userId y el role del usuario.
     * En express.js para pasar información entre middlewares, lo hacemos a través
     * del objeto request.
     */
    req.claims = {
      userId,
      role,
    };

    next();
  } catch (e)  {
    console.error(e);
    return res.status(401).send();
  }
}

module.exports = checkAccountSession;
