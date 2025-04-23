import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceRecordService } from "./serviceRecord.service";
import HttpStatus from "http-status";

const createServiceRecord = catchAsync(async (req, res) => {
  const serviceRecordData = req.body;
  const result = await ServiceRecordService.createServiceRecordIntoDB(
    serviceRecordData
  );
  sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServiceRecords = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.getAllServiceRecordsFromDB();
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getServiceRecordById = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await ServiceRecordService.getServiceRecordByIdFromDB(
    serviceId
  );
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const updatedServiceRecordById = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const completionDate = req.body?.completionDate || new Date();
  const result = await ServiceRecordService.updatedServiceRecordByIdIntoDB(
    serviceId,
    completionDate
  );
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Service record updated successfully",
    data: result,
  });
});

export const ServiceRecordController = {
  createServiceRecord,
  getAllServiceRecords,
  getServiceRecordById,
  updatedServiceRecordById,
};
