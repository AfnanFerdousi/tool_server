"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tool_controller_1 = __importDefault(require("./tool.controller"));
const router = express_1.default.Router();
router.get("/", tool_controller_1.default.getTools);
router.post("/view/:id", tool_controller_1.default.updateToolView);
router.get("/views/weekly", tool_controller_1.default.getWeeklyViews);
router.get("/views/monthly", tool_controller_1.default.getMonthlyViews);
exports.default = router;
