import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import toolService from "./tool.service";

const getTools = catchAsync(async (req: Request, res: Response) => {
    const result = await toolService.getTools();
    
    sendResponse<any>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User created successfully",
        data: result
    })
})

const updateToolView = catchAsync(async (req: Request, res: Response) => {
    const result = await toolService.updateToolView(req.params.id); 
    
    sendResponse<any>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User created successfully",
        data: result
    })
})

const getWeeklyViews = catchAsync(async (req: Request, res: Response) => {
    const result = await toolService.getWeeklyViews();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Weekly views fetched successfully",
        data: result
    });
});

const getMonthlyViews = catchAsync(async (req: Request, res: Response) => {
    const result = await toolService.getMonthlyViews();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Monthly views fetched successfully",
        data: result
    });
});

export default {
    getTools,
    updateToolView,
    getWeeklyViews,
    getMonthlyViews
}

