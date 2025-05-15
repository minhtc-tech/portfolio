import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { filterData } from '@/utils/data/workPage'
import { ICON_SIZE_SM, IMG_TECH_PREFIX } from '@/utils/config'
import CloseIcon from '@/components/atoms/icons/close'
import LevelLabel from '@/components/atoms/levelLabel'
import { FilterState, initialFilterValue } from '@/components/pages/work'
import { FilterMappingProp } from '@/types/project'

import FilterSelectGroup from './components/filterSelectGroup'

type Props = {
  filter: FilterState
  setFilter: (data: FilterState) => void
}
export default function ProjectFilterSection({ filter, setFilter }: Props) {
  const [filterDropdown, setFilterDropdown] = useState({
    isOpen: false,
    activeDropdownId: 0,
  })

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

  const isFilterActive =
    filter.level.length > 0 || filter.mainTechStacks.length > 0

  const filterLabelClasses = clsx(
    'group flex h-10 items-center gap-2 px-3 py-2',
    'rounded-full border-sm border-highLight',
    'transition-all hover:bg-primary-800',
  )

  return (
    <section className='pt-3 sm:pt-4 md:pt-3'>
      <div
        className={clsx(
          'flex flex-wrap justify-center md:justify-start ',
          'gap-3 sm:gap-4 md:gap-6',
          'px-2 pb-3 sm:pb-4 md:px-0 md:pb-6',
        )}
      >
        {Object.entries(filterData).map(
          ([filterKey, filterItemsObj], index) => {
            const isDropdownOpen =
              filterDropdown.isOpen && filterDropdown.activeDropdownId === index

            return (
              <FilterSelectGroup
                key={filterKey}
                label={filterKey}
                filterData={filterItemsObj}
                filter={filter}
                isDropdownOpen={isDropdownOpen}
                onUpdateFilterData={handleClickFilterItem}
                onToggleDropdown={() => {
                  setFilterDropdown({
                    isOpen: !isDropdownOpen,
                    activeDropdownId: index,
                  })
                }}
              />
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
            <button
              key={item}
              title='Remove filter item'
              onClick={() => handleClickFilterItem('level', item)}
              className={filterLabelClasses}
            >
              <div className='-mt-[1px] pb-[1px]'>
                <LevelLabel level={Number(item)} />
              </div>

              <div className='w-2'>
                <CloseIcon variant='primary' />
              </div>
            </button>
          ))}

          {filter.mainTechStacks.map((item) => (
            <button
              key={item}
              title='Remove filter item'
              onClick={() => handleClickFilterItem('mainTechStacks', item)}
              className={filterLabelClasses}
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
            </button>
          ))}

          {isFilterActive && (
            <button
              title='Reset filter'
              onClick={() => setFilter(initialFilterValue)}
              className={filterLabelClasses}
            >
              <span className='text-sm text-highLight group-hover:text-invert'>
                Clear All
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
