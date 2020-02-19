"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const getExpiredDocuments = require("../controllers/documents/get-expired-documents-controller");
const getExpiringDocuments = require("../controllers/documents/get-expiring-documents-controller");
const getNotObsoletDocuments = require("../controllers/documents/get-not-obsolete-documents-controller");

const router = express.Router();

router.get(
  "/workers/expireddocuments",
  checkAccountSession,
  getExpiredDocuments
);

router.get(
  "/workers/expiringdocuments",
  checkAccountSession,
  getExpiringDocuments
);

router.get(
  "/documents/notobsolete",
  checkAccountSession,
  getNotObsoletDocuments
);

module.exports = router;
