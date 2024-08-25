import { Inter } from "next/font/google";
import "./globals.css";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crops Climate Prediction",
  description: "IBM AI Powered",
};
// const theme = {
//   light:{
//     primary: "#0f172a",
//   },
//   dark:{
//     primary: '#0f172a',
//   },
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
              <body className={inter.className}>
              <StackProvider app={stackServerApp}>
                  <StackTheme>
                    <Navbar/>
                    <div className="bg-slate-900 text-slate-100 overflow-x-hidden">
                        {children}
                    </div>
                  </StackTheme>
              </StackProvider>
              </body>
            </html>
  );
}
