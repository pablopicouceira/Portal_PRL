"use strict";

const cloudinary = require("cloudinary").v2;
const mysqlPool = require("../../../database/mysql-pool");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadImageProject(req, res, next) {
  const { userId } = req.claims;
  const { projectId } = req.params;
  const { file } = req;

  if (!file || !file.buffer) {
    return res.status(400).send({
      message: "invalid image"
    });
  }

  /**
   * En este punto, hay archivo (imagen), entonces
   * necesitamos "streaming" la imagen del usuario (de la request) hacia cloudinary
   */
  cloudinary.uploader
    .upload_stream(
      {
        resource_type: "image",
        public_id: userId,
        width: 1000,
        height: 1000,
        format: "jpg",
        crop: "limit"
      },
      async (err, result) => {
        if (err) {
          console.error(err);
          return res.status(400).send(err);
        }

        // const secureUrl = result.secure_url;
        const { secure_url: secureUrl } = result;

        // UPDATE users SET avatar_url = '${secureUrl} WHERE id = ${userId}';
        let connection;
        try {
          const sqlQuery = `UPDATE Actuaciones
      SET  imageUrl= ?
      WHERE id = ?`;

          //         const sqlQuery = `UPDATE users
          //   SET avatar_url = ?
          //   WHERE id = ?`;

          connection = await mysqlPool.getConnection();
          connection.execute(sqlQuery, [secureUrl, projectId]);
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

module.exports = uploadImageProject;
