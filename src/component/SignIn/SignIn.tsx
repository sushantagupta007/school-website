import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from './../../context/AuthProvider'

const SignIn = () => {
  const { login, user } = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data: any) => {
    const { email, password } = data

    login({ email: email, password: password })
    console.log(data)
    // reset()
  }
  return (
    <div className="mx-auto h-screen p-5 md:w-2/5">
      <h1 className="text-2xl font-bold text-white"> Login Form </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <input
          type="email"
          className="my-3 rounded p-3"
          placeholder="Your Email"
          {...register('email', { required: true, maxLength: 255 })}
        />
        <input
          type="password"
          className="my-3 rounded p-3"
          placeholder="Your Password "
          {...register('password')}
        />

        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
