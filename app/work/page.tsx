import WorkPage from '@/components/pages/Work'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

export default function Work() {
  return <WorkPage />
}
