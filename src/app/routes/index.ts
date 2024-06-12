import express from "express";
import ToolRouter from "../modules/tool/tool.routes";

const router = express.Router();

const routes = [
    {
        path: "/tool",
        router: ToolRouter,
    }
];

routes.forEach((route) => router.use(route.path, route.router));

export default router;
