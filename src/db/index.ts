import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

// Create a pool only if we have a URL, otherwise use a dummy to prevent crash during build
export const pool =
  globalForDb.__arenaNextJsPostgresqlPool ??
  (databaseUrl
    ? new Pool({ connectionString: databaseUrl })
    : ({
        connect: () => Promise.reject(new Error("Database not configured")),
        query: () => Promise.reject(new Error("Database not configured")),
        on: () => {},
        end: () => Promise.resolve(),
      } as unknown as Pool));

if (process.env.NODE_ENV !== "production" && databaseUrl) {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

export const ensureTransactionsTable = async () => {
  if (!databaseUrl) {
    return;
  }

  await pool.query("CREATE EXTENSION IF NOT EXISTS pgcrypto");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS transactions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      bill_number TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      amount NUMERIC(14, 2) NOT NULL,
      currency TEXT NOT NULL,
      merchant_name TEXT NOT NULL,
      bakong_account TEXT NOT NULL,
      qr_string TEXT NOT NULL,
      md5 TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'PENDING',
      expires_at TIMESTAMPTZ NOT NULL,
      paid_at TIMESTAMPTZ,
      check_count INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  const columns = [
    ["bill_number", "TEXT"],
    ["description", "TEXT DEFAULT ''"],
    ["amount", "NUMERIC(14, 2)"],
    ["currency", "TEXT"],
    ["merchant_name", "TEXT"],
    ["bakong_account", "TEXT"],
    ["qr_string", "TEXT"],
    ["md5", "TEXT"],
    ["status", "TEXT DEFAULT 'PENDING'"],
    ["expires_at", "TIMESTAMPTZ"],
    ["paid_at", "TIMESTAMPTZ"],
    ["check_count", "INTEGER DEFAULT 0"],
    ["created_at", "TIMESTAMPTZ DEFAULT now()"],
  ] as const;

  for (const [columnName, definition] of columns) {
    await pool.query(`
      ALTER TABLE transactions
      ADD COLUMN IF NOT EXISTS ${columnName} ${definition}
    `);
  }
};

export const db = drizzle(pool);
