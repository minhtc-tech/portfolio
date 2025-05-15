import clsx from 'clsx'
import Image from 'next/image'

import LinkIcon from '@/components/atoms/icons/link'
import LevelLabel from '@/components/atoms/levelLabel'
import {
  ICON_SIZE_SM,
  IMG_TECH_PREFIX,
  PROJECT_IMG_RATIO,
} from '@/utils/config'

const projectItemImgHeight = 206

type Props = {
  img: string
  level: number
  name: string
  link: string
  mainTechStacks: string[]
}
export default function ProjectItem({
  img,
  level,
  name,
  link,
  mainTechStacks,
}: Props) {
  return (
    <div
      className={clsx(
        'group w-full overflow-hidden bg-white',
        'rounded-md border-md border-primary drop-shadow-md',
        'cursor-pointer transition-all hover:drop-shadow-none',
      )}
    >
      <div
        className={clsx(
          'relative overflow-hidden',
          'border-b-md border-primary bg-primary-50',
          'flex h-[206px] items-start',
          'after:bg-gradient-to-r after:opacity-30',
          'after:from-transparent after:via-white after:to-transparent',
          'after:h-full after:w-1/3 after:content-[""]',
          'after:absolute after:-left-[360px] after:top-0',
          'group-hover:after:animate-highLight',
        )}
      >
        <Image
          src={img}
          width={projectItemImgHeight * PROJECT_IMG_RATIO}
          height={projectItemImgHeight}
          alt={name}
          className={clsx(
            'min-h-[206px] grayscale filter',
            'transition-all group-hover:scale-110 group-hover:grayscale-0',
          )}
        />
        <div
          className={clsx(
            'absolute -right-[2px] -top-[2px]',
            'bg-primary-800 px-3 py-2',
            'rounded-bl-sm border-md',
          )}
        >
          <div className='-mt-[1px]'>
            <LevelLabel level={level} />
          </div>
        </div>
      </div>
      <div>
        <div className='py-6 text-center'>
          <a
            title='View the live version'
            target='_blank'
            className='group/link inline-flex items-center gap-3'
            href={link}
            onClick={(event) => event.stopPropagation()}
          >
            <span className='text-base font-bold text-primary transition-all group-hover/link:text-highLight'>
              {name}
            </span>

            <div className='w-6'>
              <LinkIcon variant='dark' />
            </div>
          </a>
        </div>
        <div className='flex justify-center gap-3 pb-6'>
          {mainTechStacks.map((item) => (
            <Image
              key={item}
              src={`${IMG_TECH_PREFIX}${item}`}
              width={ICON_SIZE_SM}
              height={ICON_SIZE_SM}
              alt='Tech Stacks Icon'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
