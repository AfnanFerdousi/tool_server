"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tool_routes_1 = __importDefault(require("../modules/tool/tool.routes"));
const router = express_1.default.Router();
const routes = [
    {
        path: "/tool",
        router: tool_routes_1.default,
    }
];
routes.forEach((route) => router.use(route.path, route.router));
exports.default = router;
