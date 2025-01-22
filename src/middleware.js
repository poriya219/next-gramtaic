import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect unauthenticated users to sign-in
  },
});

export const config = {
  matcher: [], // Protect this page
};