import express from "express";
import { signIn, signUp } from "../controllers/authController.js";

const auth = express.Router();

auth.post("/signUp", signUp);

auth.post("/signIn", signIn);

export default auth;
