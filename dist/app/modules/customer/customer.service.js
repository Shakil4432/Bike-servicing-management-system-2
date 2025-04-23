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
exports.CustomerService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createCustomerIntoDB = (customerData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.create({
        data: customerData,
    });
    return result;
});
const getAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
const getCustomerByIdFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    return result;
});
const customerUpdateByIdIntoDB = (customerId, customerData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId,
        },
        data: customerData,
    });
    return result;
});
const deleteCustomerByIdFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.$transaction((prismaClient) => __awaiter(void 0, void 0, void 0, function* () {
        // First delete all bikes related to the customer
        yield prismaClient.bike.deleteMany({
            where: {
                customerId: customerId,
            },
        });
        // Now safely delete the customer
        const deletedCustomer = yield prismaClient.customer.delete({
            where: {
                customerId: customerId,
            },
        });
        return deletedCustomer;
    }));
    return result;
});
exports.CustomerService = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getCustomerByIdFromDB,
    customerUpdateByIdIntoDB,
    deleteCustomerByIdFromDB,
};
