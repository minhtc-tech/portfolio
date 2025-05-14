'use client'

import { useState } from 'react'

import { projectsData } from '@/utils/data/workPage'
import DefaultLayout from '@/components/templates/defaultLayout'

import ProjectFilterSection from './sections/projectFilter'
import ProjectListSection from './sections/projectList'

export type FilterState = { level: string[]; mainTechStacks: string[] }

export const initialFilterValue: FilterState = {
  level: [],
  mainTechStacks: [],
}

export default function WorkPage() {
  const [filter, setFilter] = useState(initialFilterValue)
  const projectItems =
    filter.level.length > 0 || filter.mainTechStacks.length > 0
      ? projectsData.filter(
          (item) =>
            filter.level.includes(item.level.toString()) ||
            item.mainTechStacks.some((techItem) =>
              filter.mainTechStacks.includes(techItem),
            ),
        )
      : projectsData

  return (
    <DefaultLayout>
      <ProjectFilterSection filter={filter} setFilter={setFilter} />
      <ProjectListSection projectItems={projectItems} />
    </DefaultLayout>
  )
}
