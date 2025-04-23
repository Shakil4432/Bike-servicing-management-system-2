import express from "express";
import { CustomerController } from "./customer.controller";
const router = express.Router();
router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getAllCustomers);
router.get("/:customerId", CustomerController.getCustomerById);
router.put("/:customerId", CustomerController.customerUpdateById);
router.delete("/:customerId", CustomerController.deleteCustomerById);

export const CustomerRoutes = router;
