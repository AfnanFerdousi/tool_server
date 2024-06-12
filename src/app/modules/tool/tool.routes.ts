import express from "express";
import toolController from "./tool.controller";

const router = express.Router();

router.get("/", toolController.getTools);

router.post("/view/:id", toolController.updateToolView);

router.get("/views/weekly", toolController.getWeeklyViews);

router.get("/views/monthly", toolController.getMonthlyViews);


export default router;