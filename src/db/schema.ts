import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const Users = mysqlTable("users", {
  id: serial("user_id").primaryKey(),
  name: varchar({ length: 50 }).notNull(),
});
