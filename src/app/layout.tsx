import type { Metadata } from "next"
import "./globals.css"
import { oxygen } from "@/components/fonts"
import TopNav from "@/components/nav"
import { Container } from "@chakra-ui/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Provider } from "@/components/ui/provider"

export const metadata: Metadata = {
  title: "Farine: Bake Better Bread",
  description:
    "Bake Better Bread and Boost Your Baking Skills with Farine: Your Baking Buddy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${oxygen.className} antialiased`}>
        <Provider>
          <Container maxW="container.lg">
            <TopNav />
            {children}
          </Container>
        </Provider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
