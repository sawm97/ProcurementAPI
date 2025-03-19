import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

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
}