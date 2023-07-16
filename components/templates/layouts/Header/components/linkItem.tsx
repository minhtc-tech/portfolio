import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LinkItemProps {
  label: string
  link: string
  onClick: () => void
}

const LinkItem = ({ label, link, onClick }: LinkItemProps) => {
  const pathname = usePathname()

  return (
    <div className='mb-12 md:mb-0'>
      <Link href={link} onClick={onClick} className='group flex justify-center'>
        <div
          className={clsx(
            'relative py-1',
            'text-center text-lg font-bold text-invert md:text-primary',
          )}
        >
          {label}
          <div
            className={clsx(
              pathname === link
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
  )
}

export default LinkItem
