import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import Button from '@/components/atoms/button'
import CloseIcon from '@/components/atoms/icons/close'
import LinkIcon from '@/components/atoms/icons/link'
import { ProjectItemInterface } from '@/types/project'
import { ICON_SIZE_SM, IMG_TECH_PREFIX } from '@/utils/config'

type Props = {
  projectItem: ProjectItemInterface
  onClosePopup: () => void
}
export default function ProjectPopup({ projectItem, onClosePopup }: Props) {
  const [isClosing, setIsClosing] = useState(false)

  const closePopup = () => {
    setIsClosing(true)

    setTimeout(() => {
      onClosePopup()
    }, 150)
  }

  const projectContent = (
    <div className='px-3 pb-7 sm:px-4 md:px-6'>
      <span
        className={clsx(
          'inline-block w-full pt-6',
          'text-center text-xl font-bold text-primary',
        )}
      >
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
            attr={{ title: 'View source code on GitHub' }}
            content='source code'
            leftIcon={
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
            variant='primary'
            attr={{ title: 'View the live version' }}
            content={projectItem.livePreview.replace('https://', '')}
            leftIcon={
              <div className='w-6'>
                <LinkIcon />
              </div>
            }
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
            <div className='w-4'>
              <CloseIcon variant='primary' />
            </div>
          </button>

          <div
            className={clsx(
              'h-full w-full overflow-hidden bg-neutral-50',
              'rounded-lg border-lg border-primary',
            )}
          >
            {projectContent}
          </div>
        </div>
      </div>
    </div>
  )
}
