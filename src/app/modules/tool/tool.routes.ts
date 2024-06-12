import express from "express";
import toolController from "./tool.controller";

const router = express.Router();

router.get("/", toolController.getTools);

router.get("/:id", toolController.updateToolView);


export default router;