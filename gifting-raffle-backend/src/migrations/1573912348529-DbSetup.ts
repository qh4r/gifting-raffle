import {MigrationInterface, QueryRunner} from "typeorm";

export class DbSetup1573912348529 implements MigrationInterface {
    name = 'DbSetup1573912348529'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_4a257d2c9837248d70640b3e36" ON "User" ("email") `, undefined);
        await queryRunner.query(`CREATE TABLE "Raffle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "joinKey" character varying(50) NOT NULL, "finished" boolean NOT NULL DEFAULT false, "ownerId" uuid NOT NULL, CONSTRAINT "PK_1280cd3acb56306cc266ee7fba6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "Pair" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order" SERIAL NOT NULL, "raffleId" uuid NOT NULL, "giverId" uuid, "receiverId" uuid, CONSTRAINT "PK_d8b5d207b784cbac2408fa0e6b9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "Raffle" ADD CONSTRAINT "FK_faf757136c41d53b8374fcb7728" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" ADD CONSTRAINT "FK_c3c8c0cb0d563b18ad4a8f22830" FOREIGN KEY ("raffleId") REFERENCES "Raffle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" ADD CONSTRAINT "FK_53e6437f30b5efba2e18b9cd1be" FOREIGN KEY ("giverId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" ADD CONSTRAINT "FK_9723349623747a52fc1b87138dc" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Pair" DROP CONSTRAINT "FK_9723349623747a52fc1b87138dc"`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" DROP CONSTRAINT "FK_53e6437f30b5efba2e18b9cd1be"`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" DROP CONSTRAINT "FK_c3c8c0cb0d563b18ad4a8f22830"`, undefined);
        await queryRunner.query(`ALTER TABLE "Raffle" DROP CONSTRAINT "FK_faf757136c41d53b8374fcb7728"`, undefined);
        await queryRunner.query(`DROP TABLE "Pair"`, undefined);
        await queryRunner.query(`DROP TABLE "Raffle"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4a257d2c9837248d70640b3e36"`, undefined);
        await queryRunner.query(`DROP TABLE "User"`, undefined);
    }

}
