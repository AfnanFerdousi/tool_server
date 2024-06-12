import mongoose from "mongoose";

export type ITool = {
    name: string;
    price: string;
    description: string;
    url: string;
    viewCount: number;
    category: string;
    viewRecords: { viewedAt: Date }[];
}

