import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CustomerService } from "./customer.service";
import HttpStatus from "http-status";

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.createCustomerIntoDB(req.body);
  sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomersFromDB();
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getCustomerById = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await CustomerService.getCustomerByIdFromDB(customerId);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const customerUpdateById = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await CustomerService.customerUpdateByIdIntoDB(
    customerId,
    req.body
  );
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

const deleteCustomerById = catchAsync(async (req, res) => {
  console.log(req.params);
  const { customerId } = req.params;
  const result = await CustomerService.deleteCustomerByIdFromDB(customerId);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  customerUpdateById,
  deleteCustomerById,
};
