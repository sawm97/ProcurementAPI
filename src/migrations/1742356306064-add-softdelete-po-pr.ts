import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSoftdeletePoPr1742356306064 implements MigrationInterface {
    name = 'AddSoftdeletePoPr1742356306064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "procurementOrder" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" ADD "supplier" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "procurementOrder" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" DROP COLUMN "supplier"`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" ADD "quantity" integer NOT NULL`);
    }

}
