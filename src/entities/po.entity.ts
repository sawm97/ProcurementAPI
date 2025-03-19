import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { PurchaseRequest } from './pr.entity';

@Entity({ name: 'procurementOrder' })
export class ProcurementOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => PurchaseRequest, (purchaseRequest) => purchaseRequest.procurementOrder)
    @JoinColumn({ name:"purchaseRequestId" })
    purchaseRequest: PurchaseRequest;

    @Column()
    supplier: string;

    @Column()
    orderDate: Date;

    @Column()
    status: string; // Status of the procurement order (e.g. "Processing", "Completed", "Cancelled")

    @DeleteDateColumn()
    deletedAt: Date;
    
}