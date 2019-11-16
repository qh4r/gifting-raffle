import {MigrationInterface, QueryRunner} from "typeorm";

export class UserSalt1573916135990 implements MigrationInterface {
    name = 'UserSalt1573916135990'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "User" ADD "salt" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "salt"`, undefined);
    }

}
