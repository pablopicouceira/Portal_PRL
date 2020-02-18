const accountRouter = require("./account-router");
const authRouter = require("./auth-router");
const documentRouter = require("./document-router");
const projectRouter = require("./project-router");
const userRouter = require("./user-router");
const workerRouter = require("./worker-router");

module.exports = {
  accountRouter,
  authRouter,
  documentRouter,
  projectRouter,
  userRouter,
  workerRouter
};
