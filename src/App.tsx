import { useState } from 'react'
import { pages } from './constants/page'
import Profile from './components/Profile'

function App() {
  const [current, setCurrent] = useState(pages.length - 1)
  const handleNext = (e, pos) => {
    const pageTurn = e.target.parentElement.parentElement.parentElement
    pageTurn.classList.add('turn')
    setTimeout(() => {
      pageTurn.style.zIndex = 20 + pos
    }, 500)

    setCurrent((current + 1) % pages.length)
  }
  const handlePre = (e, pos) => {
    const pageTurn = e.target.parentElement.parentElement.parentElement
    pageTurn.classList.remove('turn')
    setTimeout(() => {
      pageTurn.style.zIndex = 20 - pos
    }, 500)
    setCurrent((current + pages.length - 1) % pages.length)
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-text">
      <div className="relative h-[45rem] w-[66rem] p-8">
        {/* cover cover-left */}
        <div className="cover-lg bs shadow-bs absolute left-0  top-0 h-full w-1/2 origin-right rounded-l-xl"></div>
        {/* cover cover-right */}
        <div className="cover-lg bs rotate-y shadow-bs absolute left-0  top-0 h-full w-1/2 origin-right rounded-l-xl"></div>
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
              className="page-lg bs p-3d turn flip absolute right-0 z-10 h-full w-1/2 origin-left p-8"
              key={page.key}
            >
              {page.data.map((item, index) => (
                <div
                  className={`page-lg absolute left-0 top-0 h-full w-full p-6 py-8 ${
                    index === 0 ? 'front' : 'back'
                  }`}
                  key={item.key}
                >
                  {item.title}
                  <span className="absolute bottom-6 left-1/2 translate-y-1/2">
                    {item.key}
                  </span>
                  <button
                    onClick={
                      index === 0
                        ? (e) => handleNext(e, item.key)
                        : (e) => handlePre(e, item.key)
                    }
                    className={`absolute bottom-2 ${
                      index === 0 ? 'right-5' : 'left-5'
                    }`}
                  >
                    {index === 0 ? (
                      <i className="bx bx-chevron-right text-2xl"></i>
                    ) : (
                      <i className="bx bx-chevron-left"></i>
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
