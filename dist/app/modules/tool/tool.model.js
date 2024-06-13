"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const toolSchema = new mongoose_1.default.Schema({
    appName: { type: String, required: true },
    appType: { type: String, required: true },
    appDesc: { type: String, required: true },
    appUrl: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    appCat: { type: String, required: true },
    viewRecords: [{ viewedAt: { type: Date, default: Date.now } }]
}, {
    timestamps: true,
    versionKey: false
});
const Tool = mongoose_1.default.model("Tool", toolSchema);
exports.default = Tool;
