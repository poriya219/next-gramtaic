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
        const response = await AxiosInstance.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,{
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
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {

        if (user?.token) {
          token.accessToken = user.token;      
        }
        
        return token;
      },
      async session({ session, token }) {
        session.accessToken = token.accessToken;
        // console.log('session:', session);
        return session;
      },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});

export { handler as GET, handler as POST };