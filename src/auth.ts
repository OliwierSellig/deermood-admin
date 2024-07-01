import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
  firstName: string;
  surname: string;
  email: string;
  photo: string;
}

export const {
  handlers: { GET, POST },
  auth,
  unstable_update: update,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;

          const response = await fetch(
            'http://localhost:3000/api/v1/admins/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            },
          );

          const res = await response.json();

          if (res?.data?.admin)
            return {
              ...res.data.admin,
              accessToken: res.token,
            } as User & { accessToken: string; createdAt: string };
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update' && session) {
        token = { ...token, ...session.user };
        return token;
      }
      if (user) {
        token.email = user.email;
        token.firstName = user.firstName;
        token.surname = user.surname;
        token.photo = user.photo;
        token.accessToken = user.accessToken;
        token.createdAt = user.createdAt;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.email = token.email ?? '';
        session.user.firstName = token.firstName as string;
        session.user.surname = token.surname as string;
        session.user.photo = token.photo as string;
        session.user.createdAt = token.createdAt as string;
        session.accessToken = token.accessToken as string;
      }

      return session;
    },
  },
});
