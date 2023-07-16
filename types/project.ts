export interface ExperienceItemInterface {
  name: string
  img: string
}

export interface ProjectItemInterface {
  img: string
  name: string
  livePreview: string
  level: string
  about: string
  mainTechStacks: string[]
  source: string
  experience: ExperienceItemInterface[]
}

type FilterDataDropdownPosition = 'left' | 'right'
export type FilterMappingProp = 'mainTechStacks' | 'level'

export interface FilterDataItemInterface {
  dropdownPosition: FilterDataDropdownPosition
  mappingFilterProp: FilterMappingProp
  items: {
    [key: string]: string
  }
}

export interface FilterDataInterface {
  [key: string]: FilterDataItemInterface
}
