
import {  Montserrat, Work_Sans,Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer"
import Header from "./components/header"
const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "John Vedastus Chuma",
 
  description: "Web3 Developer passionate about decentralized applications and blockchain tech",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#146EF5"></meta>
      </head>
      <body className={font.className+" font-medium bg-black text-sm"}>
        <Header/>
        <div className="min-h-screen">
        {children}
        </div>
        {/* <Footer/> */}
        </body>
    </html>
  );
}
