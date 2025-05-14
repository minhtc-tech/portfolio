import type { Metadata } from 'next'
import BlogPage from '@/components/pages/blog'

export const metadata: Metadata = {
  title: 'Blog | MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

export default function Blog() {
  return <BlogPage />
}
