import { Client } from "../../client/entities/client.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductOrder } from "./product_order.entity";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: string;

    @Column()
    status!: number;

    @Column()
    observations!: string;

    @ManyToOne(() => Client)
    client!: Client;

    @OneToMany(() => ProductOrder, (productOrder) => productOrder.order)
    productOrders!: ProductOrder[];
}