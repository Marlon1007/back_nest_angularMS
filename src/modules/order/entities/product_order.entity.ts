import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "../../product/entities/product.entity";

@Entity('product_order')
export class ProductOrder {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    orderId!: number;

    @Column()
    productId!: number;

    @Column()
    quantity!: number;

    @ManyToOne(() => Order, (order) => order.productOrders)
    order!: Order;

    @ManyToOne(() => Product, (product) => product.productOrders)
    product!: Product;
}