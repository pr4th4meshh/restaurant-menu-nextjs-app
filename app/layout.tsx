import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import StoreProvider from "@/redux/storeProvider"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlackopsMenu",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
