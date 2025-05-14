import clsx from 'clsx'
import Image from 'next/image'

import Button from '@/components/atoms/button'
import ShowMoreIcon from '@/components/atoms/icons/showMore'
import { ICON_SIZE_SM, IMG_TECH_PREFIX } from '@/utils/config'
import LevelLabel from '@/components/atoms/levelLabel'
import { FilterState } from '@/components/pages/work'
import { FilterDataItemInterface, FilterMappingProp } from '@/types/project'

type Props = {
  label: string
  filterData: FilterDataItemInterface
  filter: FilterState
  isDropdownOpen: boolean
  onUpdateFilterData: (groupKey: FilterMappingProp, value: string) => void
  onToggleDropdown: () => void
}
export default function FilterSelectGroup({
  label,
  filterData,
  filter,
  isDropdownOpen,
  onUpdateFilterData,
  onToggleDropdown,
}: Props) {
  return (
    <div className='group relative w-fit'>
      <Button
        attr={{
          title: 'Click to Open / Close dropdown',
          onClick: onToggleDropdown,
        }}
        content={label}
        rightIcon={
          <div
            className={clsx(
              isDropdownOpen && 'rotate-90',
              'transition-all md:group-hover:rotate-90',
            )}
          >
            <ShowMoreIcon />
          </div>
        }
      />

      <div
        className={clsx(
          filterData.dropdownPosition === 'left'
            ? 'md:left-[2px] md:right-auto'
            : 'md:left-auto md:right-[2px]',
          isDropdownOpen && 'z-20 max-h-[999px] pb-1',
          'absolute right-[2px] pr-1 sm:left-auto sm:right-[2px]',
          'z-10 max-h-0 overflow-hidden',
          'transition-all duration-300',
          'md:group-hover:z-20 md:group-hover:max-h-[999px] md:group-hover:pb-1',
        )}
      >
        <div
          className={clsx(
            'mt-1 w-max',
            'overflow-hidden bg-neutral-50',
            'rounded-sm border-md border-primary drop-shadow-md',
          )}
        >
          {Object.entries(filterData.items).map(([name, itemFilterKey]) => (
            <button
              key={itemFilterKey}
              type='button'
              onClick={() =>
                onUpdateFilterData(filterData.mappingFilterProp, itemFilterKey)
              }
              className={clsx(
                filter[filterData.mappingFilterProp].includes(itemFilterKey)
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
              {filterData.mappingFilterProp === 'level' ? (
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
          ))}
        </div>
      </div>
    </div>
  )
}
