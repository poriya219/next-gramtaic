import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import AxiosInstance from '../../../../utils/axiosInstance';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Replace with your API call
        const response = await AxiosInstance.post('/auth/signin',{
          email: credentials.email,
          password: credentials.password,
        })
            .catch(error => {
                console.log(`response error: ${error.message}`);
                throw new Error("Invalid credentials catch");
                
                // setError(error.message);
            });
            const data = response.data;
        if (response.status === 200 && data.token) {
            // Return user object if login is successful
            return {token: data.token };
          } else {
            throw new Error("Invalid credentials");
          }
      },
    }),
  ],
//   session: {
//     strategy: 'jwt',
//   },
  callbacks: {
    async jwt({ token, user }) {
        if (user?.token) {
          token.accessToken = user.token;
        }
        console.log("JWT Callback - Updated Token:", token);
        
        return token;
      },
      async session({ session, token }) {
        session.accessToken = token.accessToken;
        
        return session;
      },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };