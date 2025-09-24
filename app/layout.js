import { Kode_Mono } from "next/font/google";


import "./globals.css"



const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // اختياري حسب الحاجة
});






export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={kodeMono.className + "  bg-amber-100 overflow-x-hidden custom-scroll"}>
        {children}
      </body>
    </html>
  );
}