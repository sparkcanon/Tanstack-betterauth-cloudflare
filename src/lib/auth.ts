import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { DrizzleD1Database } from "drizzle-orm/d1";
import * as resumeSchema from "./schema/resume";
import * as authSchema from "./schema/auth";

export const auth = (db: DrizzleD1Database) =>
  betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema: {
        ...resumeSchema,
        ...authSchema,
      },
    }),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: [
      "", // TODO: Add the production URL here
      "http://localhost:5173",
    ],
    emailAndPassword: {
      enabled: true,
    },
    user: {
      deleteUser: {
        enabled: true,
      },
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
    },
  });

// NOTE: To generate better-auth schema using pnpx @better-auth/cli generate,
// uncomment the following code and comment out the above code
// const db = drizzle(process.env.BETTER_AUTH_DB!);

// export const auth = betterAuth({
//   database: drizzleAdapter(db, {
//     provider: "sqlite",
//   }),
// });
