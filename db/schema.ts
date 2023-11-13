import { blob, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const myTable = sqliteTable("my_table", {
  id: text("id").primaryKey().notNull(),
  createdAt: blob("created_at", { mode: "bigint" }).notNull(),
});
