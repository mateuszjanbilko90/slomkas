import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EKO-SŁOMKA',
  description: 'www.eko-slomka.pl EKO-SŁOMKA. 88-430 Janowiec Wielkopolski, ul. Śniadeckich 25. +48 663 17 22 35',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <main>
        {children}
          </main>
        </body>
    </html>
  )
}
