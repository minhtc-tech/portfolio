import clsx from 'clsx'
import Image from 'next/image'

import { MY_GMAIL } from '@/utils/data/global'
import { RESUME_LINK, techStacks } from '@/utils/data/homePage'
import { ICON_SIZE_MD, ICON_SIZE_SM, IMG_TECH_PREFIX } from '@/utils/config'

import Button from '@/components/atoms/button'
import ReactIcon from '@/components/atoms/icons/react'
import DownloadIcon from '@/components/atoms/icons/download'
import DefaultLayout from '@/components/templates/defaultLayout'

const AVATAR_IMG_SIZE = 144

export default function HomePage() {
  return (
    <DefaultLayout>
      <section
        data-test='hero-section'
        className={clsx(
          'flex flex-col md:flex-row md:items-center md:justify-between',
          'pt-4 sm:pt-6 md:pt-0 lg:pt-6',
        )}
      >
        <div
          className={clsx(
            'lg:bg-white rounded-sm lg:border-lg lg:drop-shadow-md',
            'lg:px-12 lg:py-7',
          )}
        >
          <div className='lg:pl-1 lg:pr-2'>
            <div className='hidden text-center sm:block md:pt-4 md:text-left'>
              <span
                className={clsx(
                  'inline-flex items-center',
                  'text-lg font-bold text-primary',
                )}
              >
                Nice to meet you, I&apos;m{' '}
                <span className='pl-3 text-3xl font-extraBold text-highLight'>
                  Minh
                </span>
              </span>
              <br />
              <span
                className={clsx(
                  'inline-flex items-center pt-6',
                  'text-lg font-bold text-primary',
                )}
              >
                A productive
                <div className='px-3'>
                  <Image
                    src={`${IMG_TECH_PREFIX}ts.svg`}
                    alt='TypeScript Logo'
                    width={ICON_SIZE_SM}
                    height={ICON_SIZE_SM}
                  />
                </div>
                <span className='text-3xl font-extraBold text-highLight'>
                  Software Engineer
                </span>
              </span>
            </div>

            <div className='text-center sm:hidden'>
              <span className='text-lg font-bold text-primary'>
                Hi, I&apos;m{' '}
                <span className='text-2xl font-extraBold text-highLight'>
                  Minh
                </span>
              </span>
              <br />
              <span
                className={clsx(
                  'inline-flex items-center',
                  'pt-4 text-2xl font-extraBold text-highLight',
                )}
              >
                <div className='pr-2'>
                  <Image
                    src={`${IMG_TECH_PREFIX}ts.svg`}
                    alt='TypeScript Logo'
                    width={ICON_SIZE_SM}
                    height={ICON_SIZE_SM}
                  />
                </div>
                Software Engineer
              </span>
            </div>

            <div
              className={clsx(
                'flex flex-wrap justify-center gap-6 md:justify-start',
                'pt-8 md:pb-4 lg:pb-3',
              )}
            >
              <a href={`mailto:${MY_GMAIL}`}>
                <Button
                  attr={{ title: `Send mail to: ${MY_GMAIL}` }}
                  content={MY_GMAIL}
                />
              </a>
              <a download href={RESUME_LINK}>
                <Button
                  variant='primary'
                  attr={{ title: "Download Minh's Resume" }}
                  content='PDF Resume'
                  rightIcon={
                    <div className='w-6'>
                      <DownloadIcon />
                    </div>
                  }
                />
              </a>
            </div>
          </div>
        </div>

        <div className='hidden flex-1 overflow-x-clip px-2 md:block'>
          <div className='flex flex-wrap items-center pl-3 pr-2'>
            <div className='flex-1 rounded-full border-md border-light' />
            <div
              className={clsx(
                'hidden xl:block',
                'bg-white rotate-45 rounded-lg p-2',
              )}
            >
              <div
                className={clsx(
                  'rounded-lg bg-primary-100 p-6',
                  'border-lg border-light',
                )}
              >
                <div className='w-[88px] rotate-[15deg]'>
                  <ReactIcon />
                </div>
              </div>
            </div>
            <div className='flex-1 rounded-full border-md border-light' />
          </div>
        </div>

        <div
          className={clsx(
            'flex justify-center',
            'py-8 lg:bg-primary-50 lg:p-12',
            'rounded-full lg:border-lg lg:border-primary',
          )}
        >
          <div className='pr-1 md:pr-0 lg:pl-2 lg:pr-4'>
            <Image
              src='/minh.png'
              alt="Minh's Avatar"
              className='drop-shadow-md'
              width={AVATAR_IMG_SIZE}
              height={AVATAR_IMG_SIZE * 1.8}
            />
          </div>
        </div>
      </section>

      <section
        data-test='tech-stacks-section'
        className='flex flex-col items-center gap-6 py-12'
      >
        <span className='text-2xl font-bold'>Tech Stacks</span>

        <div className='flex flex-wrap justify-center gap-8 pb-8 pt-1'>
          {Object.entries(techStacks).map(([label, items]) => (
            <div
              key={label}
              className={clsx(
                'relative flex flex-wrap justify-center gap-4',
                'bg-white mt-4 px-6 pb-6 pt-12',
                'rounded-md border-md border-primary',
                'drop-shadow-md',
              )}
            >
              <span
                className={clsx(
                  'absolute -top-6 left-4',
                  'bg-white px-4 py-3',
                  'rounded-full border-md border-primary',
                  'text-base font-bold text-highLight',
                )}
              >
                {label}
              </span>

              {items.map((item) => (
                <div
                  key={item.label}
                  className={clsx(
                    'flex flex-col items-center gap-2',
                    'px-4 pb-2 pt-3',
                    'rounded-sm border-sm border-primary',
                  )}
                >
                  <Image
                    src={`${IMG_TECH_PREFIX}${item.img}`}
                    alt={item.label}
                    width={ICON_SIZE_MD}
                    height={ICON_SIZE_MD}
                  />
                  <span className='text-sm font-normal text-primary'>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  )
}
