import { useEffect, useState } from 'react'

import { pages } from './constants/page'
import { toProfile } from './helper'

import Profile from './components/Profile'

function App() {
  const [current, setCurrent] = useState(pages.length - 1)

  const onNavigation = (
    e: React.SyntheticEvent,
    index: number,
    pos: number
  ) => {
    const button = e.target as HTMLElement
    const pageTurn = button?.parentElement?.parentElement?.parentElement
    if (index === 0) {
      if (pageTurn) {
        pageTurn.classList.add('turn')
        setTimeout(() => {
          pageTurn.style.zIndex = `${20 + pos}`
        }, 500)
      }

      setCurrent((current + pages.length - 1) % pages.length)
    } else {
      if (pageTurn) {
        pageTurn.classList.remove('turn')
        setTimeout(() => {
          pageTurn.style.zIndex = `${20 - pos}`
        }, 500)
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const pageRight = document.getElementById('page-right')
      if (pageRight) {
        pageRight.classList.add('turn')
        setTimeout(() => {
          pageRight.style.zIndex = `${-1}`
          toProfile()
        }, 500)
      }
    }, 2500)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-background text-text">
      <div className="p-3d relative h-[45rem] w-[66rem] animate-show p-8">
        {/* cover cover-left */}
        <div className="cover-lg bs shadow-bs absolute left-0  top-0 h-full w-1/2 origin-right rounded-l-xl"></div>
        {/* cover cover-right */}
        <div
          id="page-right"
          className=" flip cover-lg bs shadow-bs absolute left-0 top-0  z-50 h-full w-1/2 origin-right rounded-l-xl"
        ></div>
        {/* book */}
        <div className="perspective relative flex h-full w-full">
          {/* page profile */}
          <div className="page-lg bs absolute z-10 h-full w-1/2 p-8">
            <Profile />
          </div>
          {/* page 1 & 2 */}
          {/* page 3 & 4 */}
          {/* page 5 & 6 */}
          {pages.map((page) => (
            <div
              className="page-turn page-lg bs p-3d turn flip absolute right-0 z-10 h-full w-1/2 origin-left p-8"
              key={page.key}
            >
              {page.data.map((item, index) => (
                <div
                  className={`page-lg absolute left-0 top-0 h-full w-full p-6 py-8 ${
                    index === 0 ? 'front' : 'back'
                  }`}
                  key={item.key}
                >
                  {item.com}
                  <span className="absolute bottom-6 left-1/2 translate-y-1/2">
                    {item.key}
                  </span>
                  <button
                    onClick={(e) => onNavigation(e, index, item.key)}
                    className={`absolute bottom-2 ${
                      index === 0 ? 'right-5' : 'left-5'
                    }`}
                  >
                    {index === 0 ? (
                      <i className="bx bx-chevron-right text-3xl"></i>
                    ) : (
                      <i className="bx bx-chevron-left text-3xl"></i>
                    )}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
