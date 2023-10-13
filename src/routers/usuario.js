const express = require("express");
const router = express.Router();
const { crearUsuario } = require("../controllers/usuario");
const joiValidator = require("../middlewares/joi");
const { createUserSchema } = require("../validations/usuario");


router.post("/", joiValidator.body(createUserSchema), crearUsuario);

module.exports = router;