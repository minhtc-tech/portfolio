'use client'

import clsx from 'clsx'
import Markdown from 'react-markdown'
import 'highlight.js/styles/github.css'
import rehypeHighlight from 'rehype-highlight'
import { isValidElement, ReactNode, useRef, useState } from 'react'

import Button from '@/components/atoms/button'

type Props = {
  content: string
}
export default function MarkdownRenderer({ content }: Props) {
  return (
    <article className='prose max-w-none'>
      <Markdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          h2: function ({ children }) {
            return <h2 className='text-2xl text-primary'>{children}</h2>
          },
          p: function ({ children }) {
            return <p className='text-primary'>{children}</p>
          },
          code: function ({ children, className }) {
            if (className) {
              return <code className={className}>{children}</code>
            } else {
              return (
                <code
                  className={clsx(
                    'before:hidden after:hidden',
                    'rounded-sm bg-primary-50 px-2 py-1',
                    'font-sans text-base font-normal text-primary',
                  )}
                >
                  {children}
                </code>
              )
            }
          },
          pre: function Pre({ children }) {
            const [isCopied, setIsCopied] = useState(false)
            const clearTimeoutRef = useRef<NodeJS.Timeout>()

            function extractTextFromReactNode(node: ReactNode): string {
              if (typeof node === 'string' || typeof node === 'number') {
                return String(node)
              }
              if (Array.isArray(node)) {
                return node.map(extractTextFromReactNode).join('')
              }
              if (isValidElement(node)) {
                return extractTextFromReactNode(node.props.children)
              }
              return ''
            }

            function handleCopy() {
              const copyData = extractTextFromReactNode(children)
              navigator.clipboard.writeText(copyData.trim())
              setIsCopied(true)
              clearTimeout(clearTimeoutRef.current)
              clearTimeoutRef.current = setTimeout(() => {
                setIsCopied(false)
              }, 1200)
            }

            return (
              <pre className='relative border-md border-primary bg-white'>
                <div className='absolute right-3 z-10'>
                  <Button
                    variant='primary'
                    attr={{ onClick: handleCopy }}
                    content={isCopied ? 'Copied' : 'Copy'}
                  />
                </div>
                {children}
              </pre>
            )
          },
        }}
      >
        {content}
      </Markdown>
    </article>
  )
}
