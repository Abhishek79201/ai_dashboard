// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [Google],
// });

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Microsoft from "next-auth/providers/azure-ad";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Microsoft({
      clientId: process.env.AUTH_MICROSOFT_ID,
      clientSecret: process.env.AUTH_MICROSOFT_SECRET,
      tenantId: process.env.AUTH_MICROSOFT_TENANT_ID,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
