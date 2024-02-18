export const socials = [
  {
    id: 1,
    icon: <i className="bx bxl-twitter"></i>,
    link: 'https://twitter.com/ScottLee0191',
  },
  {
    id: 2,
    icon: <i className="bx bxl-linkedin"></i>,
    link: 'https://www.linkedin.com/in/le-son-85a08999/',
  },
  {
    id: 3,
    icon: <i className="bx bxl-github"></i>,
    link: 'https://github.com/scottlee0191',
  },
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
    duration: '2014 - 2019',
    title: 'Software Engineer - Soft One',
    description:
      'Develop responsive UI/UX for web base on the design, implement features, API Integration, Work closely with backend team to integrate api, discuss about some solutions',
  },
  {
    id: 2,
    duration: '2019 - 2023',
    title: 'Software Engineer - NFQ',
    description:
      'Build system help customer register and validate information via API create Credit Card, work in several e-commerce use Shopware.',
  },
  {
    id: 3,
    duration: '2023 - current',
    title: 'Software Engineer - FPT',
    description:
      'Build admin dashboard manage use information and integration API provide best practice UI/UX, give advise solution and implement to client.',
  },
]

export const educations: Items = [
  {
    id: 1,
    duration: '2009 - 2014',
    title: 'Bachelor - Da Nang University of Science and Technology',
    description:
      'Bachelor of Software Engineering in Danang University of Science and Technology, Da Nang city, Viet Nam.',
  },
  {
    id: 2,
    duration: '2013 - 2014',
    title: 'Developer - Self learning',
    description:
      'Self learning software development and software lifecycle. Involve with several roles like FrontEnd, BackEnd, Tester,...',
  },
  {
    id: 3,
    duration: '2019 - current',
    title: 'Senior Developer - Self learning',
    description:
      'Build system give advice, solution to client also mentor to help fresher give best practice to them.',
  },
]

export const services = [
  {
    id: 1,
    icon: <i className="bx bx-code-alt"></i>,
    name: 'Web Development',
    description: 'Create website with minimum cost!',
  },
  {
    id: 2,
    icon: <i className="bx bxs-paint"></i>,
    name: 'Design to webpage',
    description: 'Convert design to webpage!',
  },
  {
    id: 3,
    icon: <i className="bx bx-bar-chart-alt"></i>,
    name: 'Optimize webpage',
    description: 'Optimize webpage high score!',
  },
  {
    id: 4,
    icon: <i className="bx bx-search-alt-2"></i>,
    name: 'SEO',
    description: 'Build webpage appear on top search!',
  },
]

export const skills = [
  {
    id: 1,
    name: 'Front - End',
    data: [
      { id: 4, name: 'React', icon: <i className="bx bxl-react"></i> },
      { id: 1, name: 'HTML', icon: <i className="bx bxl-html5"></i> },
      { id: 2, name: 'CSS', icon: <i className="bx bxl-css3"></i> },
      { id: 3, name: 'JS', icon: <i className="bx bxl-javascript"></i> },
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
      { id: 4, name: 'Java', icon: <i className="bx bxl-java"></i> },
    ],
  },
  {
    id: 3,
    name: 'UI - UX',
    data: [{ id: 1, name: 'Figma', icon: <i className="bx bxl-figma"></i> }],
  },
]
