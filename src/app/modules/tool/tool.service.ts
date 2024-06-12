import Tool from "./tool.model";

const getTools = async () => {
    const tools = await Tool.find();
    return tools;
}

const updateToolView = async (id: string) => {
    const tool = await Tool.findByIdAndUpdate(id, { $inc: { view: 1 } });
    return tool;
}

export default {
    getTools,
    updateToolView
}