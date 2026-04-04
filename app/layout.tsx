import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Jersey_10 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Provider } from "./provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const GameFont = Jersey_10({ subsets: ["latin"], variable: "--font-game", weight: ["400"] });

export const metadata: Metadata = {
  title: "CodeBox",
  description: "Gamified version for smart learning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        GameFont.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        
          <Provider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </Provider>
      </body>
    </html>
        </ClerkProvider>
  );
}