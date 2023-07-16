import StarIcon from '../icons/star'

interface LevelLabelProps {
  level: number
}

const LevelLabel = ({ level }: LevelLabelProps) => {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: level }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  )
}

export default LevelLabel
