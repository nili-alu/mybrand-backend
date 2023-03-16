import { Router } from "express";
const router = Router();
import { body, validationResult } from "express-validator";
import {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

// GET /api/users - Get all users
router.get("/users", getUsers);

// POST /api/users - Create a new user
router.post(
  "/users/create",
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createUser
);

// GET /api/users/:id - Get a user by ID
router.get("/users/:id", getUserById);

// PUT /api/users/:id - Update a user by ID
router.put("/users/update/:id", updateUserById);

// DELETE /api/users/:id - Delete a user by ID
router.delete("/users/delete/:id", deleteUserById);

export default router;
