"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const createProject = require("../controllers/project/create-project-controller");
const getProject = require("../controllers/project/get-projects-controller");

const router = express.Router();

router.post("/projects", checkAccountSession, createProject);
router.get("/projects", checkAccountSession, getProject);

module.exports = router;
