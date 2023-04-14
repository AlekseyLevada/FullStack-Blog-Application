import { Router } from "express";
import { myProfile } from "../controller/get-profile.js";
import { register } from "../controller/register.js";
import { login } from "../controller/login.js";

const router = new Router();

// Registration
router.post("/register", register);

// Login
router.post("/login", login);

// My Profile
router.get("/myprofile", myProfile);

export default router;
