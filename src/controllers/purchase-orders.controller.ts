import { Request, Response, NextFunction } from 'express';

// Create a new Purchase Order
function createPurchaseOrder(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(201).send({ message: "Purchase Order created successfully."});
    } catch (err) {
        res.status(500).send(err);
    }
}

const Controller = {
    createPurchaseOrder,
};

export default Controller;