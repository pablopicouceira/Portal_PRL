"use strict";

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

  const id = uuidV4();
  cloudinary.uploader
    .upload_stream(
      {
        resource_type: "auto",
        public_id: id,
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
          id,
          Trabajadores_id: workerId,
          Requisitos_id: requirementId,
          Usuarios_id: userId,
          secureUrl
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
