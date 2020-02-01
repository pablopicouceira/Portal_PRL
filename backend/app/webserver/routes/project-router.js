"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const associateWorkerToProject = require("../controllers/project/associate-worker-project");
const createProject = require("../controllers/project/create-project-controller");
const deleteProject = require("../controllers/project/delete-project-controller");
const getInactiveProject = require("../controllers/project/get-inactive-projects-controller");
const getProjects = require("../controllers/project/get-projects-controller");
const getProject = require("../controllers/project/get-project-controller");
const updateProject = require("../controllers/project/update-project-controller");
const getWorkersFromProject = require("../controllers/project/get-workers-project controller");

const router = express.Router();

router.post("/projects", checkAccountSession, createProject);
router.delete("/projects/:projectId", checkAccountSession, deleteProject);
router.get("/projects", checkAccountSession, getProjects);
router.get("/projects/:projectId", checkAccountSession, getProject);
router.get(
  "/projects/:projectId/workers",
  checkAccountSession,
  getWorkersFromProject
);
router.get("/projects/inactive", checkAccountSession, getInactiveProject);
router.put("/projects/:projectId", checkAccountSession, updateProject);
router.post(
  "/projects/:projectId/:workerId",
  checkAccountSession,
  associateWorkerToProject
);

module.exports = router;
