'use client'

import PageWrapper from '@/components/templates/layouts/PageWrapper'
import ProjectFilterSection from '@/components/pages/Work/components/projectFilter'
import ProjectItemsSection from '@/components/templates/sections/ProjectItemList'
import { useState } from 'react'
import { projectsData } from '@/utils/data/workPage'

export interface FilterState {
  level: string[]
  mainTechStacks: string[]
}

export const initialFilterValue: FilterState = {
  level: [],
  mainTechStacks: [],
}

const WorkPage = () => {
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
    <PageWrapper>
      <ProjectFilterSection filter={filter} setFilter={setFilter} />
      <ProjectItemsSection projectItems={projectItems} />
    </PageWrapper>
  )
}

export default WorkPage
