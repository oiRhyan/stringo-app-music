import { NextAuthOptions } from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const authOptions : NextAuthOptions = {
    providers: [
        Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string
        }),
    ],
    secret: '0TYG8BrCIApX8fiwOKO3HaG4z7vIcBbOF1WliBjgC+c=',
};