import {
  ExperienceItemInterface,
  FilterDataInterface,
  ProjectItemInterface,
} from '@/types/project'

const techsFilterData = {
  react: 'react.svg',
  redux: 'redux.svg',
  next: 'next.svg',
  'react native': 'react-native.svg',
}

const deployData = {
  vercel: 'vercel.svg',
  netlify: 'netlify.svg',
  'aws amplify': 'aws.svg',
  github: 'github.svg',
}

export const techsData = {
  ...techsFilterData,
  ...deployData,
  firebase: 'firebase.svg',
  typescript: 'ts.svg',
  tailwind: 'tw.svg',
  jest: 'jest.svg',
  expo: 'expo.svg',
  chakra: 'chakra.svg',
}

export const filterData: FilterDataInterface = {
  'Library / Framework': {
    dropdownPosition: 'right',
    mappingFilterProp: 'mainTechStacks',
    items: {
      ...techsFilterData,
    },
  },
  Deploy: {
    dropdownPosition: 'left',
    mappingFilterProp: 'mainTechStacks',
    items: {
      ...deployData,
    },
  },
  Level: {
    dropdownPosition: 'left',
    mappingFilterProp: 'level',
    items: {
      Beginner: '1',
      Intermediate: '2',
      Advanced: '3',
    },
  },
}

const experience: {
  [key: string]: ExperienceItemInterface
} = {
  react: {
    name: 'react',
    img: techsData.react,
  },
}

export const projectsData: ProjectItemInterface[] = [
  {
    img: 'img3.png',
    name: 'Pin Input',
    livePreview: 'https',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.react, techsData.tailwind, techsData.vercel],
    source: 'https',
    about: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quis, aliquid deserunt est ratione blanditiis tenetur, natus
      corrupti asperiores, libero culpa cum. Sapiente earum
      similique provident aliquid, nulla cumque consequatur facilis.
    `,
    experience: [
      experience.react,
      experience.react,
      experience.react,
      experience.react,
      experience.react,
      experience.react,
      experience.react,
    ],
  },
]
