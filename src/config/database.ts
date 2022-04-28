import { Pool } from 'pg';

export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'azerty',
  port: 5432,
  database: 'nexaltDB',
});
