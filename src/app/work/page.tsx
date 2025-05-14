import type { Metadata } from 'next'
import WorkPage from '@/components/pages/work'

export const metadata: Metadata = {
  title: 'Work | MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

export default function Work() {
  return <WorkPage />
}
