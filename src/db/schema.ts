import {
  pgTable,
  text,
  timestamp,
  uuid,
  numeric,
  integer,
} from "drizzle-orm/pg-core";

export const transactions = pgTable("transactions", {
  id: uuid("id").defaultRandom().primaryKey(),
  billNumber: text("bill_number").notNull(),
  description: text("description").notNull().default(""),
  amount: numeric("amount", { precision: 14, scale: 2 }).notNull(),
  currency: text("currency").notNull(), // "USD" | "KHR"
  merchantName: text("merchant_name").notNull(),
  bakongAccount: text("bakong_account").notNull(),
  qrString: text("qr_string").notNull(),
  md5: text("md5").notNull(),
  status: text("status").notNull().default("PENDING"), // PENDING | PAID | EXPIRED
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  paidAt: timestamp("paid_at", { withTimezone: true }),
  checkCount: integer("check_count").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Transaction = typeof transactions.$inferSelect;
