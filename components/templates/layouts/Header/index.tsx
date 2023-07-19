'use client'

import LogoIcon from '@/components/atoms/icons/logo'
import clsx from 'clsx'
import LinkItem from './components/linkItem'
import HeartIcon from '@/components/atoms/icons/heart'
import {
  MY_GMAIL,
  HIRE_ME_GMAIL_SUBJECT,
  headerLinks,
} from '@/utils/data/global'
import CloseIcon from '@/components/atoms/icons/close'
import { useState } from 'react'
import MenuIcon from '@/components/atoms/icons/menu'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hideMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={clsx(
        'flex flex-wrap items-center justify-between',
        'mx-auto max-w-screen p-3 sm:p-4 md:p-8',
      )}
    >
      <Link href='/'>
        <LogoIcon type='dark' />
      </Link>

      <button
        type='button'
        onClick={() => setIsMenuOpen(true)}
        className={clsx(
          'group p-3 md:hidden',
          'rounded-sm border-md border-highLight',
          'transition-all hover:bg-primary-600',
        )}
      >
        <MenuIcon hoverClasses='group-hover:fill-neutral-50' />
      </button>

      <div
        className={clsx(
          isMenuOpen && '!translate-x-0',
          'fixed bottom-0 left-0 right-0 top-0 z-50 -translate-x-full',
          'md:static md:translate-x-0',
          'flex flex-wrap content-center justify-center md:flex-1 md:justify-between',
          'bg-neutral-800 md:bg-transparent',
          'transition-all',
        )}
      >
        <button
          onClick={hideMenu}
          type='button'
          className={clsx(
            'absolute right-3 top-5 sm:right-4 sm:top-6',
            'group p-3 md:hidden',
            'rounded-sm',
            'transition-all hover:bg-neutral-50',
          )}
        >
          <CloseIcon
            type='light'
            size={24}
            hoverClasses='group-hover:fill-primary-600'
          />
        </button>

        <nav
          className={clsx(
            'md:flex md:flex-1 md:items-center md:gap-8',
            'w-full pb-4 md:pb-0 md:pl-9',
          )}
        >
          {headerLinks.map((item) => (
            <LinkItem
              key={item.label}
              onClick={hideMenu}
              label={item.label}
              link={item.link}
            />
          ))}
          <div className='mb-8 md:mb-0'>
            <a
              target='_blank'
              href='https://blog.minhtc.tech/'
              className='group flex justify-center'
            >
              <div
                className={clsx(
                  'relative py-1',
                  'text-center text-lg font-bold text-invert md:text-primary',
                )}
              >
                Blog
                <div
                  className={clsx(
                    'w-0 border-invert md:border-primary lg:border-primary',
                    'absolute bottom-0 left-0',
                    'h-0 rounded-sm border-t-md border-highLight',
                    'transition-all duration-300 group-hover:w-full',
                  )}
                />
              </div>
            </a>
          </div>
        </nav>

        <a
          title='I will make your project a success'
          href={`mailto:${MY_GMAIL}?subject=${HIRE_ME_GMAIL_SUBJECT}`}
          className={clsx(
            'relative overflow-hidden rounded-sm',
            'after:h-full after:w-12 after:opacity-30 after:content-[""]',
            'after:bg-gradient-to-r after:from-transparent after:via-neutral-50 after:to-transparent',
            'after:absolute after:-left-12 after:top-0',
            'after:animate-highLight',
            'drop-shadow-md',
            'transition-all hover:drop-shadow-none',
          )}
        >
          <div
            className={clsx(
              'group flex flex-wrap content-center justify-center gap-3',
              'bg-green px-9 py-3',
              'rounded-sm border-lg border-invert md:border-primary',
              'text-lg font-bold text-invert',
            )}
          >
            <span>Hire Me</span>
            <div className='mt-[1px] transition-all group-hover:animate-heartBeat'>
              <HeartIcon />
            </div>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Header
