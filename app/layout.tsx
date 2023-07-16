import { Nunito } from 'next/font/google'
import Header from '@/components/templates/layouts/Header'
import Footer from '@/components/templates/layouts/Footer'
import './globals.css'
// import AnimatedCursor from '@/components/atoms/animatedCursor'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['500', '600', '700'],
  style: ['normal'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} bg-neutral-50`}>
        <Header />
        {children}
        <Footer />
        {/* <AnimatedCursor /> */}
      </body>
    </html>
  )
}
