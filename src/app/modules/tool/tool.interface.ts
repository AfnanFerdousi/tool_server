import mongoose from "mongoose";

export type ITool = {
    appName: string;
    appType: string;
    appDesc: string;
    appUrl: string;
    viewCount: number;
    appCat: string;
    viewRecords?: { viewedAt: Date }[];
}

