import { Inter } from "next/font/google";
import "./globals.css";
import TanstackQueryProvider from "./TanstackQueryProvider";
import  Navbar  from "../components/Navbar"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Text app",
  description: "Easy text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TanstackQueryProvider>
        <Navbar />
              {children}
            </TanstackQueryProvider>
        </body>
    </html>
  );
}
