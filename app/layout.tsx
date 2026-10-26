import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const display = Fredoka({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: {
    default: "Su Myat Myat Htay | Software Engineer & AI Builder",
    template: "%s | Su Myat Myat Htay",
  },
  description:
    "Portfolio of Su Myat Myat Htay — software engineering, AI automation, product development, hackathons, and creative technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
