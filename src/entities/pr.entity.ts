import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToOne, ManyToOne } from "typeorm";
import { Item } from "./item.entity";
import { ProcurementOrder } from "./po.entity";

@Entity({ name: "purchaseRequest" })
export class PurchaseRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Item, (item) => item.purchaseRequest)
    item: Item;

    @Column()
    quantity: number;

    @Column()
    status: string; // Status of the purchase request (e.g. "Pending", "Approved", "Rejected")

    @Column()
    requestDate: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToOne(() => ProcurementOrder, (procurementOrder) => procurementOrder.purchaseRequest)
    procurementOrder: ProcurementOrder;
    
}