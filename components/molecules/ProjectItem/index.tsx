import clsx from 'clsx'
import LinkIcon from '@/components/atoms/icons/link'
import LevelLabel from '@/components/atoms/LevelLabel'
import {
  ICON_SIZE_SM,
  IMG_PROJECT_PREFIX,
  IMG_TECH_PREFIX,
  PROJECT_IMG_RATIO,
} from '@/utils/config'
import Image from 'next/image'

const projectItemImgHeight = 206

interface ProjectItemProps {
  img: string
  level: number
  name: string
  link: string
  mainTechStacks: string[]
}

const ProjectItem = ({
  img,
  level,
  name,
  link,
  mainTechStacks,
}: ProjectItemProps) => {
  return (
    <button
      type='button'
      className={clsx(
        'group overflow-hidden',
        'rounded-md border-md border-primary drop-shadow-md',
        'w-full bg-neutral-50',
        'transition-all hover:drop-shadow-none',
      )}
    >
      <div
        className={clsx(
          'relative overflow-hidden',
          'border-b-md border-primary bg-primary-50',
          'flex max-h-[206px] items-center justify-center',
          'after:bg-gradient-to-r after:from-transparent after:via-neutral-50 after:to-transparent after:opacity-30',
          'after:absolute after:-left-[360px] after:top-0 after:h-full after:w-1/3 after:content-[""]',
          'group-hover:after:animate-highLight',
        )}
      >
        <Image
          src={`${IMG_PROJECT_PREFIX}${img}`}
          width={projectItemImgHeight * PROJECT_IMG_RATIO}
          height={projectItemImgHeight}
          alt='project'
          className='w-full transition-all group-hover:scale-110'
        />
        <div
          className={clsx(
            'absolute -right-[2px] -top-[2px]',
            'bg-primary-600 px-3 py-2',
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
            <LinkIcon
              type='dark'
              hoverClasses='group-hover/link:fill-primary-600'
            />
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
    </button>
  )
}

export default ProjectItem
