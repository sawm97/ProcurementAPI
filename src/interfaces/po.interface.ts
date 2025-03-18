export default interface IProcurementOrder{
    id: string; // ID of the procurement order (UUID)
    purchaseRequestId: string; // ID of the purchase request associated with the procurement order
    supplier: string; // Name of the supplier
    orderDate: Date; // Date the procurement order was made
    status: string; // Status of the procurement order (e.g. "Processing", "Completed", "Canceled")
}