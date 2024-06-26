import express from "express";
import { contactpost } from "../controllers/contactController.js";

const contact = express.Router();

contact.post("/contact", contactpost);

export default contact;
