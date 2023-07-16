'use client'

import dynamic from 'next/dynamic'

export const CLICKABLE_CLASS = 'clickable'

const AnimatedCursorComponent = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

const AnimatedCursor = () => {
  return (
    <AnimatedCursorComponent
      color='236, 72, 153'
      innerSize={12}
      innerScale={0.9}
      clickables={[`.${CLICKABLE_CLASS}`, 'button', 'a']}
    />
  )
}

export default AnimatedCursor
