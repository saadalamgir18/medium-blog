import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example.gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const prisma = new PrismaClient({
          datasourceUrl: process.env.DATABASE_URL,
        }).$extends(withAccelerate());
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
          select: {
            password: true,
            id: true,
            name: true,
          },
        });
        if (!user) {
          throw new Error("user is not there");
        }
        const isPasswordCorrect = bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (isPasswordCorrect) {
          return user;
        } else {
          throw new Error("incorrect password ");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token._id = token._id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
