import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1608649098112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'birth_date',
                        type: 'timestamp with time zone'
                    },
                    {
                        name: 'facebook',
                        type: 'varchar'
                    },
                    {
                        name: 'linkedin',
                        type: 'varchar'
                    },
                    {
                        name: 'twitter',
                        type: 'varchar'
                    },
                    {
                        name: 'instagram',
                        type: 'varchar'
                    },
                    {
                        name: 'cpf',
                        type: 'varchar'
                    },
                    {
                        name: 'rg',
                        type: 'varchar'
                    },
                    {
                        name: 'phones',
                        type: 'json'
                    },
                    {
                        name: 'addresses',
                        type: 'json'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
}