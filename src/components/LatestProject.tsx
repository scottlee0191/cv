import { memo } from 'react'

function LatestProject() {
  return (
    <div>
      <h2>Latest Project</h2>
      <div className="mt-6 space-y-3">
        <div className="overflow-hidden rounded-lg border-2 border-main hover:shadow-lg">
          <img
            className="transition hover:scale-105 "
            src="project.webp"
            alt="project"
          />
        </div>

        <div className=" flex items-center justify-between">
          <h4>Project Name</h4>
          <a
            className="flex items-center gap-2 text-main"
            href="https://scottlee0191.github.io/cv/"
            target="_blank"
          >
            Live Preview <i className="bx bx-link-external"></i>
          </a>
        </div>
        <div>
          <h6 className="font-bold">Tech Used:</h6>
          <p>React, Vite, Html, Css,...</p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a
            className="border-2 border-main bg-main p-2 text-white hover:bg-transparent hover:text-main"
            href="https://github.com/scottlee0191/cv"
            target="_blank"
          >
            Source Code
          </a>
          <a
            className="border-2 border-main bg-transparent p-2 text-main hover:bg-main hover:text-white"
            href="https://github.com/scottlee0191"
            target="_blank"
          >
            More Projects
          </a>
        </div>
      </div>
    </div>
  )
}
export default memo(LatestProject)
