import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arya Pokharel - Cybersecurity & Security Engineering",
    template: "%s - Arya Pokharel",
  },
  description:
    "Offensive security professional and cybersecurity lecturer focusing on application security and vulnerability research.",
  keywords: [
    "cybersecurity",
    "vulnerability research",
    "security education",
    "penetration testing",
    "security engineering",
    "DevSecOps",
  ],
  authors: [{ name: "Arya Pokharel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arya Pokharel",
    title: "Arya Pokharel - Cybersecurity & Security Engineering",
    description:
      "Offensive security professional and cybersecurity lecturer focusing on application security and vulnerability research.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Pokharel - Cybersecurity & Security Engineering",
    description:
      "Offensive security professional and cybersecurity lecturer focusing on application security and vulnerability research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
