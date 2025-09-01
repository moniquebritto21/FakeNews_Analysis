import express from "express";
import { getTime } from "../Controllers/userController.js";
const router = express.Router();
router.get("/", getTime);

export default router;
