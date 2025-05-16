import clsx from 'clsx'

type Props = {
  title: string
  onClick?: () => void
  children: React.ReactNode
}
export default function FilterLabel({ title, onClick, children }: Props) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={clsx(
        'group flex h-10 items-center gap-2 px-3 py-2',
        'rounded-full border-sm border-highLight',
        'transition-all hover:bg-primary-800',
      )}
    >
      {children}
    </button>
  )
}
