import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstCreateItem1742350585505 implements MigrationInterface {
    name = 'FirstCreateItem1742350585505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "stock" integer NOT NULL, "lastUpdated" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
