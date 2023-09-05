import { memo } from 'react'
import { toProfile } from '../helper'

function Contact() {
  function handleProfile() {
    toProfile()
  }
  const handleSubmit = () => {
    alert('Sent!')
  }
  return (
    <div>
      <h2>Contact Me!</h2>
      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        <input placeholder="Full Name" required />
        <input placeholder="Email Address" type="email" required />
        <textarea placeholder="Your Message" rows={8} required />
        <button className="mx-auto block border-2 border-main bg-main text-white hover:bg-transparent hover:text-main">
          Send Message
        </button>
      </form>
      <button
        className="group absolute bottom-2 right-6 text-main"
        onClick={handleProfile}
      >
        <span className="absolute left-1 font-bold opacity-0 transition-all duration-500 group-hover:-translate-y-5 group-hover:opacity-100">
          Profile
        </span>
        <i className="bx bxs-user-rectangle text-2xl"></i>
      </button>
    </div>
  )
}
export default memo(Contact)
