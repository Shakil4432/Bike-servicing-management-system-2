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
exports.ServiceRecordService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createServiceRecordIntoDB = (serviceRecordData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.create({
        data: serviceRecordData,
    });
    return result;
});
const getAllServiceRecordsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const getServiceRecordByIdFromDB = (serviceRecordId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: serviceRecordId,
        },
    });
    return result;
});
const updatedServiceRecordByIdIntoDB = (serviceRecordId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId: serviceRecordId,
        },
        data: {
            completionDate,
            status: "done",
        },
    });
    return result;
});
exports.ServiceRecordService = {
    createServiceRecordIntoDB,
    getAllServiceRecordsFromDB,
    getServiceRecordByIdFromDB,
    updatedServiceRecordByIdIntoDB,
};
