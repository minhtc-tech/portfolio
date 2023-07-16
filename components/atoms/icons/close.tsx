import clsx from 'clsx'

interface CloseIconProps {
  type: 'primary' | 'light'
  size: 8 | 16 | 24
  hoverClasses: string
}

const CloseIcon = ({ type, size, hoverClasses }: CloseIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={clsx(
          type === 'primary' ? 'fill-primary-600' : 'fill-neutral-50',
          'transition-all',
          hoverClasses,
        )}
        d='M23.2897 4.0987C24.2268 3.16164 24.2268 1.63986 23.2897 0.702796C22.3526 -0.234265 20.8309 -0.234265 19.8938 0.702796L12 8.60409L4.0987 0.710292C3.16164 -0.226769 1.63986 -0.226769 0.702796 0.710292C-0.234265 1.64735 -0.234265 3.16914 0.702796 4.1062L8.60409 12L0.710292 19.9013C-0.226769 20.8384 -0.226769 22.3601 0.710292 23.2972C1.64735 24.2343 3.16914 24.2343 4.1062 23.2972L12 15.3959L19.9013 23.2897C20.8384 24.2268 22.3601 24.2268 23.2972 23.2897C24.2343 22.3526 24.2343 20.8309 23.2972 19.8938L15.3959 12L23.2897 4.0987Z'
      />
    </svg>
  )
}

export default CloseIcon
