const { Router } = require("express");
const { loguser } = require("../controllers/users.controllers");
const router = new Router();
router.get("/", loguser);
module.exports = router;