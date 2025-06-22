const { Router } = require("express");
const adminRouter = require("./admin.router");

const router = Router();
router.use('/',adminRouter);

router.get('/login',loginController);

module.exports = router;