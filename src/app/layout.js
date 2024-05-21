import { Inter } from "next/font/google";
import "./globals.css";
import TanstackQueryProvider from "./TanstackQueryProvider";

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
              {children}
            </TanstackQueryProvider>
        </body>
    </html>
  );
}
