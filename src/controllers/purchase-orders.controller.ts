import { Request, Response, NextFunction } from 'express';
import PurchaseOrderService from '../services/purchase-orders.service';

// Create a new Purchase Order
async function createPurchaseOrder(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await PurchaseOrderService.createPurchaseOrder(req.body);

        res.status(200).json({
            message: 'Purchase Order created successfully',
            purchaseOrder: data,
        });
    } catch (err) {
        res.status(500).send(err);
    }
}

// Get all Purchase Orders
async function getAllPurchaseOrder(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await PurchaseOrderService.getAllPurchaseOrder();

        res.status(200).json({
            purchaseOrders: data
        })
    } catch (err) {
        res.status(500).send(err);
    }
}

// Get Purchase Order by Id
async function getPurchaseOrderById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = parseInt(req.params.id);
        const data = await PurchaseOrderService.getPurchaseOrderById(id)

        res.status(200).json({
            purchaseOrders: data
        })
    } catch (err) {
        res.status(500).send(err);
    }
}


const Controller = {
    createPurchaseOrder,
    getAllPurchaseOrder,
    getPurchaseOrderById
};

export default Controller;