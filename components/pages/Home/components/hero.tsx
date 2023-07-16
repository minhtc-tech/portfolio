import clsx from 'clsx'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import { MY_GMAIL } from '@/utils/data/global'
import DownloadIcon from '@/components/atoms/icons/download'
import ReactIcon from '@/components/atoms/icons/react'
import { RESUME_LINK } from '@/utils/data/homePage'

const avatarImgBaseSize = 144

const HeroSection = () => {
  const mainHighLightClass = 'text-3xl font-extraBold text-highLight'

  return (
    <section
      className={clsx(
        'flex flex-col md:flex-row md:items-center md:justify-between',
        'pt-4 sm:pt-6 md:pt-0 lg:pt-6',
      )}
    >
      <div
        className={clsx(
          'rounded-sm lg:border-lg lg:bg-neutral-50 lg:drop-shadow-md',
          'lg:px-12 lg:py-7',
        )}
      >
        <div className='lg:pl-1 lg:pr-2'>
          <div className='hidden text-center sm:block md:pt-4 md:text-left'>
            <span className='text-lg font-bold text-primary'>
              Nice to meet you, I&apos;m{' '}
              <span className={mainHighLightClass}>Minh</span>
            </span>
            <br />
            <span className='inline-block pt-6 text-lg font-bold text-primary'>
              <span className={mainHighLightClass}>Front-End</span> Developer
              focus on <span className={mainHighLightClass}>React</span>
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
            <span className='inline-block pt-4 text-2xl font-extraBold text-highLight'>
              Front-End / React
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
                type='default'
                content={MY_GMAIL}
                tooltip={`Send mail to: ${MY_GMAIL}`}
              />
            </a>
            <a download href={RESUME_LINK}>
              <Button
                tooltip="Download Minh's Resume"
                type='primary'
                content='PDF Resume'
                iconPosition='right'
                icon={<DownloadIcon />}
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
              'rotate-45 rounded-lg bg-neutral-50 p-2',
            )}
          >
            <div
              className={clsx(
                'rounded-lg bg-primary-100 p-6',
                'border-lg border-light',
              )}
            >
              <div className='rotate-[15deg]'>
                <ReactIcon type='light' size={88} />
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
            width={avatarImgBaseSize}
            height={avatarImgBaseSize * 1.8}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
