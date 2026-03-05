import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.scss";
import ToastProvider from "@/components/ToastProvider";
import AppProvider from "@/hooks";
import QueryProvider from "@/context/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luminus Sun",
  description: "Gerência de controle energético fotovoltaico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <AppProvider>
            {children}
            <ToastProvider />
          </AppProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
