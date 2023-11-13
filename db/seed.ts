import { db } from ".";
import { myTable } from "./schema";

async function seed() {
  await db
    .insert(myTable)
    .values({ id: "id_abc", createdAt: BigInt(new Date().getTime()) });
}

seed();
