"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const createProject = require("../controllers/project/create-project-controller");
const deleteProject = require("../controllers/project/delete-project-controller");
const getProject = require("../controllers/project/get-projects-controller");
const updateProject = require("../controllers/project/update-project-controller");

const router = express.Router();

router.post("/projects", checkAccountSession, createProject);
router.delete("/projects/:projectId", checkAccountSession, deleteProject);
router.get("/projects", checkAccountSession, getProject);
router.put("/projects/:projectId", checkAccountSession, updateProject);

module.exports = router;
