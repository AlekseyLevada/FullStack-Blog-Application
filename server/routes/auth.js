import { Router } from "express";
import { myProfile } from "../controller/get-profile.js";
import { register } from "../controller/register.js";
import { login } from "../controller/login.js";
import {checkAuthToken} from "../utils/checkAuthToken/checkAuthToken.js";

const router = new Router();

// Registration
router.post("/register", register);

// Login
router.post("/login", login);

// My Profile
router.get("/myprofile", checkAuthToken, myProfile);

export default router;
