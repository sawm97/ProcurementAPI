export default interface IItem{
    id: number; // ID of the item
    name: string; // Name of the item
    category: string; // Category of the item (e.g. "Electronics", "Clothing", "Food")
    stock: number; // Current stock of the item
    lastUpdated: Date; // Date the item was last updated
}