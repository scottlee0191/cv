import { memo } from 'react'
import { services } from '../constants/data'

function Service() {
  const jsx = services.map((service) => (
    <div
      className="flex-1 space-y-1 rounded border-2 border-main p-6 py-3 text-center transition hover:shadow-xl"
      key={service.id}
    >
      <div className="text-4xl text-main">{service.icon}</div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button className="border-2 border-main bg-main text-white hover:bg-transparent hover:text-main">
        Read More
      </button>
    </div>
  ))
  return (
    <div>
      <h2>Service</h2>
      <div className="mt-6 flex flex-wrap gap-6">{jsx}</div>
    </div>
  )
}
export default memo(Service)
