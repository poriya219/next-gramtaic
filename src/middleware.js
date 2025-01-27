import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  callbacks: {
    authorized: ({ token }) => {
      if (!token?.accessToken) {
        return false; // Block unauthorized access
      }
      return true;
    },
  },
  pages: {
    signIn: "/login", // Redirect unauthenticated users to sign-in
  },
});

export const config = {
  matcher: ["/panel/:path*"], // Protect this page
};