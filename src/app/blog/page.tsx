import type { Metadata } from 'next'

import { getBlogData } from '@/utils/getData'
import BlogPage from '@/components/pages/blog'

export const metadata: Metadata = {
  title: 'Blog | MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

export default async function Blog() {
  const blogData = await getBlogData()

  return <BlogPage blogData={blogData} />
}
