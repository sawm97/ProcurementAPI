import { Router } from "express";

import Controller from "../controllers/purchase-orders.controller";

const router = Router();

// Create a new Purchase Order
router.post("/", Controller.createPurchaseOrder);

export default router