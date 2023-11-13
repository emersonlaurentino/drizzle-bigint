# drizzle bigint error

This repository tries to show that there is a bug in parse bigint values using drizzle orm.


## How to reproduce?

1. Install dependencies

```cmd
bun install
```

2. Push the drizzle schema

```cmd
bun run db:push
```

3. Insert the seed data

```cmd
bun run db:seed
```

4. Run the index file

```cmd
bun run index.ts
```