import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import LeftNavbarList from '@/components/LeftNavbarList'
import TopNavbar from '@/components/TopNavbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Garage Master',
  description: 'Your one stop solution to manage your vehicle workshop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`md:flex ${poppins.className}`}>
        <LeftNavbarList />
        <div className='md:flex md:flex-col w-full'>
          <TopNavbar />
          <main className='flex flex-col w-full items-center justify-center h-full'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
