import mongoose from "mongoose";
import { ITool } from "./tool.interface";

const toolSchema = new mongoose.Schema<ITool>({
     name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    category: { type: String, required: true },
    viewRecords: [{ viewedAt: { type: Date, default: Date.now } }]
}, {
    timestamps: true,
    versionKey: false
})


const Tool = mongoose.model("Tool", toolSchema);
export default Tool;
