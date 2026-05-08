import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Get 2 Grow | Premium Branding & Performance Marketing",
  description:
    "Premium branding. Performance driven marketing. Scalable growth system. That's g2g media for you, where you 'get 2 grow'.",
  icons: {
    icon: [{ url: "/assets/g2g_logo.png", type: "image/png" }],
    shortcut: "/assets/g2g_logo.png",
    apple: "/assets/g2g_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
