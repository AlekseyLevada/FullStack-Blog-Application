import { Router } from "express";
import { getProfile } from "../controllers/get-profile.js";
import { register } from "../controllers/register.js";
import { login } from "../controllers/login.js";
import {checkAuthToken} from "../utils/checkAuthToken/checkAuthToken.js";

const router = new Router();

// Registration
router.post("/register", register);

// Login
router.post("/login", login);

// My Profile
router.get("/profile", checkAuthToken, getProfile);

export default router;
