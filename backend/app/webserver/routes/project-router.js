"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const createProject = require("../controllers/project/create-project-controller");
const deleteProject = require("../controllers/project/delete-project-controller");
const getInactiveProject = require("../controllers/project/get-inactive-projects-controller");
const getProjects = require("../controllers/project/get-projects-controller");
const getProject = require("../controllers/project/get-project-controller");
const updateProject = require("../controllers/project/update-project-controller");

const router = express.Router();

router.post("/projects", checkAccountSession, createProject);
router.delete("/projects/:projectId", checkAccountSession, deleteProject);
router.get("/projects", checkAccountSession, getProjects);
router.get("/projects/:projectId", checkAccountSession, getProject);
router.get("/projects/inactive", checkAccountSession, getInactiveProject);
router.put("/projects/:projectId", checkAccountSession, updateProject);

module.exports = router;
