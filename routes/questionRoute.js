const express = require("express");
const { askQuestion, getQuestion } = require("../controller/QuestionController.js");
const { auth_middleware } = require("./../middleware/verify.js");
const router = express.Router();
router.post("/",auth_middleware,askQuestion);
router.get("/:questionId",auth_middleware,getQuestion);



module.exports = router;