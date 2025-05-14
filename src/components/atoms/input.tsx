import clsx from 'clsx'
import { InputHTMLAttributes, ReactElement } from 'react'
import Button from '@/components/atoms/button'

type Props = {
  attr?: InputHTMLAttributes<HTMLInputElement>
  leftButton?: ReactElement<typeof Button>
  rightButton?: ReactElement<typeof Button>
}
export default function Input({ attr, leftButton, rightButton }: Props) {
  return (
    <div
      className={clsx(
        'relative flex h-12 w-full bg-neutral-50',
        'rounded-full border-md border-primary',
      )}
    >
      {leftButton && (
        <div className={clsx('relative left-[-2px] top-[-2px] z-10')}>
          {leftButton}
        </div>
      )}

      <input
        {...attr}
        className={clsx(
          'w-full rounded-full bg-transparent px-6',
          'text-base text-primary',
          leftButton && rightButton && 'text-center',
        )}
      />

      {rightButton && (
        <div className={clsx('relative right-[-2px] top-[-2px] z-10')}>
          {rightButton}
        </div>
      )}
    </div>
  )
}
