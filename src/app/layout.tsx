import { ReactNode } from 'react'
import './globals.css'
import Main from './layout/main'
import Navbar from './layout/navbar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex flex-col h-full">
          <Navbar />
          <Main />
          {children}
        </div>
      </body>
    </html>
  )
}
