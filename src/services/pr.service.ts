import { ProcurementDB } from "../data-source";
import { PurchaseRequest } from "../entities/pr.entity";
import { ProcurementOrder } from "../entities/po.entity";


// Approve Purchase Request
async function approvePurchaseRequest(id: number) {
    await ProcurementDB.createQueryBuilder()
        .update(PurchaseRequest)
        .set({
            status: "Approved",
        })
        .where("id = :id", { id: id })
        .execute();
};

// Rejected Purchase Request
async function rejectPurchaseRequest(id: number) {
    await ProcurementDB.createQueryBuilder()
        .update(PurchaseRequest)
        .set({
            status: "Rejected",
        })
        .where("id = :id", { id: id })
        .execute();
};

// Track Purchase Request
async function trackPurchaseRequest(status: string) {
    try {
        if (!status || status.trim() === "") {
            return [];
        }   

        const purchaseOrder = await ProcurementDB.createQueryBuilder(ProcurementOrder, "procurementOrder")
        .innerJoinAndSelect("procurementOrder.purchaseRequest", "purchaseRequest")
        .innerJoinAndSelect("purchaseRequest.item", "item")
        .select([
            "purchaseRequest.id AS id",
            "item.name AS itemName",
            "item.category AS category",
            "purchaseRequest.quantity AS quantity",
            "procurementOrder.supplier AS supplier",
            "purchaseRequest.status AS status"
        ])
        .where("purchaseRequest.status ILIKE :status", { status })
        .execute();

        return purchaseOrder
    } catch (err) {
        console.error("Error get purchase order by id:", err)
        throw err;
    }
};


const PurchaseRequestService = {
    approvePurchaseRequest,
    rejectPurchaseRequest,
    trackPurchaseRequest
};

export default PurchaseRequestService;