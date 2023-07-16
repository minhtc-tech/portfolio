import Button from '@/components/atoms/Button'
import CloseIcon from '@/components/atoms/icons/close'
import LinkIcon from '@/components/atoms/icons/link'
import LevelLabel from '@/components/atoms/LevelLabel'
import { ProjectItemInterface } from '@/types/project'
import {
  ICON_SIZE_SM,
  IMG_PROJECT_PREFIX,
  IMG_TECH_PREFIX,
  PROJECT_IMG_RATIO,
} from '@/utils/config'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

const projectItemImgHeight = 300

interface ProjectPopupProps {
  projectItem: ProjectItemInterface
  onClosePopup: () => void
}

const ProjectPopup = ({ projectItem, onClosePopup }: ProjectPopupProps) => {
  const [isClosing, setIsClosing] = useState(false)

  const closePopup = () => {
    setIsClosing(true)

    setTimeout(() => {
      onClosePopup()
    }, 150)
  }

  const projectImg = (
    <div
      className={clsx(
        'relative overflow-hidden',
        'border-b-lg border-primary bg-primary-50',
        'flex max-h-[300px] items-center justify-center',
      )}
    >
      <Image
        src={`${IMG_PROJECT_PREFIX}${projectItem.img}`}
        width={projectItemImgHeight * PROJECT_IMG_RATIO}
        height={projectItemImgHeight}
        alt={projectItem.name}
        className='w-full transition-all group-hover:scale-110'
      />
      <div
        className={clsx(
          'absolute -right-1 -top-1',
          'bg-primary-600 px-3 py-2',
          'rounded-bl-sm border-lg',
        )}
      >
        <div className='-mt-[1px]'>
          <LevelLabel level={Number(projectItem.level)} />
        </div>
      </div>
    </div>
  )

  const projectContent = (
    <div className='px-3 pb-7 sm:px-4 md:px-6'>
      <span className='inline-block w-full pt-6 text-center text-xl font-bold text-primary'>
        {projectItem.name}
      </span>

      <div className='flex flex-col gap-2 pt-6'>
        <span className='text-lg font-bold text-primary'>About</span>
        <p className='text-base text-primary'>{projectItem.about}</p>
      </div>

      <div className='flex flex-col gap-3 pt-6'>
        <span className='text-lg font-bold text-primary'>Experience</span>
        <div className='flex flex-wrap gap-2'>
          {projectItem.experience.map((item) => (
            <div
              key={item.name}
              className={clsx(
                'flex items-center gap-2',
                'py-2 pl-3 pr-4',
                'rounded-full border-sm border-highLight',
              )}
            >
              <Image
                src={`${IMG_TECH_PREFIX}${item.img}`}
                width={ICON_SIZE_SM}
                height={ICON_SIZE_SM}
                alt={item.name}
              />
              <span className='text-sm text-highLight'>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='relative z-0 flex flex-wrap gap-3 pt-8'>
        <a href={projectItem.source} target='_blank'>
          <Button
            type='default'
            content='source code'
            tooltip='View source code on GitHub'
            iconPosition='left'
            icon={
              <Image
                src={`${IMG_TECH_PREFIX}github.svg`}
                width={ICON_SIZE_SM}
                height={ICON_SIZE_SM}
                alt='GitHub Icon'
              />
            }
          />
        </a>
        <a href={projectItem.livePreview} target='_blank'>
          <Button
            type='primary'
            content={projectItem.livePreview}
            tooltip='View the live version'
            iconPosition='left'
            icon={<LinkIcon hoverClasses='' type='light' />}
          />
        </a>
      </div>
    </div>
  )

  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 right-0 top-0 z-50',
        'transition-all',
        isClosing && 'opacity-0',
      )}
    >
      <div
        className={clsx(
          'absolute bottom-0 left-0 right-0 top-0',
          'animate-fromTop bg-overlay',
        )}
      />

      <div
        onClick={closePopup}
        className={clsx(
          'absolute bottom-0 left-0 right-0 top-0',
          'flex items-center justify-center',
          'animate-fromBottom',
        )}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={clsx(
            'flex flex-wrap justify-end',
            'max-h-screen w-full max-w-[612px] overflow-auto',
            'pt-3 sm:pt-4 md:pt-8',
          )}
        >
          <button
            onClick={closePopup}
            title='Close popup'
            className={clsx(
              'group -mb-1 mr-6 bg-primary-50 px-5 pb-[9px] pt-3',
              'rounded-tl-md rounded-tr-md border-lg border-primary',
              'transition-all hover:bg-primary-600',
            )}
          >
            <CloseIcon
              size={16}
              type='primary'
              hoverClasses='group-hover:fill-primary-50'
            />
          </button>

          <div
            className={clsx(
              'h-full w-full overflow-hidden bg-neutral-50',
              'rounded-lg border-lg border-primary',
            )}
          >
            {projectImg}
            {projectContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPopup
