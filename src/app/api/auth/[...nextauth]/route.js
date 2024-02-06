import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "../../../../../utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "../../../../../utils/auth";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        await connectDb();
        if (!email || !password) {
          throw new Error("invalid data!");
        }

        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("User does'nt exist!");
        }
        const isValidPassword = verifyPassword(password, user.password);
        if (!isValidPassword) {
          throw new Error("Email or password is incorrect");
        }
        const name = user?.name?.split(" ");

        // console.log(user);
        return {
          name: name[0],
          email,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
