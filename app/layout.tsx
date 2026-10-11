import type { Metadata } from "next";
import {
  DM_Sans,
  DM_Serif_Display,
  IBM_Plex_Mono,
  Noto_Serif,
} from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  weight: "variable",
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: "variable",
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Design System",
  description:
    "A visual reference for the portfolio typography and color system.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${notoSerif.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body>{children}</body>
    </html>
  );
}
