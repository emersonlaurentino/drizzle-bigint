import { db } from "./db";
import { myTable } from "./db/schema";

async function main() {
  const result = await db.select().from(myTable);
  console.log(result);
}

main();
