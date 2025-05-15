'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import Button from '@/components/atoms/button'
import ArrowIcon from '@/components/atoms/icons/arrow'
import SearchIcon from '@/components/atoms/icons/search'
import Input from '@/components/atoms/input'
import { BlogItem } from '@/types/blog'

const PAGE_SIZE = 8
const BLOG_ITEM_IMG_HEIGHT = 168
const BLOG_IMG_RATIO = 1.905

type Props = {
  blogData: BlogItem[]
}
export default function BlogListSection({ blogData }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)

  const filteredBlogData = blogData.filter((blogItem) =>
    blogItem.node.title.toLowerCase().includes(searchValue.toLowerCase()),
  )
  const displayedBlogData = filteredBlogData.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  )
  const maxPage = Math.ceil(filteredBlogData.length / PAGE_SIZE)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > maxPage) return
    setPage(newPage)
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
    setPage(1)
  }

  return (
    <Fragment>
      <section className='flex flex-wrap gap-6 pb-3 sm:pb-4 md:pb-6'>
        <div className='w-[320px]'>
          <Input
            attr={{
              onChange: (event) => handleSearch(event.target.value),
              type: 'string',
              placeholder: 'Search',
            }}
            rightButton={
              <Button
                variant='primary'
                attr={{ title: 'Start search' }}
                leftIcon={<SearchIcon />}
              />
            }
          />
        </div>

        <div className='group relative w-[224px]'>
          <Input
            attr={{
              type: 'text',
              value: `${page} / ${maxPage}`,
              disabled: true,
            }}
            leftButton={
              <Button
                variant='primary'
                attr={{
                  title: 'Go to previous page',
                  onClick: () => handlePageChange(page - 1),
                }}
                leftIcon={
                  <div className='w-4 rotate-180'>
                    <ArrowIcon />
                  </div>
                }
              />
            }
            rightButton={
              <Button
                variant='primary'
                attr={{
                  title: 'Go to next page',
                  onClick: () => handlePageChange(page + 1),
                }}
                leftIcon={
                  <div className='w-4'>
                    <ArrowIcon />
                  </div>
                }
              />
            }
          />
        </div>
      </section>

      <section className='pb-8'>
        <div
          className={clsx(
            'grid gap-4 sm:gap-6 md:gap-8 lg:gap-8',
            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
            'pb-12 pt-5',
            'transition-all duration-300',
          )}
        >
          {displayedBlogData.map((blogItem) => (
            <Link
              key={blogItem.node.slug}
              href={`/blog/${blogItem.node.slug}`}
              className={clsx(
                'group w-full overflow-hidden bg-white',
                'rounded-md border-md border-primary drop-shadow-md',
                'transition-all hover:drop-shadow-none',
              )}
            >
              <div
                className={clsx(
                  'relative overflow-hidden',
                  'border-b-md border-primary bg-primary-50',
                  'flex h-[168px] items-start',
                  'after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:opacity-30',
                  'after:absolute after:-left-[360px] after:top-0 after:h-full after:w-1/3 after:content-[""]',
                  'group-hover:after:animate-highLight',
                )}
              >
                <Image
                  src={blogItem.node.coverImage.url}
                  width={BLOG_ITEM_IMG_HEIGHT * BLOG_IMG_RATIO}
                  height={BLOG_ITEM_IMG_HEIGHT}
                  alt={blogItem.node.title}
                  className={clsx(
                    'min-h-[168px] grayscale filter',
                    'transition-all group-hover:scale-110 group-hover:grayscale-0',
                  )}
                />
              </div>

              <div>
                <div className='flex flex-col gap-3 px-4 py-6 text-center'>
                  <span className='line-clamp-2 text-base font-bold text-primary'>
                    {blogItem.node.title}
                  </span>
                  <span className='text-sm text-primary'>
                    Updated:{' '}
                    {new Date(blogItem.node.publishedAt).toLocaleDateString(
                      'en-GB',
                    )}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {page < maxPage && (
          <div className='flex justify-center pb-12'>
            <Button
              variant='primary'
              attr={{ onClick: () => handlePageChange(page + 1) }}
              content='Next Page'
            />
          </div>
        )}
      </section>
    </Fragment>
  )
}
