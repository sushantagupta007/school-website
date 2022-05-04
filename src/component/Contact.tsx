import React from 'react'
import CourseStyle from '../../styles/courses.module.css'
import MyCardStyle from '../../styles/mycard.module.css'
const Contact = () => {
  return (
    <div className={`${MyCardStyle.bg}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4">
        <p className={`${CourseStyle.txtColor}`}> NewsLetter</p>
        <h1 className="my-3 text-xl  text-white md:text-4xl md:font-bold">
          {' '}
          Every Client Matters
        </h1>
        <p className="my-2 text-sm leading-6 text-white">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <form className="flex w-3/5 border-slate-100">
          <input
            className=" grow-2 w-full border-0 p-4"
            type="text"
            placeholder="Your Email"
          ></input>
          <button
            style={{ backgroundColor: 'rgba(141, 92, 246, 1)' }}
            className="pointer hover: border px-2 text-white"
            type="button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
