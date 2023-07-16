'use client'

import dynamic from 'next/dynamic'

const AnimatedCursorComponent = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

const AnimatedCursor = () => {
  return (
    <AnimatedCursorComponent
      color='236, 72, 153'
      innerSize={12}
      innerScale={0.9}
    />
  )
}

export default AnimatedCursor
