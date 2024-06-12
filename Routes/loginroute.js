import express from "express";
import { forgetpassword, registeruser, resetpswd, usersignin } from "../Controllers/credentials.js";

const router =express.Router();

router.post("/register-user",registeruser);
router.put("/login-user",usersignin);
router.put("/resetpassword/:id/:token",resetpswd);
router.put("/forgetpassword",forgetpassword);


export default router;