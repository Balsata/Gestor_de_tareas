const express = require("express");
const router = express.Router();
const { crearTarea } = require("../controllers/tarea");
const validator = require("../middlewares/validator");
const { createTaskSchema } = require("../validations/tarea");


router.post("/", validator.body(createTaskSchema), crearTarea);

module.exports = router;