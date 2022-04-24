import express from "express";
import AuthController from "../controller/auth";

const router = express.Router();

router.post("/signup", AuthController.login);

export default router;
