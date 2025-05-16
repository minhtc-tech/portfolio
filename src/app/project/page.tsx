import type { Metadata } from 'next'
import ProjectPage from '@/components/pages/project'

export const metadata: Metadata = {
  title: 'Project | MinhTC Tech',
  description: 'MinhTC Tech Portfolio',
}

export default function Project() {
  return <ProjectPage />
}
