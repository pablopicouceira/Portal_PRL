"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const getNotObsoletDocuments = require("../controllers/documents/get-not-obsolete-documents-controller");

const router = express.Router();

router.get(
  "/documents/notobsolete",
  checkAccountSession,
  getNotObsoletDocuments
);

module.exports = router;
