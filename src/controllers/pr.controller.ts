import { Request, Response, NextFunction } from 'express';
import PurchaseRequestService from '../services/pr.service';

// Approve Purchase Request
async function approvePurchaseRequest(req: Request, res: Response, next: NextFunction) {
    try {
        const id = parseInt(req.params.id)
        await PurchaseRequestService.approvePurchaseRequest(id);

        res.status(200).send({
            message: "Purchase request with id: "+ id +" has been approved"
        })
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error", detail: err });
    }
};

// Reject Purchase Request
async function rejectPurchaseRequest(req: Request, res: Response, next: NextFunction) {
    try {
        const id = parseInt(req.params.id)
        await PurchaseRequestService.rejectPurchaseRequest(id);

        res.status(200).send({
            message: "Purchase request with id: "+ id +" has been rejected"
        })
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error", detail: err });
    }
};

// Track status Purchase Request
async function trackPurchaseRequest(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await PurchaseRequestService.trackPurchaseRequest(req.params.status);

        if(data.length > 0){
            res.status(200).send({
                count: data.length,
                purchaseOrders: data
            })
        } else {
            res.status(200).send({
                message: "There's no data"
            })
        }
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error", detail: err });
    }
};


const PurchaseRequestController = {
    approvePurchaseRequest,
    rejectPurchaseRequest,
    trackPurchaseRequest
};

export default PurchaseRequestController;