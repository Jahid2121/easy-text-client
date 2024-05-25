import "./globals.css";
import TanstackQueryProvider from "./TanstackQueryProvider";
import  Navbar  from "../components/Navbar"

export const metadata = {
  title: "Easy Text app",
  description: "Easy text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <TanstackQueryProvider>
        <Navbar />
              {children}
            </TanstackQueryProvider>
        </body>
    </html>
  );
}
