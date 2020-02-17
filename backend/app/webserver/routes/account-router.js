"use strict";

const express = require("express");
const checkAccountSession = require("../controllers/account/check-account-session");
const createAccount = require("../controllers/account/create-account-controller");
const getDocumentUser = require("../controllers/account/get-documents-user-controller");
const getDocuments = require("../controllers/account/get-documents-controller");
const getWorkersByUser = require("../controllers/account/get-workers-by-user-controller");
const router = express.Router();

router.post("/accounts", createAccount);
router.get("/accounts/documents", checkAccountSession, getDocuments);
router.get("/accounts/workers", checkAccountSession, getWorkersByUser);
router.get("/accounts/documents/:userId", checkAccountSession, getDocumentUser);

module.exports = router;
