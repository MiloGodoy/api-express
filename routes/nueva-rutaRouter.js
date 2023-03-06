const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/nueva-ruta", (req, res) => {
  res.send("Hola soy una nueva ruta");
});

module.exports = router;
