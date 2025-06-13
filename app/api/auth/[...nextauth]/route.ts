import NextAuth, {NextAuthOptions, User, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";

const users = [
  {
    id: "1",
    name: "Pablo",
    email: "pablo@example.com",
    password: "123456", // Para pruebas, luego usar variable de entorno
  },
  {
    id: "2",
    name: "Socio",
    email: "socio@example.com",
    password: "123456", // Para pruebas, luego usar variable de entorno
  },
];

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Correo", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        console.log('credentials', credentials);
        // Verifica las credenciales contra los usuarios simulados
        
        if (!credentials) return null;
        const user = users.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
          // Devuelve el objeto usuario para la sesión
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: User }) {   
        // Si el usuario existe, agrega su ID al token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session, token: JWT }) {
      // Agrega el ID del usuario al objeto de sesión
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
