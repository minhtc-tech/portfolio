import { Fragment } from 'react'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'

type Props = {
  children: React.ReactNode
}
export default function DefaultLayout({ children }: Props) {
  return (
    <Fragment>
      <Header />

      <main className='mx-auto max-w-screen px-3 sm:px-4 md:px-8'>
        {children}
      </main>

      <Footer />
    </Fragment>
  )
}
