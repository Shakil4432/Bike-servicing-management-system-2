"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const serviceRecord_service_1 = require("./serviceRecord.service");
const http_status_1 = __importDefault(require("http-status"));
const createServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecordData = req.body;
    const result = yield serviceRecord_service_1.ServiceRecordService.createServiceRecordIntoDB(serviceRecordData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
}));
const getAllServiceRecords = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordService.getAllServiceRecordsFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getServiceRecordById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield serviceRecord_service_1.ServiceRecordService.getServiceRecordByIdFromDB(serviceId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
}));
const updatedServiceRecordById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { serviceId } = req.params;
    const completionDate = ((_a = req.body) === null || _a === void 0 ? void 0 : _a.completionDate) || new Date();
    const result = yield serviceRecord_service_1.ServiceRecordService.updatedServiceRecordByIdIntoDB(serviceId, completionDate);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record updated successfully",
        data: result,
    });
}));
exports.ServiceRecordController = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordById,
    updatedServiceRecordById,
};
