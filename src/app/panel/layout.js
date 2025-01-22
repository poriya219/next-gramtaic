import PanelNavBar from "@/components/panel-navbar";
import "../../styles/globals.css";

export const metadata = {
  title: "گراماتیک || Gramatic",
  description: "مدیریت هوشمند اینستاگرام",
};

export default function RootLayout({ children }) {
    return (
      <html lang="fa">
        <body className="h-screen"
        >
            <PanelNavBar/>
          {children}
        </body>
      </html>
    );
  }