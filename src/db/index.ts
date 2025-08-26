import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";
import mysql from "mysql2/promise";

async function initDB() {
  const connection = await mysql.createConnection({
    uri: "mysql://root:123456@localhost:3306/image_saas",
  });

  return drizzle(connection, { schema, mode: "default" });
}

export const db = initDB();
