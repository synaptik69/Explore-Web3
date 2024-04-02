// ExploreSol/app/layout.tsx
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ExploreSol",
  description: "Explore Solana Ecosystem & Discover Opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <NavigationBar />          
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
