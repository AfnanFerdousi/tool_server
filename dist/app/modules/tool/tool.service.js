"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tool_model_1 = __importDefault(require("./tool.model"));
const getTools = () => __awaiter(void 0, void 0, void 0, function* () {
    const tools = yield tool_model_1.default.find();
    return tools;
});
const updateToolView = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tool = yield tool_model_1.default.findByIdAndUpdate(id, { $inc: { view: 1 } });
    return tool;
});
const getWeeklyViews = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const weeklyData = yield tool_model_1.default.aggregate([
        { $unwind: "$viewRecords" },
        { $match: { "viewRecords.viewedAt": { $gte: oneMonthAgo } } },
        {
            $group: {
                _id: { $week: "$viewRecords.viewedAt" },
                viewCount: { $sum: 1 }
            }
        },
        { $sort: { "_id": 1 } }
    ]);
    return weeklyData;
});
const getMonthlyViews = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    const monthlyData = yield tool_model_1.default.aggregate([
        { $unwind: "$viewRecords" },
        { $match: { "viewRecords.viewedAt": { $gte: oneYearAgo } } },
        {
            $group: {
                _id: { $month: "$viewRecords.viewedAt" },
                viewCount: { $sum: 1 }
            }
        },
        { $sort: { "_id": 1 } }
    ]);
    return monthlyData;
});
exports.default = {
    getTools,
    updateToolView,
    getWeeklyViews,
    getMonthlyViews
};
