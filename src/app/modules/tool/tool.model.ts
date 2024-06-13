import mongoose from "mongoose";
import { ITool } from "./tool.interface";

const toolSchema = new mongoose.Schema<ITool>({
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
})


const Tool = mongoose.model("Tool", toolSchema);
export default Tool;
