import Navbar from "@/layout/Navbar";
import "./globals.css";
import { Josefin_Sans, Geo } from "next/font/google";
import Footer from "@/layout/Footer";
import { NextAuthProvider } from "./Providers";

const josfin = Josefin_Sans({ subsets: ["latin"], weight: "700" });
const geo = Geo({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "EduConnect360",
  description:
    "EduConnect360 is the ultimate destination for students seeking the perfect university match. Our platform is designed exclusively to streamline the university search process, making it easier than ever for students to find their ideal educational institution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josfin.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
