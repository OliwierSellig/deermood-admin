import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      firstName: string;
      surname: string;
      photo: string;
    } & DefaultSession['user'];
    accessToken: string;
  }

  interface User {
    id: string;
    firstName: string;
    surname: string;
    photo: string;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    firstName: string;
    surname: string;
    photo: string;
    accessToken: string;
  }
}
