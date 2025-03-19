import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePrEntity1742352071990 implements MigrationInterface {
    name = 'CreatePrEntity1742352071990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purchaseRequest" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "status" character varying NOT NULL, "requestDate" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP, CONSTRAINT "PK_cbeff128bf2deb2557ef865cf71" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "purchaseRequest"`);
    }

}
