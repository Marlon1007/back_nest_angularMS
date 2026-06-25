import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTableModified21782421196950 implements MigrationInterface {
    name = 'UserTableModified21782421196950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
