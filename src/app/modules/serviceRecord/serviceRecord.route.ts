import express from "express";
import { ServiceRecordController } from "./serviceRecord.controller";
const router = express.Router();
router.post("/", ServiceRecordController.createServiceRecord);
router.get("/", ServiceRecordController.getAllServiceRecords);
router.get("/:serviceId", ServiceRecordController.getServiceRecordById);
router.put("/:serviceId", ServiceRecordController.updatedServiceRecordById);

export const ServiceRecordRoutes = router;
