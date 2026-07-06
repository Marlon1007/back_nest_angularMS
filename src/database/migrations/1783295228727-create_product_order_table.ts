import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductOrderTable1783295228727 implements MigrationInterface {
    name = 'CreateProductOrderTable1783295228727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_order" ("id" SERIAL NOT NULL, "orderId" integer NOT NULL, "productId" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_9849f0d8ce095e50e752616f691" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_order" ADD CONSTRAINT "FK_42291ebe165058deecb017e652b" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_order" ADD CONSTRAINT "FK_717057f3f11a007030181422152" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_order" DROP CONSTRAINT "FK_717057f3f11a007030181422152"`);
        await queryRunner.query(`ALTER TABLE "product_order" DROP CONSTRAINT "FK_42291ebe165058deecb017e652b"`);
        await queryRunner.query(`DROP TABLE "product_order"`);
    }

}
