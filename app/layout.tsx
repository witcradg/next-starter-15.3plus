import { Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import siteMetadata from "../siteMetadata.json";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const Copyright = () => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center">
      &copy; {startYear === currentYear ? currentYear : `${startYear}–${currentYear}`}
    </footer>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${playfairDisplay.variable} antialiased font-playfair`}>
        <Header siteTitle={siteMetadata.title} />
        <div className="w-full h-px bg-white" />
        {children}
        <h3 className="flex flex-col md:flex-row justify-center">
          <div>{<Copyright />}</div>
          <div className="hidden md:inline">&nbsp;|&nbsp;</div>
          <div className="inline tracking-wider">{siteMetadata.title}</div>
          <div className="hidden md:inline">&nbsp;|&nbsp;</div>
          <div>All Rights Reserved</div>
        </h3>
      </body>
    </html>
  );
}
