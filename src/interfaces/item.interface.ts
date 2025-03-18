export default interface IItem{
    id: string; // ID of the item (UUID)
    name: string; // Name of the item
    category: string; // Category of the item (e.g. "Electronics", "Clothing", "Food")
    stock: number; // Current stock of the item
    lastUpdated: Date; // Date the item was last updated
}