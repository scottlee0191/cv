import { memo } from 'react'
import { socials } from '../constants/data'

function Profile() {
  function handleContact() {
    const pages = document.querySelectorAll('.page-turn')
    pages.forEach((page, index) => {
      setTimeout(
        () => {
          page.classList.add('turn')
          setTimeout(() => {
            if (page instanceof HTMLElement) page.style.zIndex = `${20 + index}`
          }, 500)
        },
        (index + 1) * 200 + 100
      )
    })
  }

  const socialJsx = socials.map((social) => (
    <a
      href={social.link}
      target="_blank"
      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-main text-xl text-main transition hover:bg-main hover:text-white"
      key={social.id}
    >
      {social.icon}
    </a>
  ))

  return (
    <div className=" flex h-full flex-col items-center justify-center gap-6 text-center">
      <img
        src="me.webp"
        className="h-40 w-40 rounded-full ring-4 ring-main"
        alt="Scottlee"
      />
      <div>
        <h1 className="text-5xl font-bold">Scottlee</h1>
        <h3 className="text-2xl font-semibold text-main">Software Engineer</h3>
      </div>
      <div className="flex gap-3">{socialJsx}</div>
      <p className="text-justify">
        Highly skilled IT professional with six years professional experience in
        website development, application development, implementation,
        deployment, system integration, internal and customer support. Performed
        several roles as senior developer, team leader.
      </p>
      <div className="flex items-center justify-center gap-6">
        <button
          className="border-2 border-main bg-main text-white hover:bg-transparent hover:text-main"
          onClick={handleContact}
        >
          DownLoad CV
        </button>
        <button
          onClick={handleContact}
          className="border-2 border-main bg-transparent text-main hover:bg-main hover:text-white"
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default memo(Profile)
