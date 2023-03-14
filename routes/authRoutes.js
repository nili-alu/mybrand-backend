const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/authenticate - Authenticate a user
router.post("/login/create", authController.login);
router.get('/login',authController.allUsers);
router.get('login/:id', authController.getOneUser);
router.delete('/login/:id', authController.deleteOneUser),

module.exports = router;