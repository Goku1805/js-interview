import express from "express";
import DataController from "../controller/data";

const router = express.Router();

//router.get("/getExample", UserController.getData);
router.post("/process", DataController.process);
router.get("/fetch", DataController.fetch);

export default router;
