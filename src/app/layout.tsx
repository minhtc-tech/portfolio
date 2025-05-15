'use client'

import dynamic from 'next/dynamic'
import { Nunito } from 'next/font/google'
const Cursor = dynamic(() => import('react-animated-cursor'), { ssr: false })

import './globals.css'

const font = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['500', '600', '700'],
  style: ['normal'],
})

type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={`${font.className} bg-white`}>
        {children}

        <Cursor
          color='231, 0, 11'
          innerSize={12}
          innerScale={0.8}
          clickables={['.cursor-pointer', 'button', 'a', 'input']}
        />
      </body>
    </html>
  )
}
