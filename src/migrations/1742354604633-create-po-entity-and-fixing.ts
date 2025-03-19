import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePoEntityAndFixing1742354604633 implements MigrationInterface {
    name = 'CreatePoEntityAndFixing1742354604633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP CONSTRAINT "FK_2abacfde2949aa77f68ab127c20"`);
        await queryRunner.query(`CREATE TABLE "procurementOrder" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "status" character varying NOT NULL, "orderDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_d8e8c76dad87003200e06076bb0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP CONSTRAINT "UQ_2abacfde2949aa77f68ab127c20"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" DROP COLUMN "itemId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD "itemId" integer`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD CONSTRAINT "UQ_2abacfde2949aa77f68ab127c20" UNIQUE ("itemId")`);
        await queryRunner.query(`DROP TABLE "procurementOrder"`);
        await queryRunner.query(`ALTER TABLE "purchaseRequest" ADD CONSTRAINT "FK_2abacfde2949aa77f68ab127c20" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
