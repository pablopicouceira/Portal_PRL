"use strict";

const express = require("express");
const multer = require("multer");

const checkAccountSession = require("../controllers/account/check-account-session");
const upload = multer();

const createWorker = require("../controllers/worker/create-worker-controller");
const deleteWorker = require("../controllers/worker/delete-worker-controller");
const getInactiveWorkers = require("../controllers/worker/get-inactive-workers-controller");
const getWorkers = require("../controllers/worker/get-workers-controller");
const getWorker = require("../controllers/worker/get-worker-controller");
const recoverWorker = require("../controllers/worker/recover-worker-controller");
const updateWorker = require("../controllers/worker/update-worker-controller");
const getProjectsWorkerController = require("../controllers/worker/get-projects-worker-controller");
const uploadDocument = require("../controllers/worker/upload-document-worker-controller");
const getDocumentsWorker = require("../controllers/worker/get-documents-worker-controller");

const router = express.Router();

router.post("/workers", checkAccountSession, createWorker);

router.get("/workers/inactive", checkAccountSession, getInactiveWorkers);
router.get("/workers", checkAccountSession, getWorkers);
router.get("/workers/:workerId", checkAccountSession, getWorker);
router.get(
  "/workers/:workerId/projects",
  checkAccountSession,
  getProjectsWorkerController
);
router.get(
  "/workers/:workerId/documents",
  checkAccountSession,
  getDocumentsWorker
);
router.put("/workers/:workerId", checkAccountSession, updateWorker);
router.post(
  "/workers/:workerId/:requirementId/document",
  checkAccountSession,
  upload.single("document"),
  uploadDocument
);
router.put("/workers/recover/:workerId", checkAccountSession, recoverWorker);
router.delete("/workers/:workerId", checkAccountSession, deleteWorker);

module.exports = router;
