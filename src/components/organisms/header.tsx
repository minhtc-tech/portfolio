'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import LogoIcon from '@/components/atoms/icons/logo'
import HeartIcon from '@/components/atoms/icons/heart'
import {
  MY_GMAIL,
  HIRE_ME_GMAIL_SUBJECT,
  headerLinks,
} from '@/utils/data/global'
import CloseIcon from '@/components/atoms/icons/close'
import MenuIcon from '@/components/atoms/icons/menu'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={clsx(
        'flex flex-wrap items-center justify-between',
        'mx-auto max-w-screen p-3 sm:p-4 md:p-8',
      )}
    >
      <Link href='/'>
        <LogoIcon variant='dark' />
      </Link>

      <button
        onClick={() => setIsMenuOpen(true)}
        className={clsx(
          'group p-3 md:hidden',
          'rounded-sm border-md border-highLight',
          'transition-all hover:bg-primary-600',
        )}
      >
        <MenuIcon />
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
          onClick={() => setIsMenuOpen(false)}
          className={clsx(
            'absolute right-3 top-5 sm:right-4 sm:top-6',
            'group rounded-sm p-3 md:hidden',
            'transition-all hover:bg-neutral-50',
          )}
        >
          <div className='w-6'>
            <CloseIcon />
          </div>
        </button>

        <nav
          className={clsx(
            'md:flex md:flex-1 md:items-center md:gap-8',
            'w-full pb-4 md:pb-0 md:pl-9',
          )}
        >
          {headerLinks.map((item) => (
            <div key={item.label} className='mb-8 md:mb-0'>
              <Link
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className='group flex justify-center'
              >
                <div
                  className={clsx(
                    'relative py-1',
                    'text-center text-lg font-bold text-invert md:text-primary',
                  )}
                >
                  {item.label}
                  <div
                    className={clsx(
                      pathname === item.link
                        ? 'w-full border-highLight'
                        : 'w-0 border-invert md:border-primary lg:border-primary',
                      'absolute bottom-0 left-0',
                      'h-0 rounded-sm border-t-md border-highLight',
                      'transition-all duration-300 group-hover:w-full',
                    )}
                  />
                </div>
              </Link>
            </div>
          ))}
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
