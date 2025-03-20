import { Router } from "express";

import PurchaseRequestController from "../controllers/pr.controller";
import PurchaseOrderController from "../controllers/purchase-orders.controller";

const router = Router();

// Create a new Purchase Order
router.post("/", PurchaseOrderController.createPurchaseOrder);

// Get all Purchase Orders
router.get("/", PurchaseOrderController.getAllPurchaseOrder);

// Approve Purchase Request
router.patch("/:id/approve", PurchaseRequestController.approvePurchaseRequest);

// Reject Purchase Request
router.patch("/:id/reject", PurchaseRequestController.rejectPurchaseRequest);

// Get Purchase Order by Id
router.get("/:id", PurchaseOrderController.getPurchaseOrderById);

// Track Purchase Request
router.get("/status/:status", PurchaseRequestController.trackPurchaseRequest);


export default router