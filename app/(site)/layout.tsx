import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'EKO-SŁOMKA',
  description: 'www.eko-slomka.pl EKO-SŁOMKA. 88-430 Janowiec Wielkopolski, ul. Śniadeckich 25. +48 663 17 22 35',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //get pages
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className='flex items-center justify-between'>
          <Link href="/">EKO Slomka</Link>
          <div className='flex items-center gap-3'>
            {pages.map((page) => (

              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>
        {children}
          </main>
        </body>
    </html>
  )
}
