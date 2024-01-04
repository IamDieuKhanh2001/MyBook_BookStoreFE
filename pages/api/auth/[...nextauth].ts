import { APIUserLogin } from "@/lib/axios/api/accountAPI";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "email", type: "text", placeholder: "MyEmail@gmail.com" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"; // disable self-signed certificate
                    const res = await APIUserLogin(credentials?.email, credentials?.password)
                    const user = res.data;
                    if (res.status === 200 && user) {
                        return user;
                    }
                } catch (e: any) {
                    throw new Error(e.response.data.message)
                }
            }

        }),
    ],
    callbacks: {
        async jwt({ token, user, account, trigger, session }) {
            if (trigger === "update") {
                return { ...token, ...session.user };
            }
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any; // same type as session user

            return session;
        },
    },
    // secret: process.env.JWT_SECRET, //Đã sử dụng NEXTAUTH_SECRET trong .env
    pages: {
        signIn: "/authentication/login",
    },
};
export default NextAuth(authOptions);