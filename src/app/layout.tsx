'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A Music',
  description: 'Music Shopping Easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
