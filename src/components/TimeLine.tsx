import type { Items } from '../constants/data'

type Props = {
  timelines: Items
  title: string
}

function TimeLine({ timelines, title }: Props) {
  const timeLineJsx = timelines.map((timeLine, index) => (
    <div
      key={timeLine.id}
      className={`relative border-l-2 border-main ${
        index + 1 !== timelines.length ? 'pb-6' : ''
      } pl-4`}
    >
      <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-main"></span>
      <div className="text-main">
        <i className="bx bxs-calendar"></i>
        <span className="ml-3">{timeLine.duration}</span>
      </div>
      <h4>{timeLine.title}</h4>
      <p>{timeLine.description}</p>
    </div>
  ))
  return (
    <div>
      <h2>{title}</h2>
      <div className="mt-6">{timeLineJsx}</div>
    </div>
  )
}
export default TimeLine
