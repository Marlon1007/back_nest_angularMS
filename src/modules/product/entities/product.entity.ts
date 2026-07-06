import { ProductOrder } from "../../order/entities/product_order.entity";
import { Category } from "../../category/entities/category.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    price!: number;

    @Column()
    stock!: number;

    @Column()
    image!: string;

    @Column()
    description!: string;

    @Column()
    status!: boolean;

    @ManyToOne(() => Category, (cat) => cat.product)
    category!: Category;

    @OneToMany(() => ProductOrder, (prodOrder) => prodOrder.product)
    productOrders!: ProductOrder[];
}
