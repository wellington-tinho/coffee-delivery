import { Baloo_2 as Baloo, Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import Navbar from './layout/navbar'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
const baloo = Baloo({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baloo',
})

export const metadata = {
  title: 'Coffee Delivery',
  description: 'Encontre o café perfeito para qualquer hora do dia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baloo.variable} font-sans h-screen`}
      >
        <div className="flex flex-col h-full bg-base-background">
          <Navbar />
          {/* <Main /> */}
          {children}
        </div>
      </body>
    </html>
  )
}
