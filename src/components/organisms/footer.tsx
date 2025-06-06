import clsx from 'clsx'

import GitHubIcon from '@/components/atoms/icons/gitHub'
import LinkedInIcon from '@/components/atoms/icons/linkedIn'
import LogoIcon from '@/components/atoms/icons/logo'

const FOLLOW_ITEMS = [
  { link: 'https://www.linkedin.com/in/minhtc-tech/', icon: <LinkedInIcon /> },
  { link: 'https://github.com/minhtc-tech', icon: <GitHubIcon /> },
]

export default function Footer() {
  const footerColClasses =
    'flex w-full flex-col items-center gap-2 px-0 md:w-auto md:px-12'

  return (
    <footer
      className={clsx(
        'flex flex-wrap-reverse items-center justify-center gap-12',
        'bg-black py-12',
      )}
    >
      <div className={footerColClasses}>
        <LogoIcon />
        <span className='text-sm font-normal text-invert'>
          © 2021 MinhTC.Tech
        </span>
      </div>
      <div className={clsx(footerColClasses, 'pt-2 md:items-start md:pt-0')}>
        <span className='text-base font-bold text-invert'>Follow</span>
        <div className='flex gap-4'>
          {FOLLOW_ITEMS.map((item, index) => (
            <a key={index} href={item.link} target='_blank' className='group'>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
