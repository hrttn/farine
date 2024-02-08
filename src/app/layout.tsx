import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { oxygen } from "@/components/fonts";
import TopNav from "@/components/nav";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Farine: Bake Better Bread",
  description:
    "Bake Better Bread and Boost Your Baking Skills with Farine: Your Baking Buddy",
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
          <Container maxW="container.lg">
            <TopNav />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
