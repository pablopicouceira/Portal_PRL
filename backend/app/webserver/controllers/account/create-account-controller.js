"use strict";

const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");
const sendgridMail = require("@sendgrid/mail");
const uuidV4 = require("uuid/v4");

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendWelcomeEmail(email) {
  const [username] = email.split("@");
  const msg = {
    to: email,
    from: "Portal_PRL@yopmail.com",
    subject: "Welcome to Portal_PRL :)",
    text: `Welcome ${username} to Portal_PRL, your tool for managing Health & Safety`,
    html: `<strong>Welcome ${username} to Portal_PRL, your tool for managing Health & Safety</strong>`
  };

  const data = await sendgridMail.send(msg);
  console.log(data);

  return data;
}

async function validateSchema(payload) {
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

async function createAccount(req, res, next) {
  const accountData = { ...req.body };
  try {
    await validateSchema(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * At this point, all data is valid
   */
  const now = new Date();
  const createdAt = now
    .toISOString()
    .replace("T", " ")
    .substring(0, 19);
  const userId = uuidV4();
  const securePassword = await bcrypt.hash(accountData.password, 10);

  let connection;
  try {
    connection = await mysqlPool.getConnection(); // 1
    await connection.query("INSERT INTO Usuarios SET ?", {
      // 2
      id: userId,
      email: accountData.email,
      password: securePassword,
      creada_en: createdAt
    });
    connection.release();

    res.status(201).send();

    /**
     * Nos gustaría mandar un email al usuario para darle la bienvenida a la app
     * La operación de mandar email no es lo más importante en el flujo de usuario
     * de "crear cuenta". Lo importante es que la cuenta se cree.
     * Por ese motivo, independientemente que el email se envíe o no, no influye
     * en que la cuenta se cree, y pondremos un try / catch especial para el flujo de
     * "enviar email" para que no afecte al flujo prirncipal de "crear cuenta"
     */
    try {
      await sendWelcomeEmail(accountData.email);
    } catch (e) {
      console.error(e);
    }
  } catch (e) {
    if (connection) {
      connection.release();
    }
    console.error(e);
    if (e.code === "ER_DUP_ENTRY") {
      return res.status(409).send();
    }

    return res.status(500).send();
  }
}

module.exports = createAccount;
