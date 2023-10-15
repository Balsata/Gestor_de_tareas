const express = require("express");
const router = express.Router();
const { createTask } = require("../controllers/tarea");


router.post("/", createTask);

module.exports = router;