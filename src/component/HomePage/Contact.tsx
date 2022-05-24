import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import CourseStyle from '../../../styles/courses.module.css'
import MyCardStyle from '../../../styles/mycard.module.css'
import { AuthContext } from '../../context/AuthProvider'

const Contact = () => {
  const { makeSubscribe } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    makeSubscribe(data)
  }

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-3/5 border-slate-100"
        >
          <input
            className=" grow-2 w-full border-0 p-4"
            type="email"
            placeholder="Your Email"
            {...register('email', { required: true, maxLength: 255 })}
          />
          <button
            className="pointer border bg-blue-300 px-2 text-white hover:bg-blue-500"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
