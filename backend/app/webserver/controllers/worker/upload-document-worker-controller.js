"use strict";

const cloudinary = require("cloudinary").v2;
const mysqlPool = require("../../../database/mysql-pool");
const uuidV4 = require("uuid/v4");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadDocument(req, res, next) {
  const { userId } = req.claims;
  const { workerId, requirementId } = req.params;
  const { file } = req;

  if (!file || !file.buffer) {
    return res.status(400).send({
      message: "invalid document"
    });
  }
  console.log(file);
  const year = 20 + file.originalname.substring(8, 10);
  const month = file.originalname.substring(5, 7);
  const day = file.originalname.substring(2, 4);
  console.log(file.originalname, "nombre del archivo");
  console.log(year, "año");
  console.log(month, "mes");
  console.log(day, "día");
  const fechaCaducidad = `${year}-${month}-${day}`;
  console.log(fechaCaducidad);

  try {
    const conn = await mysqlPool.getConnection();
    const sqlUploadDocument = `update Uploads set Obsoleto = true where Requisitos_id=${requirementId} AND Trabajadores_id='${workerId}'`;
    await conn.query(sqlUploadDocument);
    conn.release();
  } catch (error) {
    console.log(error);
  }

  const fileId = uuidV4();
  cloudinary.uploader
    .upload_stream(
      {
        resource_type: "auto",
        public_id: fileId,
        format: "pdf"
      },
      async (err, result) => {
        if (err) {
          console.error(err);
          return res.status(400).send(err);
        }

        const { secure_url: secureUrl } = result;
        console.log(result);

        const upload = {
          Trabajadores_id: workerId,
          Requisitos_id: requirementId,
          Usuarios_id: userId,
          secureUrl,
          fechaCaducidad,
          Obsoleto: false
        };

        let connection;
        try {
          const connection = await mysqlPool.getConnection();
          const sqlUploadDocument = "INSERT INTO Uploads SET ?";
          await connection.query(sqlUploadDocument, upload);

          connection.release();

          console.log(result.secure_url);
          res.header("Location", secureUrl);
          return res.status(201).send();
        } catch (e) {
          if (connection) {
            connection.release();
          }
          console.error(e);
          return res.status(500).send(e.message);
        }
      }
    )
    .end(file.buffer);
}

module.exports = uploadDocument;
