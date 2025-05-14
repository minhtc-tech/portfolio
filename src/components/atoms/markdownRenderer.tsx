import Markdown from 'react-markdown'
import 'highlight.js/styles/github.css'
import rehypeHighlight from 'rehype-highlight'

type Props = {
  content: string
}
export default function MarkdownRenderer({ content }: Props) {
  return (
    <article className='prose max-w-none'>
      <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
    </article>
  )
}
