import Contact from '../components/Contact'
import LatestProject from '../components/LatestProject'
import MySkill from '../components/MySkill'
import Service from '../components/Service'
import TimeLine from '../components/TimeLine'
import { educations, experiences } from './data'

export const pages = [
  {
    key: 12,
    data: [
      {
        key: 1,
        com: <TimeLine timelines={experiences} title="Work Experience" />,
      },
      { key: 2, com: <TimeLine timelines={educations} title="Education" /> },
    ],
  },
  {
    key: 34,
    data: [
      { key: 3, com: <Service /> },
      { key: 4, com: <MySkill /> },
    ],
  },
  {
    key: 56,
    data: [
      { key: 5, com: <LatestProject /> },
      { key: 6, com: <Contact /> },
    ],
  },
]
