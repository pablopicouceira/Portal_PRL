"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const createWorker = require("../controllers/worker/create-worker-controller");
const deleteWorker = require("../controllers/worker/delete-worker-controller");
const getInactiveWorkers = require("../controllers/worker/get-inactive-workers-controller");
const getWorkers = require("../controllers/worker/get-workers-controller");
const getWorker = require("../controllers/worker/get-worker-controller");
const recoverWorker = require("../controllers/worker/recover-worker-controller");
const updateWorker = require("../controllers/worker/update-worker-controller");
//const getProjectsFromWorker = require("../controllers/worker/get-projects-worker-controller");

const router = express.Router();

router.post("/workers", checkAccountSession, createWorker);
router.get("/workers/inactive", checkAccountSession, getInactiveWorkers);
router.get("/workers", checkAccountSession, getWorkers);
router.get("/workers/:workerId", checkAccountSession, getWorker);
router.put("/workers/:workerId", checkAccountSession, updateWorker);
router.put("/workers/recover/:workerId", checkAccountSession, recoverWorker);
router.delete("/workers/:workerId", checkAccountSession, deleteWorker);
// router.post(
//   "/worker/:workerId/:projectId",
//   checkAccountSession,
//   getProjectsFromWorker
// );

module.exports = router;
