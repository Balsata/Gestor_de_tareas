const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/usuario");


router.post("/users", createUser);

module.exports = router;