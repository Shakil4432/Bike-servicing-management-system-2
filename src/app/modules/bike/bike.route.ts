import express from "express";
import { BikeController } from "./bike.controller";
const router = express.Router();
router.post("/", BikeController.createBike);
router.get("/", BikeController.getAllBikes);
router.get("/:bikeId", BikeController.getBikeById);

export const BikeRoutes = router;
