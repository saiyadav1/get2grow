import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import GrowthAuditModal from "@/components/GrowthAuditModal";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://g2gmediahouse.com"),

  title: "Get 2 Grow | Premium Branding & Performance Marketing",

  description:
    "Premium branding. Performance driven marketing. Scalable growth system. That's G2G Media House, where you 'Get 2 Grow'.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Get 2 Grow | Premium Branding & Performance Marketing",
    description:
      "Premium branding. Performance driven marketing. Scalable growth system.",

    url: "https://g2gmediahouse.com",

    siteName: "G2G Media House",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/assets/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "G2G Media House",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Get 2 Grow | Premium Branding & Performance Marketing",
    description:
      "Premium branding. Performance driven marketing. Scalable growth system.",
    images: ["/assets/og-banner.jpg"],
  },

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
      <head>
        <meta property="og:title" content="Get 2 Grow | Premium Branding & Marketing" />
        <meta
          property="og:description"
          content="G2G Media House - Premium branding & performance marketing"
        />
        <meta
          property="og:image"
          content="https://g2gmediahouse.com/og-banner.jpg"
        />
        <meta property="og:url" content="https://g2gmediahouse.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://g2gmediahouse.com/" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/di6ic3zth/video/upload/q_auto/f_auto/v1779811160/Theodore_video_1_todoce.jpg" fetchPriority="high" />

      </head>
      <body
        className={`${bricolageGrotesque.variable} font-sans antialiased overflow-x-hidden`}
      >
        <GrowthAuditModal />
        {children}
      </body>
    </html>
  );
}