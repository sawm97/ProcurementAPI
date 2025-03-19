import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToMany } from 'typeorm';
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

    @OneToMany(() => PurchaseRequest, (purchaseRequest) => purchaseRequest.item)
    purchaseRequest: PurchaseRequest;
    
}