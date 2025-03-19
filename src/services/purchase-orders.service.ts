import IPurchaseOrder from "../interfaces/purchase-orders.interface";
import { ProcurementDB } from "../data-source";
import { Item } from "../entities/item.entity";
import { PurchaseRequest } from "../entities/pr.entity";
import { ProcurementOrder } from "../entities/po.entity";


// Create a new Purchase Order
async function createPurchaseOrder({ itemName, category, quantity, supplier, status }: IPurchaseOrder){
    const queryRunner = ProcurementDB.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    
    try {
        const itemResult= await queryRunner.manager
            .createQueryBuilder()
            .where("item.name = :name", { name: itemName })
            .getOne();
    } catch (err) {
        throw err;
    }
}