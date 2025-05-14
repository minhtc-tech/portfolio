import StarIcon from '@/components/atoms/icons/star'

type Props = {
  level: number
}
export default function LevelLabel({ level }: Props) {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: level }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  )
}
