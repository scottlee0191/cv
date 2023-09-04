import { memo } from 'react'

function Profile() {
  const socials = [
    { id: 1, icon: <i className="bx bxl-facebook"></i> },
    { id: 2, icon: <i className="bx bxl-twitter"></i> },
    { id: 3, icon: <i className="bx bxl-linkedin"></i> },
    { id: 4, icon: <i className="bx bxl-instagram"></i> },
  ]

  const socialJsx = socials.map((social) => (
    <a
      href="#"
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
        <h3 className="text-3xl font-semibold text-main">Software Engineer</h3>
      </div>
      <div className="flex gap-3">{socialJsx}</div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        laudantium laborum, pariatur minima, molestiae facilis officiis sed
        natus eaque esse reprehenderit blanditiis eius ex ut. Adipisci similique
        impedit quisquam ratione, vel dolorem dolorum ab perspiciatis fugit
        ullam cum quibusdam corrupti aperiam, .
      </p>
    </div>
  )
}

export default memo(Profile)
