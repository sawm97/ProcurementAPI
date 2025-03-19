import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { PurchaseRequest } from './pr.entity';

@Entity({ name: 'procurementOrder' })
export class ProcurementOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => PurchaseRequest, (purchaseRequest) => purchaseRequest.procurementOrder)
    @JoinColumn({ name:"purchaseRequestId" })
    purchaseRequest: PurchaseRequest;

    @Column()
    quantity: number;

    @Column()
    status: string;

    @Column()
    orderDate: Date;
}