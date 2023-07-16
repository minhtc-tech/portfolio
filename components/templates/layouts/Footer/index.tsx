import GitHubIcon from '@/components/atoms/icons/gitHub'
import LinkedInIcon from '@/components/atoms/icons/linkedIn'
import LogoIcon from '@/components/atoms/icons/logo'
import clsx from 'clsx'

const footerFollowItems = [
  {
    link: 'https://www.linkedin.com/in/minhtc-tech/',
    icon: <LinkedInIcon />,
  },
  {
    link: 'https://github.com/minhtc-tech',
    icon: <GitHubIcon />,
  },
]

const Footer = () => {
  const footerColClasses =
    'flex w-full flex-col items-center gap-2 px-0 md:w-auto md:px-12'

  return (
    <footer
      className={clsx(
        'flex flex-wrap-reverse items-center justify-center gap-12',
        'bg-neutral-800 py-12',
      )}
    >
      <div className={footerColClasses}>
        <LogoIcon type='light' />
        <span className='text-sm font-normal text-invert'>
          © 2021 MinhTC.Tech
        </span>
      </div>
      <div className={clsx(footerColClasses, 'pt-2 md:items-start md:pt-0')}>
        <span className='text-base font-bold text-invert'>Follow</span>
        <div className='flex gap-4'>
          {footerFollowItems.map((item, index) => (
            <a key={index} href={item.link} target='_blank' className='group'>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
