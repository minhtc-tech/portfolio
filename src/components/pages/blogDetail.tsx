'use server'

import Link from 'next/link'

import Button from '@/components/atoms/button'
import MarkdownRenderer from '@/components/molecules/markdownRenderer'
import DefaultLayout from '@/components/templates/defaultLayout'
import { getBlogDetailData } from '@/utils/getData'

type Props = {
  slug: string
}
export default async function BlogDetailPage({ slug }: Props) {
  const blogDetailData = await getBlogDetailData(slug)

  return (
    <DefaultLayout>
      <section className='mx-auto max-w-4xl pb-8 pt-3'>
        <h1 className='pb-3 text-center text-3xl font-extraBold'>
          {blogDetailData.title}
        </h1>
        <p className='pb-12 text-center text-sm'>
          Updated:{' '}
          {new Date(blogDetailData.publishedAt).toLocaleDateString('en-GB')}
        </p>

        <div className='pb-12 pt-3'>
          <MarkdownRenderer content={blogDetailData.content.markdown} />
        </div>

        <div className='flex justify-center pb-12 pt-3'>
          <Link href={'/blog'}>
            <Button variant='primary' content='Explore More Blogs' />
          </Link>
        </div>
      </section>
    </DefaultLayout>
  )
}
