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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${roboto.variable} ${baloo.variable} font-sans h-screen `}
      >
        <div className="flex flex-col h-full bg-base-background">
          {/* // bg-[linear-gradient(to_top_bottom,rgba(255,255,255,0),rgba(255,255,255,1)),url('/assets/background.svg')] */}

          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
