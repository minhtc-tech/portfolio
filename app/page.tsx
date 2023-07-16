import HomePage from '@/components/pages/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

export default function Home() {
  return <HomePage />
}
