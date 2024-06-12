import Tool from "./tool.model";

const getTools = async () => {
    const tools = await Tool.find();
    return tools;
}

const updateToolView = async (id: string) => {
    const tool = await Tool.findByIdAndUpdate(id, { $inc: { view: 1 } });
    return tool;
}

const getWeeklyViews = async () => {
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

    const weeklyData = await Tool.aggregate([
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
};

const getMonthlyViews = async () => {
    const now = new Date();
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

    const monthlyData = await Tool.aggregate([
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
};

export default {
    getTools,
    updateToolView,
    getWeeklyViews,
    getMonthlyViews
};