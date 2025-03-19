import { MigrationInterface, QueryRunner } from "typeorm";

export class FixingRelationItemPrPo1742365481178 implements MigrationInterface {
    name = 'FixingRelationItemPrPo1742365481178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP CONSTRAINT "FK_2abacfde2949aa77f68ab127c20"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP CONSTRAINT "UQ_2abacfde2949aa77f68ab127c20"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD CONSTRAINT "FK_2abacfde2949aa77f68ab127c20" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP CONSTRAINT "FK_2abacfde2949aa77f68ab127c20"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD CONSTRAINT "UQ_2abacfde2949aa77f68ab127c20" UNIQUE ("itemId")`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD CONSTRAINT "FK_2abacfde2949aa77f68ab127c20" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
