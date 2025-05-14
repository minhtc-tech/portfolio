import clsx from 'clsx'
import Image from 'next/image'

import { techStacks } from '@/utils/data/homePage'
import { ICON_SIZE_MD, IMG_TECH_PREFIX } from '@/utils/config'

export default function TechStacksSection() {
  return (
    <section className='flex flex-col items-center gap-6 py-12'>
      <span className='text-2xl font-bold'>Tech Stacks</span>

      <div className='flex flex-wrap justify-center gap-8 pb-8 pt-1'>
        {Object.entries(techStacks).map(([label, items]) => (
          <div
            key={label}
            className={clsx(
              'relative flex flex-wrap justify-center gap-4',
              'mt-4 bg-neutral-50 px-6 pb-6 pt-12',
              'rounded-md border-md border-primary',
              'drop-shadow-md',
            )}
          >
            <span
              className={clsx(
                'absolute -top-6 left-4',
                'bg-neutral-50 px-4 py-3',
                'rounded-full border-md border-primary',
                'text-base font-bold text-highLight',
              )}
            >
              {label}
            </span>
            {items.map((item) => (
              <div
                key={item.label}
                className={clsx(
                  'flex flex-col items-center gap-2',
                  'px-4 pb-2 pt-3',
                  'rounded-sm border-sm border-primary',
                )}
              >
                <Image
                  src={`${IMG_TECH_PREFIX}${item.img}`}
                  alt={item.label}
                  width={ICON_SIZE_MD}
                  height={ICON_SIZE_MD}
                />
                <span className='text-sm font-normal text-primary'>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
