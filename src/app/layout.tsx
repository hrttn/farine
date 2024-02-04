import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { oxygen } from "@/components/fonts";
import TopNav from "@/components/nav";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Farine: make better bread",
  description: "Make better bread",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxygen.className} antialiased`}>
        <Providers>
          <Container>
            <TopNav />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
