import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToOne } from 'typeorm';
import { PurchaseRequest } from './pr.entity';

@Entity({ name : 'item' })
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    stock: number;

    @Column()
    lastUpdated: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToOne(() => PurchaseRequest, (purchaseRequest) => purchaseRequest.item)
    purchaseRequest: PurchaseRequest;
    
}