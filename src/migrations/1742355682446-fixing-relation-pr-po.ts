import { MigrationInterface, QueryRunner } from "typeorm";

export class FixingRelationPrPo1742355682446 implements MigrationInterface {
    name = 'FixingRelationPrPo1742355682446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD "itemId" integer`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD CONSTRAINT "UQ_2abacfde2949aa77f68ab127c20" UNIQUE ("itemId")`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" ADD "purchaseRequestId" integer`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" ADD CONSTRAINT "UQ_475032672915a6e51e97ea0113f" UNIQUE ("purchaseRequestId")`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD CONSTRAINT "FK_2abacfde2949aa77f68ab127c20" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" ADD CONSTRAINT "FK_475032672915a6e51e97ea0113f" FOREIGN KEY ("purchaseRequestId") REFERENCES "purchaseRequest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "procurementOrder" DROP CONSTRAINT "FK_475032672915a6e51e97ea0113f"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP CONSTRAINT "FK_2abacfde2949aa77f68ab127c20"`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" DROP CONSTRAINT "UQ_475032672915a6e51e97ea0113f"`);
        await queryRunner.query(`ALTER TABLE "procurementOrder" DROP COLUMN "purchaseRequestId"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP CONSTRAINT "UQ_2abacfde2949aa77f68ab127c20"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP COLUMN "itemId"`);
    }

}
