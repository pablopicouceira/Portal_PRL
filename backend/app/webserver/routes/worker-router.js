"use strict";

const express = require("express");
const createWorker = require("../controllers/worker/create-worker-controller");
const checkAccountSession = require("../controllers/account/check-account-session");

const router = express.Router();

router.post("/workers", checkAccountSession, createWorker);

module.exports = router;
