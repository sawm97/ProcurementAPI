import e from "express";
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Item } from "./item.entity";

@Entity({ name: "purchaseRequest" })
export class PurchaseRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Item) // Relasi One-to-One dengan entitas Item
    @JoinColumn({ name: "itemId" }) // Menentukan kolom foreign key di tabel purchaseRequest
    item: Item;

    @Column()
    quantity: number;

    @Column()
    status: string; // Status of the purchase request (e.g. "pending", "approved", "rejected")

    @Column()
    requestDate: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}