import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitLab from "next-auth/providers/gitlab";

const dbInstance = await db;

export const authOptions = {
  adapter: DrizzleAdapter(dbInstance),
  // Configure one or more authentication providers
  providers: [
    GitLab({
      clientId:
        "9b39e45f7fe7abe9f1f0ebaf727ed693993f4ed29ddac76f93ba2c549a13e7b4",
      clientSecret:
        "gloas-0aba45d65d08a2c7c920ea3c81dc6166e9ccb42aa7e72b612f45ed6aa5017e5b",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
