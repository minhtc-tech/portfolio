import { FilterDataInterface, ProjectItemInterface } from '@/types/project'

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

export const filterData: FilterDataInterface = {
  'Library / Framework': {
    dropdownPosition: 'right',
    mappingFilterProp: 'mainTechStacks',
    items: { ...techsFilterData },
  },
  Deploy: {
    dropdownPosition: 'left',
    mappingFilterProp: 'mainTechStacks',
    items: { ...deployData },
  },
  Level: {
    dropdownPosition: 'left',
    mappingFilterProp: 'level',
    items: { Beginner: '1', Intermediate: '2', Advanced: '3' },
  },
}

export const techsData = {
  ...techsFilterData,
  ...deployData,
  tailwind: 'tw.svg',
  expo: 'expo.svg',
  scss: 'scss.svg',
  bs: 'bs.svg',
  jquery: 'jquery.svg',
  js: 'js.svg',
  css: 'css.svg',
  html: 'html.svg',
}

const experience = {
  react: { name: 'react', img: techsData.react },
  redux: { name: 'redux', img: techsData.redux },
  next: { name: 'next', img: techsData.next },
  tw: { name: 'tailwind', img: techsData.tailwind },
  firebase: { name: 'firebase', img: 'firebase.svg' },
  chakra: { name: 'chakra ui', img: 'chakra.svg' },
  netlify: { name: 'netlify', img: techsData.netlify },
  ts: { name: 'typescript', img: 'ts.svg' },
  scss: { name: 'scss', img: techsData.scss },
  vite: { name: 'vite', img: 'vite.svg' },
  'react router': { name: 'react router', img: 'react-router.svg' },
  'react native': { name: 'react native', img: techsData['react native'] },
  expo: { name: 'expo', img: techsData.expo },
  'react navigation': { name: 'react navigation', img: 'react-navigation.svg' },
  android: { name: 'android studio', img: 'android.svg' },
  xcode: { name: 'xcode', img: 'xcode.svg' },
  vercel: { name: 'vercel', img: techsData.vercel },
  atom: { name: 'atomic design pattern', img: 'atom.svg' },
  figma: { name: 'figma', img: 'figma.svg' },
  jest: { name: 'jest', img: 'jest.svg' },
  bs: { name: 'bootstrap', img: techsData.bs },
  jquery: { name: 'jquery', img: techsData.jquery },
  github: { name: 'github', img: 'github.svg' },
  html: { name: 'html5', img: techsData.html },
  aps: { name: 'adobe photoshop', img: 'adobe-ps.svg' },
  axd: { name: 'adobe xd', img: 'adobe-xd.svg' },
  js: { name: 'ecma script', img: techsData.js },
  css: { name: 'css3', img: techsData.css },
}

