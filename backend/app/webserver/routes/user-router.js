"use strict";

const express = require("express");
const checkAccountSession = require("../controllers/account/check-account-session");

const getDocumentsByUser = require("../controllers/user/get-documents-by-user-controller");
const getProjectsByUser = require("../controllers/user/get-projects-by-user-controller");
const getWorkersByUser = require("../controllers/user/get-workers-by-user-controller");

const router = express.Router();

router.get("/users/documents", checkAccountSession, getDocumentsByUser);
router.get("/users/projects", checkAccountSession, getProjectsByUser);
router.get("/users/workers", checkAccountSession, getWorkersByUser);

module.exports = router;
