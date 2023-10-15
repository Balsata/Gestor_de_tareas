const express = require("express");
const router = express.Router();
const { crearUsuario } = require("../controllers/usuario");
const validator = require("../middlewares/validator");
const { createUserSchema } = require("../validations/usuario");


router.post("/", validator.body(createUserSchema), crearUsuario);

module.exports = router;