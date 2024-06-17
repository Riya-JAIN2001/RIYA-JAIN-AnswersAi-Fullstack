const express = require("express");
const { Allquestions, createUser, getUserById } = require("./../controller/Usercontroller.js");
const { auth_middleware } = require("../middleware/verify.js");

const router = express.Router();
router.post("/",createUser);
router.get("/:userid",getUserById);
router.get("/:userid/questions", auth_middleware, Allquestions)



module.exports = router;