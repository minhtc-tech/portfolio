import clsx from 'clsx'

type Props = {
  variant?: 'default' | 'primary'
  attr?: React.ButtonHTMLAttributes<HTMLButtonElement>
  content?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
export default function Button({
  variant = 'default',
  attr,
  content = '',
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <button
      {...attr}
      className={clsx(
        variant === 'primary'
          ? 'text-invert before:bg-primary-800 after:bg-primary-700'
          : 'text-primary after:bg-primary-50',

        'before:absolute before:-z-20',
        'before:bottom-0 before:left-0 before:right-0 before:top-0',

        'after:absolute after:-z-10 after:transition-all after:content-[""]',
        'after:left-0 after:top-0 after:h-full after:w-0',

        'group relative flex items-center gap-3 overflow-hidden',
        'h-12 rounded-full border-md border-primary px-6',
        'text-base font-bold',

        'transition-all hover:after:w-full',
      )}
    >
      {leftIcon} {content} {rightIcon}
    </button>
  )
}
