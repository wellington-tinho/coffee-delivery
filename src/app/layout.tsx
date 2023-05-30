import { Baloo_2 as Baloo, Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

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
      <body className={`${roboto.variable} ${baloo.variable} font-sans  `}>
        <div className="flex flex-col h-full bg-base-background">
          {children}
        </div>
      </body>
    </html>
  )
}
