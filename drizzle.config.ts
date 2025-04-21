import type { Config } from "drizzle-kit";

const {
  LOCAL_DB_PATH,
  CLOUDFLARE_DATABASE_ID,
  CLOUDFLARE_TOKEN,
  CLOUDFLARE_ACCOUNT_ID,
} = process.env;

export default LOCAL_DB_PATH
  ? ({
      schema: ["./src/lib/schema/resume.ts", "./src/lib/schema/auth.ts"],
      dialect: "sqlite",
      dbCredentials: {
        url: LOCAL_DB_PATH,
      },
    } satisfies Config)
  : ({
      schema: ["./src/lib/schema/resume.ts", "./src/lib/schema/auth.ts"],
      out: "./drizzle",
      dialect: "sqlite",
      driver: "d1-http",
      dbCredentials: {
        databaseId: CLOUDFLARE_DATABASE_ID!,
        token: CLOUDFLARE_TOKEN!,
        accountId: CLOUDFLARE_ACCOUNT_ID!,
      },
    } satisfies Config);
