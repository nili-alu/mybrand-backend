const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/authenticate - Authenticate a user
router.post("/", authController.login);
router.get('/users',authController.allUsers);
router.get('/:id', authController.getOneUser);
router.delete('/delete/:id', authController.deleteOneUser),

module.exports = router;