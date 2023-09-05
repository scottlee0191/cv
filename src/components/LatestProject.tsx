import { memo } from 'react'

function LatestProject() {
  return (
    <div>
      <h2>Latest Project</h2>
      <div className="mt-6 space-y-3">
        <div className="overflow-hidden rounded-lg border-2 border-main hover:shadow-lg">
          <img
            className="transition hover:scale-105 "
            src="/project.webp"
            alt="project"
          />
        </div>

        <div className=" flex items-center justify-between">
          <h4>Project Name</h4>
          <a className="flex items-center gap-2 text-main">
            Live Preview <i className="bx bx-link-external"></i>
          </a>
        </div>
        <div>
          <h6 className="font-bold">Tech Used:</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non
            et totam.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="border-2 border-main bg-main text-white hover:bg-transparent hover:text-main">
            Source Code
          </button>
          <button className="border-2 border-main bg-transparent text-main hover:bg-main hover:text-white">
            More Projects
          </button>
        </div>
      </div>
    </div>
  )
}
export default memo(LatestProject)
