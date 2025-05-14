import type { Metadata } from 'next'
import BlogDetailPage from '@/components/pages/blogDetail'

export const metadata: Metadata = {
  title: 'Blog Detail | MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

type Props = {
  params: { slug: string }
}
export default function BlogDetail({ params }: Props) {
  return <BlogDetailPage slug={params.slug} />
}
