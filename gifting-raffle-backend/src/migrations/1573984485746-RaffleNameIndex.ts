import {MigrationInterface, QueryRunner} from "typeorm";

export class RaffleNameIndex1573984485746 implements MigrationInterface {
    name = 'RaffleNameIndex1573984485746'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Pair" DROP CONSTRAINT "FK_53e6437f30b5efba2e18b9cd1be"`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" ALTER COLUMN "giverId" SET NOT NULL`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_10d384c844b7c32214cbe50cc7" ON "Raffle" ("name") `, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" ADD CONSTRAINT "FK_53e6437f30b5efba2e18b9cd1be" FOREIGN KEY ("giverId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Pair" DROP CONSTRAINT "FK_53e6437f30b5efba2e18b9cd1be"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_10d384c844b7c32214cbe50cc7"`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" ALTER COLUMN "giverId" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "Pair" ADD CONSTRAINT "FK_53e6437f30b5efba2e18b9cd1be" FOREIGN KEY ("giverId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
