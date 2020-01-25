"use strict";

const express = require("express");

const checkAccountSession = require("../controllers/account/check-account-session");

const createWorker = require("../controllers/worker/create-worker-controller");
const getWorkers = require("../controllers/worker/get-workers-controller");

const router = express.Router();

router.post("/workers", checkAccountSession, createWorker);
router.get("/workers", checkAccountSession, getWorkers);

module.exports = router;
