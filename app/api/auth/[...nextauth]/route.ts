import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const authOptions : NextAuthOptions = {
    providers: [
        Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };