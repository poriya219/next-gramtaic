import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect to the login page if not authenticated
  },
});

export const config = {
//   matcher: ["/dashboard/:path*", "/protected/:path*"], // Protected routes
matcher: ["/panel/:path*"],
};