import { memo } from 'react'
import { skills } from '../constants/data'

function MySkill() {
  const jsx = skills.map((skill) => (
    <div key={skill.id}>
      <h4>{skill.name}</h4>
      <ul className="mt-3 flex flex-wrap gap-3">
        {skill.data.map((item) => (
          <li
            className="rounded border-2 border-main p-4 py-1 text-center transition hover:shadow-md"
            key={item.id}
          >
            <span className="text-4xl text-main">{item.icon}</span>
            <h6 className="font-bold">{item.name}</h6>
          </li>
        ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h2>My Skill</h2>
      <div className="mt-6 space-y-6">{jsx}</div>
    </div>
  )
}
export default memo(MySkill)
