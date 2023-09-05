import { experiences } from '../constants/data'

function Experience() {
  const experienceJsx = experiences.map((experience, index) => (
    <div
      key={experience.id}
      className={`relative border-l-2 border-main ${
        index + 1 !== experiences.length ? 'pb-6' : ''
      } pl-4 before:absolute before:-left-[9px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-main`}
    >
      <div className="text-main">
        <i className="bx bxs-calendar"></i>
        <span className="ml-3">{experience.duration}</span>
      </div>
      <h4 className="text-xl font-semibold">{experience.title}</h4>
      <p>{experience.description}</p>
    </div>
  ))
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Work Experience</h2>
      <div className="mt-6">{experienceJsx}</div>
    </div>
  )
}
export default Experience
