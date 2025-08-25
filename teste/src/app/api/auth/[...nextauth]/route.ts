import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Simulação (normalmente você buscaria no banco de dados)
        if (
          credentials?.email === "teste@exemplo.com" &&
          credentials?.password === "1234"
        ) {
          return { id: "1", name: "Usuário Teste", email: credentials.email };
        }
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };

