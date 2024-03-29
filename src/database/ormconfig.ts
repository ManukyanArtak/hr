import { DataSource } from 'typeorm';

const config = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 55000,
  username: 'postgres',
  password: 'postgrespw',
  database: 'nest',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
});

export default config;
