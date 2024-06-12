"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const toolSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    viewCount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const Tool = mongoose_1.default.model("Tool", toolSchema);
exports.default = Tool;
