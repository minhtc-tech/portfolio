import clsx from 'clsx'

interface LinkIconProps {
  type: 'light' | 'dark'
  hoverClasses: string
}

const LinkIcon = ({ type, hoverClasses }: LinkIconProps) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={clsx(
          type === 'light' ? 'fill-neutral-50' : 'fill-neutral-800',
          hoverClasses,
          'transition-all',
        )}
        d='M15 0.283569C14.1703 0.283569 13.5 0.953882 13.5 1.78357C13.5 2.61326 14.1703 3.28357 15 3.28357H18.8766L9.44062 12.7242C8.85469 13.3101 8.85469 14.2617 9.44062 14.8476C10.0266 15.4336 10.9781 15.4336 11.5641 14.8476L21 5.40701V9.28357C21 10.1133 21.6703 10.7836 22.5 10.7836C23.3297 10.7836 24 10.1133 24 9.28357V1.78357C24 0.953882 23.3297 0.283569 22.5 0.283569H15ZM3.75 1.78357C1.67812 1.78357 0 3.46169 0 5.53357V20.5336C0 22.6054 1.67812 24.2836 3.75 24.2836H18.75C20.8219 24.2836 22.5 22.6054 22.5 20.5336V15.2836C22.5 14.4539 21.8297 13.7836 21 13.7836C20.1703 13.7836 19.5 14.4539 19.5 15.2836V20.5336C19.5 20.9461 19.1625 21.2836 18.75 21.2836H3.75C3.3375 21.2836 3 20.9461 3 20.5336V5.53357C3 5.12107 3.3375 4.78357 3.75 4.78357H9C9.82969 4.78357 10.5 4.11326 10.5 3.28357C10.5 2.45388 9.82969 1.78357 9 1.78357H3.75Z'
      />
    </svg>
  )
}

export default LinkIcon