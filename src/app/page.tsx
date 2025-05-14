import type { Metadata } from 'next'
import HomePage from '@/components/pages/home'

export const metadata: Metadata = {
  title: 'MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

export default function Home() {
  return <HomePage />
}
