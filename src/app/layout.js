"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navabar from "./compoents/Navabar";
import { Footer } from "./compoents/Footer";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <Navabar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