export const projectsData: ProjectItemInterface[] = [
  {
    img: '/demo.webp',
    name: 'Portfolio',
    livePreview: 'https://minhtc.tech',
    level: filterData.Level.items.Advanced,
    mainTechStacks: [techsData.next, techsData.tailwind, techsData.vercel],
    source: 'https://github.com/minhtc-tech/portfolio',
    about: `
      My personal portfolio website built with Next.js and Tailwind CSS.
      It showcases my skills, projects, and experience as a front-end developer.
    `,
    experience: [
      experience.next,
      experience.react,
      experience.tw,
      experience.ts,
      experience.vercel,
      experience.figma,
      experience.atom,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/p_react-native-gg-books/main/images/demo.webp',
    name: 'Google Books',
    livePreview: 'https://youtu.be/zREfIsxbSCM',
    level: filterData.Level.items.Advanced,
    mainTechStacks: [
      techsData['react native'],
      techsData.redux,
      techsData.expo,
    ],
    source: 'https://github.com/minhtc-tech/p_react-native-gg-books',
    about: `
      A mobile application built with React Native, Redux, and Expo.
      It allows users to browse and discover a collection of books.
      The app provides features like searching for books, viewing book details,
      and managing a personal reading list via Google Books API. 
    `,
    experience: [
      experience['react native'],
      experience.redux,
      experience['react navigation'],
      experience.expo,
      experience.android,
      experience.xcode,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/p_react-pin-input/main/images/demo.webp',
    name: 'Pin Input',
    livePreview: 'https://minhtc-tech-pin-input.netlify.app',
    level: filterData.Level.items.Intermediate,
    mainTechStacks: [techsData.react, techsData.tailwind, techsData.netlify],
    source: 'https://github.com/minhtc-tech/p_react-pin-input',
    about: `
      This project is a practice exercise to familiarize myself with Chakra UI
      by send the pin input data from the form into FireBase and show the response.
    `,
    experience: [
      experience.react,
      experience.tw,
      experience.firebase,
      experience.chakra,
      experience.netlify,
      experience.ts,
      experience.jest,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/p_react-admin-dashboard/main/images/demo.webp',
    name: 'Admin Dashboard',
    livePreview: 'https://main.d18q6xdhoyhswk.amplifyapp.com',
    level: filterData.Level.items.Intermediate,
    mainTechStacks: [techsData.react, techsData.scss, techsData['aws amplify']],
    source: 'https://github.com/minhtc-tech/p_react-admin-dashboard',
    about: `
      This is a simple admin dashboard project built with React.
      It provides a user-friendly interface for managing and monitoring
      various aspects of an application or system.
    `,
    experience: [
      experience.react,
      experience.scss,
      experience.vite,
      experience.ts,
      experience['react router'],
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/vn-travel.webp',
    name: 'VN Travel',
    livePreview: 'https://minhtc-tech.github.io/project/vn-travel',
    level: filterData.Level.items.Intermediate,
    mainTechStacks: [techsData.jquery, techsData.bs, techsData.github],
    source: 'https://github.com/minhtc-tech/project/tree/main/vn-travel',
    about: `
      A website provides comprehensive travel information, including popular
      destinations, attractions, accommodations, and tips for
      an unforgettable journey in VietNam. 
    `,
    experience: [
      experience.jquery,
      experience.bs,
      experience.html,
      experience.github,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/thien-ha-book.webp',
    name: 'Thien Ha Book',
    livePreview: 'https://minhtc-tech.github.io/project/thien-ha-book',
    level: filterData.Level.items.Intermediate,
    mainTechStacks: [techsData.js, techsData.css, techsData.github],
    source: 'https://github.com/minhtc-tech/project/tree/main/thien-ha-book',
    about: `
      An engaging website project that showcases my proficient coding skills
      in HTML and CSS. With meticulous attention to detail, I have crafted an
      immersive and visually appealing online platform for book enthusiasts.
    `,
    experience: [
      experience.js,
      experience.css,
      experience.html,
      experience.aps,
      experience.axd,
      experience.github,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/shopee.webp',
    name: 'Shopee UI Clone',
    livePreview: 'https://minhtc-tech.github.io/project/shopee',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.html, techsData.css, techsData.github],
    source: 'https://github.com/minhtc-tech/project/tree/main/shopee',
    about: `
      This project includes 10 pages cloned of Shopee in Vietnam. 
    `,
    experience: [experience.html, experience.css, experience.github],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/bookmark.webp',
    name: 'Bookmark',
    livePreview: 'https://minhtc-tech.github.io/project/landing/bookmark',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.html, techsData.tailwind, techsData.github],
    source: 'https://github.com/minhtc-tech/project/tree/main/landing/bookmark',
    about: `
      Bookmark landing page with TailwindCSS.
    `,
    experience: [
      experience.js,
      experience.html,
      experience.css,
      experience.github,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/clipboard.webp',
    name: 'Clipboard',
    livePreview: 'https://minhtc-tech.github.io/project/landing/clipboard',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.html, techsData.tailwind, techsData.github],
    source:
      'https://github.com/minhtc-tech/project/tree/main/landing/clipboard',
    about: `
      Clipboard landing page with TailwindCSS.
    `,
    experience: [experience.html, experience.css, experience.github],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/fylo.webp',
    name: 'Fylo',
    livePreview: 'https://minhtc-tech.github.io/project/landing/fylo',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.html, techsData.tailwind, techsData.github],
    source: 'https://github.com/minhtc-tech/project/tree/main/landing/fylo',
    about: `
      Fylo landing page with TailwindCSS.
    `,
    experience: [
      experience.js,
      experience.html,
      experience.css,
      experience.github,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/loop-studios.webp',
    name: 'Loop Studios',
    livePreview: 'https://minhtc-tech.github.io/project/landing/loop-studios',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.html, techsData.tailwind, techsData.github],
    source:
      'https://github.com/minhtc-tech/project/tree/main/landing/loop-studios',
    about: `
      Loop Studios landing page with TailwindCSS.
    `,
    experience: [
      experience.js,
      experience.html,
      experience.css,
      experience.github,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/shortly.webp',
    name: 'Shortly',
    livePreview: 'https://minhtc-tech.github.io/project/landing/shortly',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.html, techsData.tailwind, techsData.github],
    source: 'https://github.com/minhtc-tech/project/tree/main/landing/shortly',
    about: `
      Shortly landing page with TailwindCSS.
    `,
    experience: [
      experience.js,
      experience.html,
      experience.css,
      experience.github,
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/minhtc-tech/project/main/images/testimonial.webp',
    name: 'Testimonial',
    livePreview:
      'https://minhtc-tech.github.io/project/landing/testimonial-grid',
    level: filterData.Level.items.Beginner,
    mainTechStacks: [techsData.html, techsData.tailwind, techsData.github],
    source:
      'https://github.com/minhtc-tech/project/tree/main/landing/testimonial-grid',
    about: `
      Testimonial section that builds with grid classes in Tailwind.
    `,
    experience: [experience.html, experience.css, experience.github],
  },
]
