import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const authResponse = await fetch(
          `${process.env.NEXT_AUTH_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          },
        );

        if (!authResponse.ok) {
          return null;
        }

        const response = await authResponse.json();

        if (response && response.data) {
          const { id, nickname, image } = response.data;
          return {
            id,
            nickname,
            image,
          };
        }

        return null;
      },
    }),
  ],
  secret: `${process.env.NEXT_AUTH_SECRET}`,
  debug: true,
});
