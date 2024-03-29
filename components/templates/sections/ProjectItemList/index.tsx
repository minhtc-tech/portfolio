import ProjectPopup from '@/components/molecules/popup/ProjectPopup'
import ProjectItem from '@/components/molecules/ProjectItem'
import { ProjectItemInterface } from '@/types/project'
import clsx from 'clsx'
import { useState } from 'react'

interface ProjectItemsSectionProps {
  projectItems: ProjectItemInterface[]
}

const ProjectItemsSection = ({ projectItems }: ProjectItemsSectionProps) => {
  const [projectPopup, setProjectPopup] = useState({
    isOpen: false,
    data: {},
  })

  return (
    <section className='pb-8'>
      <div
        className={clsx(
          'grid gap-4 sm:gap-6 md:gap-8 lg:gap-8',
          'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
          'pb-12 pt-5',
          'transition-all duration-300',
        )}
      >
        {projectItems.map((item) => (
          <div
            onClick={() => setProjectPopup({ isOpen: true, data: item })}
            key={item.name}
          >
            <ProjectItem
              img={item.img}
              name={item.name}
              level={Number(item.level)}
              link={item.livePreview}
              mainTechStacks={item.mainTechStacks}
            />
          </div>
        ))}
      </div>

      {projectPopup.isOpen && (
        <ProjectPopup
          projectItem={projectPopup.data as ProjectItemInterface}
          onClosePopup={() => setProjectPopup({ isOpen: false, data: {} })}
        />
      )}
    </section>
  )
}

export default ProjectItemsSection
