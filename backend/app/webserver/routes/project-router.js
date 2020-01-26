"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const createProject = require("../controllers/project/create-project-controller");
const getProject = require("../controllers/project/get-projects-controller");
const updateProject = require("../controllers/project/update-project-controller");

const router = express.Router();

router.post("/projects", checkAccountSession, createProject);
router.get("/projects", checkAccountSession, getProject);
router.put("/projects/:projectId", checkAccountSession, updateProject);

module.exports = router;
