export default interface IPurchaseRequest{
    id: number; // ID of the purchase request
    itemId: string; // ID of the item being requested
    quantity: number; // Quantity of the item being requested
    status: string; // Status of the purchase request (e.g. "pending", "approved", "rejected")
    requestDate: Date; // Date the purchase request was made
}