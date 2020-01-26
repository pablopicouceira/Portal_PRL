"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const createWorker = require("../controllers/worker/create-worker-controller");
const deleteWorker = require("../controllers/worker/delete-worker-controller");
const getInactiveWorkers = require("../controllers/worker/get-inactive-workers-controller");
const getWorkers = require("../controllers/worker/get-workers-controller");
const updateWorker = require("../controllers/worker/update-worker-controller");

const router = express.Router();

router.post("/workers", checkAccountSession, createWorker);
router.get("/workers", checkAccountSession, getWorkers);
router.get("/workers/inactive", checkAccountSession, getInactiveWorkers);
router.put("/workers/:workerId", checkAccountSession, updateWorker);
router.delete("/workers/:workerId", checkAccountSession, deleteWorker);

module.exports = router;
