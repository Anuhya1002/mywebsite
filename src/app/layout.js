import { Inter } from "next/font/google";


import { ThemeProvider } from "../app/context/ThemeContext";
import Header from "../components/header/page";
import Footer from "../components/footer";

import "../../src/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Streaming",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
