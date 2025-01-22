import "../styles/globals.css";

export const metadata = {
  title: "گراماتیک || Gramatic",
  description: "مدیریت هوشمند اینستاگرام",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
      >
        {children}
      </body>
    </html>
  );
}
