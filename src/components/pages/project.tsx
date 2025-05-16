'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { FilterMappingProp, ProjectItemInterface } from '@/types/project'
import { ICON_SIZE_SM, IMG_TECH_PREFIX } from '@/utils/config'
import { filterData, projectsData } from '@/utils/data/projectPage'
import CloseIcon from '@/components/atoms/icons/close'
import ShowMoreIcon from '@/components/atoms/icons/showMore'
import LevelLabel from '@/components/atoms/levelLabel'
import FilterLabel from '@/components/atoms/filterLabel'
import Button from '@/components/atoms/button'
import ProjectItem from '@/components/molecules/projectItem'
import ProjectPopup from '@/components/molecules/popup/projectPopup'
import DefaultLayout from '@/components/templates/defaultLayout'

export default function ProjectPage() {
  const [filter, setFilter] = useState<{
    level: string[]
    mainTechStacks: string[]
  }>({ level: [], mainTechStacks: [] })

  const [filterDropdown, setFilterDropdown] = useState({
    isOpen: false,
    activeDropdownId: 0,
  })

  const [projectPopup, setProjectPopup] = useState({ isOpen: false, data: {} })

  const handleClickFilterItem = (
    groupKey: FilterMappingProp,
    value: string,
  ) => {
    const filterGroupValues = filter[groupKey]

    const isValueExistInFilter =
      filterGroupValues.length > 0 && filterGroupValues.includes(value)

    const newFilterGroupValue = isValueExistInFilter
      ? filterGroupValues.filter((item) => item !== value)
      : [...filterGroupValues, value]

    setFilter({ ...filter, [groupKey]: [...newFilterGroupValue] })
  }

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

  const isFilterActive =
    filter.level.length > 0 || filter.mainTechStacks.length > 0

  return (
    <DefaultLayout>
      <section
        data-test='project-filter-section'
        className='pt-3 sm:pt-4 md:pt-3'
      >
        <div
          className={clsx(
            'flex flex-wrap justify-center md:justify-start ',
            'gap-3 px-2 pb-3 sm:gap-4 sm:pb-4 md:gap-6 md:px-0 md:pb-6',
          )}
        >
          {Object.entries(filterData).map(
            ([filterKey, filterItemsObj], index) => {
              const isDropdownOpen =
                filterDropdown.isOpen &&
                filterDropdown.activeDropdownId === index

              return (
                <div key={filterKey} className='group relative w-fit'>
                  <Button
                    attr={{
                      title: 'Click to Open / Close dropdown',
                      onClick: () => {
                        setFilterDropdown({
                          isOpen: !isDropdownOpen,
                          activeDropdownId: index,
                        })
                      },
                    }}
                    content={filterKey}
                    rightIcon={
                      <ShowMoreIcon
                        className={clsx(
                          isDropdownOpen && 'rotate-90',
                          'h-6 transition-all md:group-hover:rotate-90',
                        )}
                      />
                    }
                  />

                  <div
                    className={clsx(
                      filterItemsObj.dropdownPosition === 'left'
                        ? 'md:left-[2px] md:right-auto'
                        : 'md:left-auto md:right-[2px]',
                      isDropdownOpen && 'z-20 max-h-[999px] pb-1',
                      'absolute right-[2px] pr-1 sm:left-auto sm:right-[2px]',
                      'z-10 max-h-0 overflow-hidden transition-all duration-300',
                      'md:group-hover:z-20 md:group-hover:max-h-[999px] md:group-hover:pb-1',
                    )}
                  >
                    <div
                      className={clsx(
                        'mt-1 w-max overflow-hidden bg-white',
                        'rounded-sm border-md border-primary drop-shadow-md',
                      )}
                    >
                      {Object.entries(filterItemsObj.items).map(
                        ([name, itemFilterKey]) => (
                          <button
                            key={itemFilterKey}
                            onClick={() =>
                              handleClickFilterItem(
                                filterItemsObj.mappingFilterProp,
                                itemFilterKey,
                              )
                            }
                            className={clsx(
                              filter[filterItemsObj.mappingFilterProp].includes(
                                itemFilterKey,
                              )
                                ? 'text-highLight after:w-full after:bg-primary-100'
                                : 'text-primary after:bg-primary-50',
                              'relative flex gap-3',
                              'w-full py-4 pl-3 pr-4 sm:pl-5 sm:pr-6',
                              'border-b-sm border-light last:border-b-none',
                              'after:transition-all hover:after:w-full',
                              'before:absolute before:-z-20',
                              'before:bottom-0 before:left-0 before:right-0 before:top-0',
                              'after:h-full after:w-0  after:content-[""]',
                              'after:absolute after:left-0 after:top-0 after:-z-10',
                            )}
                          >
                            {filterItemsObj.mappingFilterProp === 'level' ? (
                              <div className='-mt-[1px] pb-[1px]'>
                                <LevelLabel level={Number(itemFilterKey)} />
                              </div>
                            ) : (
                              <Image
                                src={`${IMG_TECH_PREFIX}${itemFilterKey}`}
                                width={ICON_SIZE_SM}
                                height={ICON_SIZE_SM}
                                alt={name}
                              />
                            )}
                            <span className='text-base'>{name}</span>
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>

        <div
          className={clsx(
            isFilterActive && 'max-h-[99px] opacity-100',
            'max-h-0 overflow-hidden opacity-0 transition-all',
          )}
        >
          <div
            className={clsx(
              'flex flex-wrap items-center justify-center gap-3 md:justify-start',
              'min-h-[54px] pb-3 sm:pb-4 md:min-h-[66px] md:pb-6',
            )}
          >
            {filter.level.map((item) => (
              <FilterLabel
                key={item}
                title='Remove filter item'
                onClick={() => handleClickFilterItem('level', item)}
              >
                <div className='-mt-[1px] pb-[1px]'>
                  <LevelLabel level={Number(item)} />
                </div>

                <div className='w-2'>
                  <CloseIcon variant='primary' />
                </div>
              </FilterLabel>
            ))}

            {filter.mainTechStacks.map((item) => (
              <FilterLabel
                key={item}
                title='Remove filter item'
                onClick={() => handleClickFilterItem('mainTechStacks', item)}
              >
                <Image
                  src={`${IMG_TECH_PREFIX}${item}`}
                  width={ICON_SIZE_SM}
                  height={ICON_SIZE_SM}
                  alt={item}
                />

                <div className='w-2'>
                  <CloseIcon variant='primary' />
                </div>
              </FilterLabel>
            ))}

            {isFilterActive && (
              <FilterLabel
                title='Reset filter'
                onClick={() => setFilter({ level: [], mainTechStacks: [] })}
              >
                <span className='text-sm text-highLight group-hover:text-invert'>
                  Clear All
                </span>
              </FilterLabel>
            )}
          </div>
        </div>
      </section>

      <section data-test='project-list-section' className='pb-8'>
        <div
          className={clsx(
            'grid gap-4 sm:gap-6 md:gap-8 lg:gap-8',
            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
            'pb-12 pt-5 transition-all duration-300',
          )}
        >
          {projectItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setProjectPopup({ isOpen: true, data: item })}
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
    </DefaultLayout>
  )
}
