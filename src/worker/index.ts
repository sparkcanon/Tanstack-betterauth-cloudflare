/// <reference types="../../worker-configuration.d.ts" />
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { resume } from "../lib/schema/resume";
import { auth } from "../lib/auth";
import type { Session, User } from "better-auth";

const app = new Hono<{
  Bindings: Env;
  Variables: {
    SESSION: Session | null;
    USER: User | null;
  };
}>();

const route = app
  .basePath("/api")
  .use(async (c, next) => {
    const d1 = drizzle(c.env.DB);
    const authInstance = auth(d1);
    const session = await authInstance.api.getSession(c.req.raw);
    if (session?.session) {
      c.set("SESSION", session.session);
      c.set("USER", session.user);
    }
    return next();
  })
  .get("/count", async (c) => {
    const db = drizzle(c.env.DB);
    const resumeCount = await db.$count(resume);
    return c.json({
      postCount: resumeCount,
    });
  })
  .on(["POST", "GET"], "/auth/**", (c) => {
    const d1 = drizzle(c.env.DB);
    const authInstance = auth(d1);
    return authInstance.handler(c.req.raw);
  });

export default route;
