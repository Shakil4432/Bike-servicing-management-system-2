"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const router = express_1.default.Router();
router.post("/", serviceRecord_controller_1.ServiceRecordController.createServiceRecord);
router.get("/", serviceRecord_controller_1.ServiceRecordController.getAllServiceRecords);
router.get("/:serviceId", serviceRecord_controller_1.ServiceRecordController.getServiceRecordById);
router.put("/:serviceId", serviceRecord_controller_1.ServiceRecordController.updatedServiceRecordById);
exports.ServiceRecordRoutes = router;
