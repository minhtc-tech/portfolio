'use client'

import clsx from 'clsx'

interface ButtonProps {
  type: 'default' | 'primary'
  content: string
  tooltip: string
  iconPosition?: 'left' | 'right'
  icon?: React.ReactNode
  isInGroup?: boolean
  onClick?: () => void
}

const Button = ({
  type,
  content,
  tooltip,
  iconPosition,
  icon,
  isInGroup = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      type='button'
      title={tooltip}
      onClick={onClick}
      className={clsx(
        type === 'primary'
          ? 'text-invert before:bg-primary-600 after:bg-primary-700'
          : 'text-primary after:bg-primary-50',
        isInGroup && 'group-hover:after:w-full',
        'before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-20',
        'after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:transition-all after:content-[""]',
        'group relative flex items-center gap-3 overflow-hidden',
        'px-6 py-3',
        'rounded-full border-md border-primary',
        'text-base font-bold',
        'transition-all hover:after:w-full',
      )}
    >
      {iconPosition === 'left' && icon}
      {content}
      {iconPosition === 'right' && icon}
    </button>
  )
}

export default Button
