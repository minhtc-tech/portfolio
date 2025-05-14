import DefaultLayout from '@/components/templates/defaultLayout'
import { getBlogData } from '@/utils/getData'
import BlogListSection from './sections/blogList'

export default async function BlogPage() {
  const blogData = await getBlogData()

  return (
    <DefaultLayout>
      <BlogListSection blogData={blogData} />
    </DefaultLayout>
  )
}
