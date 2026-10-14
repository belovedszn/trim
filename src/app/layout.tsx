import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trimmy.xyz"),
  title: "Trimmy | Your first day on Wall Street",
  description:
    "Trimmy is a Wall Street simulation game. Start with 10,000 in virtual money, practice buying and selling stocks at live prices, take missions from Sal and climb from Rookie to Legend.",
  alternates: { canonical: "https://trimmy.xyz/" },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/BricolageGrotesque-Latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
