export type ExperienceItemInterface = {
  name: string
  img: string
}

export type ProjectItemInterface = {
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

export type FilterDataItemInterface = {
  dropdownPosition: FilterDataDropdownPosition
  mappingFilterProp: FilterMappingProp
  items: {
    [key: string]: string
  }
}

export type FilterDataInterface = {
  [key: string]: FilterDataItemInterface
}
