import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createJobsTable1655993384260 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'jobs',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'payload',
            type: 'text',
          },
          {
            name: 'start_time',
            type: 'timestamp',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['0', '1'],
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
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('jobs');
  }
}
