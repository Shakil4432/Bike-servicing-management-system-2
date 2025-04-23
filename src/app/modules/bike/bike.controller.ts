import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BikeService } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const result = await BikeService.createBikeIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike Created successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeService.getAllBiksFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getBikeById = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await BikeService.getBikeByIdFromDB(bikeId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});
export const BikeController = {
  createBike,
  getAllBikes,
  getBikeById,
};
