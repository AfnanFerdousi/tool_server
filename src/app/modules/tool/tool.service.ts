import Tool from "./tool.model";

const getTools = async () => {
    const tools = await Tool.find();
    return tools;
}

const updateToolView = async (id: string) => {
    const tool = await Tool.findByIdAndUpdate(id, {
        $inc: {
            viewCount: 1,
        },
        $push: {
            viewRecords: {
                viewedAt: new Date()
            }
        }
    }, {
        new: true
    });
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
                _id: { $week: { $dateToString: { format: "%Y-%U", date: "$viewRecords.viewedAt" } } },
                viewCount: { $sum: 1 }
            }
        },
        { $sort: { "_id": 1 } }
    ]);

    console.log(weeklyData);  // Debugging line to print weekly data
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
                _id: { $month: { $dateToString: { format: "%Y-%m", date: "$viewRecords.viewedAt" } } },
                viewCount: { $sum: 1 }
            }
        },
        { $sort: { "_id": 1 } }
    ]);

    console.log(monthlyData);  // Debugging line to print monthly data
    return monthlyData;
};


export default {
    getTools,
    updateToolView,
    getWeeklyViews,
    getMonthlyViews
};