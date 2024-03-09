import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dumisani | Frontend Developer, Data Analyst, Systems Analyst & IT Specialist",
  description: "A frontend developer, data analyst, systems analyst & IT specialist based in Lusaka, Zambia. I am passionate about building and maintaining web applications, data analysis, systems analysis and IT support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
