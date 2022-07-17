import { Pool } from 'pg';

const devConfig = `postgres://postgres:azerty@localhost:5432/nexalt-bdd`;

const prodConfig = process.env.NEXT_PUBLIC_CON_URI;

export const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig,
});
