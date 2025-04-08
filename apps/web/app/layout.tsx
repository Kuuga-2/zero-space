import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { headers } from "next/headers"
import WalletContextProvider from "@/context/wallet"
import { HookProviders } from "@/components/hooksProviders"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie')

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <WalletContextProvider cookies={cookies}>
            <HookProviders>
              {children}
            </HookProviders>
          </WalletContextProvider>
        </Providers>
      </body>
    </html>
  )
}
