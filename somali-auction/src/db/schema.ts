import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("sa_bids", {
  id: serial("id").primaryKey(),
});