export const socials = [
  { id: 1, icon: <i className="bx bxl-facebook"></i> },
  { id: 2, icon: <i className="bx bxl-twitter"></i> },
  { id: 3, icon: <i className="bx bxl-linkedin"></i> },
  { id: 4, icon: <i className="bx bxl-instagram"></i> },
]

type Item = {
  id: number
  duration: string
  title: string
  description: string
}

export type Items = Item[]

export const experiences: Items = [
  {
    id: 1,
    duration: '2020 - 2021',
    title: 'Software Engineer - Meta',
    description:
      'Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Molestias laudantium laborum, pariatur minima, molestiae.',
  },
  {
    id: 2,
    duration: '2021 - 2022',
    title: 'Software Engineer - Google',
    description:
      'Lorem ipsum dolor sit amet consectetur dolor sit amet  dolor sit amet consectetur consectetur  adipisicing elit. Molestias laudantium laborum, pariatur minima, molestiae.',
  },
  {
    id: 3,
    duration: '2022 - current',
    title: 'Software Engineer - Open AI',
    description:
      'Lorem ipsum dolor sit amet consectetur  dolor sit amet consectetur dolor sit amet consecteturadipisicing elit. Molestias laudantium laborum, pariatur minima, molestiae.',
  },
]

export const educations: Items = [
  {
    id: 1,
    duration: '2015 - 2017',
    title: 'Bachelor - Harvard',
    description:
      'Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Molestias laudantium laborum, pariatur minima, molestiae.',
  },
  {
    id: 2,
    duration: '2017 - 2019',
    title: 'Master Degree - MIT',
    description:
      'Lorem ipsum dolor sit amet consectetur dolor sit amet  dolor sit amet consectetur consectetur  adipisicing elit. Molestias laudantium laborum, pariatur minima, molestiae.',
  },
  {
    id: 3,
    duration: '2019 - 2020',
    title: 'Psd - NASA',
    description:
      'Lorem ipsum dolor sit amet consectetur  dolor sit amet consectetur dolor sit amet consecteturadipisicing elit. Molestias laudantium laborum, pariatur minima, molestiae.',
  },
]

export const services = [
  {
    id: 1,
    icon: <i className="bx bx-code-alt"></i>,
    name: 'Web Development',
    description: 'Lorem, elit. Veritatis, necessitatibus?',
  },
  {
    id: 2,
    icon: <i className="bx bxs-paint"></i>,
    name: 'Creative Design',
    description: 'Lorem, elit. Veritatis, necessitatibus?',
  },
  {
    id: 3,
    icon: <i className="bx bx-bar-chart-alt"></i>,
    name: 'Digital Marketing',
    description: 'Lorem, elit. Veritatis, necessitatibus?',
  },
  {
    id: 4,
    icon: <i className="bx bx-search-alt-2"></i>,
    name: 'SEO',
    description: 'Lorem, elit. Veritatis, necessitatibus?',
  },
]

export const skills = [
  {
    id: 1,
    name: 'Front - End',
    data: [
      { id: 1, name: 'HTML', icon: <i className="bx bxl-html5"></i> },
      { id: 2, name: 'CSS', icon: <i className="bx bxl-css3"></i> },
      { id: 3, name: 'JS', icon: <i className="bx bxl-javascript"></i> },
      { id: 4, name: 'React', icon: <i className="bx bxl-react"></i> },
      { id: 5, name: 'Vue', icon: <i className="bx bxl-vuejs"></i> },
      {
        id: 6,
        name: 'Tailwind',
        icon: <i className="bx bxl-tailwind-css"></i>,
      },
      { id: 7, name: 'Bootstrap', icon: <i className="bx bxl-bootstrap"></i> },
    ],
  },
  {
    id: 2,
    name: 'Back - End',
    data: [
      { id: 1, name: 'Nodejs', icon: <i className="bx bxl-nodejs"></i> },
      { id: 2, name: 'PHP', icon: <i className="bx bxl-php"></i> },
      { id: 3, name: 'Python', icon: <i className="bx bxl-php"></i> },
      { id: 4, name: 'Java', icon: <i className="bx bxl-java"></i> },
    ],
  },
  {
    id: 3,
    name: 'UI - UX',
    data: [{ id: 1, name: 'Figma', icon: <i className="bx bxl-figma"></i> }],
  },
]
