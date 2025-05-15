import type { Metadata } from 'next'
import BlogDetailPage from '@/components/pages/blogDetail'

export const metadata: Metadata = {
  title: 'Blog Detail | MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

type Props = {
  params: Promise<{ slug: string }>
}
export default async function BlogDetail({ params }: Props) {
  return <BlogDetailPage slug={(await params).slug} />
}
