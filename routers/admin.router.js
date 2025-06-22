const { Router } = require("express");
const adminController = require('../controllers/admin.controllers');
const adminRouter = Router();

adminRouter.get('/',adminController.deshboard);

module.exports = adminRouter;