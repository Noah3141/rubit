import { PrismaAdapter } from "@auth/prisma-adapter";
import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
    User,
    Session,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { JWT, type DefaultJWT } from "next-auth/jwt";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "~/env";
import { db } from "~/server/db";
import crypto from "crypto";
import { type Role } from "@prisma/client";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
            id: string;
            role: Role;
        };
    }

    interface User {
        id: string;
        role: Role;
    }
}

declare module "next-auth/jwt" {
    // What's on the token
    interface JWT extends DefaultJWT {
        user: {
            id: string;
            role: Role;
        };
    }
}

export const salt = "38854defece4559aafd18a444";

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    pages: {
        signOut: "/",
        signIn: "/auth/sign-in",
        error: "/auth/error",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: ({ token, user }): JWT => {
            if (user) {
                token.user = {
                    id: user.id,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    role: user.role,
                };
            }

            return token;
        },

        session: ({ session, token }): Session => {
            if (session.user) {
                session.user.id = token.user.id;
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                session.user.role = token.user.role;
            }

            return session;
        },
    },
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },
            async authorize(credentials, req): Promise<User | null> {
                if (!credentials) {
                    throw new Error("No credentials provided!");
                }

                const encryptedPassword = crypto
                    .createHash("sha256")
                    .update(salt + credentials.password, "utf8")
                    .digest("base64");

                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user) {
                    throw new Error("We couldn't find that user!");
                }

                if (user.password !== encryptedPassword) {
                    throw new Error("Invalid credentials!");
                }

                return user;
            },
        }),
    ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
