import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MS WORD CLONE",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}` }>
        {children}
        <Footer />
      </body>
    </html>
  );
}
