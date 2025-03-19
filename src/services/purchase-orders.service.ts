import IPurchaseOrder from "../interfaces/purchase-orders.interface";
import { ProcurementDB } from "../data-source";
import { Item } from "../entities/item.entity";
import { PurchaseRequest } from "../entities/pr.entity";
import { ProcurementOrder } from "../entities/po.entity";


// Create a new Purchase Order
async function createPurchaseOrder({ itemName, category, quantity, supplier, status }: IPurchaseOrder) {
    try {
        // Step 1: Check if the item already exists
        let item = await ProcurementDB.createQueryBuilder()
            .select("item")
            .from(Item, "item")
            .where("item.name = :name AND item.category = :category", { name: itemName, category: category })
            .getOne();

        if (item) {
            // If item exists, update stock by adding quantity
            await ProcurementDB.createQueryBuilder()
                .update(Item)
                .set({
                    stock: () => "stock + :quantity", // Increment stock
                    lastUpdated: new Date(), // Update lastUpdated
                })
                .where("id = :id", { id: item.id })
                .setParameters({ quantity: quantity }) // Pass quantity as parameter
                .execute();
        } else {
            // If item does not exist, create a new one
            const itemResult = await ProcurementDB.createQueryBuilder()
                .insert()
                .into(Item)
                .values({
                    name: itemName,
                    category: category,
                    stock: quantity,
                    lastUpdated: new Date(),
                })
                .execute();

            item = { id: itemResult.identifiers[0].id } as Item; // Get the newly created item
        }

        // Step 2: Create PurchaseRequest
        const purchaseRequestResult = await ProcurementDB.createQueryBuilder()
            .insert()
            .into(PurchaseRequest)
            .values({
                item: { id: item.id }, // Relate to the item
                quantity: quantity,
                status: status, // Default status
                requestDate: new Date(),
            })
            .execute();

        const purchaseRequestId = purchaseRequestResult.identifiers[0].id; // Get the generated purchaseRequest ID

        // Step 3: Create ProcurementOrder
        await ProcurementDB.createQueryBuilder()
            .insert()
            .into(ProcurementOrder)
            .values({
                purchaseRequest: { id: purchaseRequestId }, // Relate to the purchaseRequest
                supplier: supplier,
                status: "Processing",
                orderDate: new Date(),
            })
            .execute();

        return {
            id: purchaseRequestId,
            itemName: itemName,
            category: category,
            quantity: quantity,
            supplier: supplier,
            status: status
        }
    } catch (err) {
        // Handle errors
        console.error("Error creating purchase order:", err);
        throw err;
    }
}

// Get all Purchase Orders
async function getAllPurchaseOrder() {
    try {
        const purchaseOrders = await ProcurementDB.createQueryBuilder(ProcurementOrder, "procurementOrder")
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
        .getRawMany();

        return purchaseOrders
    } catch (err) {
        console.error("Error get all purchase order:", err)
        throw err;
    }
}


const PurchaseOrdersService = {
    createPurchaseOrder,
    getAllPurchaseOrder
};

export default PurchaseOrdersService;