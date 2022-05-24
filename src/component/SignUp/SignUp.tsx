import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const [role, setRole] = useState('')

  const handleChangeCapture = (e: any) => {
    let value = e.target.value
    setRole(value)
  }

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    const { name, email, contact, id, p1 } = data

    if (
      (data.id === 'Teacher2022' ||
        data.id === 'Admin2022' ||
        data.id === 'Parent2022') &&
      data.p1 == data.p2
    ) {
      fetch('http://localhost:5000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((item) => {
        if (item.status === 200) {
          alert('Registration Successful')
        }
      })
      console.log(data)
    } else if (data.password1 == data.password2) {
      alert('Either Password or Id is wrong')
    }

    // reset()
  }
  return (
    <div className="mx-auto h-screen p-5 md:w-2/5">
      <h1 className="text-2xl font-bold text-white"> Sign Up Form </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <input
          type="text"
          className="my-3 rounded p-3"
          placeholder="Your Name"
          {...register('name', { required: true, maxLength: 255 })}
        />
        <input
          type="email"
          className="my-3 rounded p-3"
          placeholder="Your Email"
          {...register('email', { required: true, maxLength: 255 })}
        />
        <input
          type="text"
          className="my-3 rounded p-3"
          placeholder="Your Mobile Number"
          {...register('contact', { required: true, maxLength: 255 })}
        />
        <select
          onChangeCapture={handleChangeCapture}
          className="my-3 rounded p-3"
          {...register('role')}
        >
          <option value="parent">parent</option>
          <option value="admin">admin</option>
          <option value="teacher">teacher</option>
        </select>
        {role === 'parent' ? (
          <input
            type="text"
            className="my-3 rounded p-3"
            placeholder="Parent Id "
            {...register('id', { required: true, maxLength: 255 })}
          />
        ) : role === 'admin' ? (
          <input
            type="text"
            className="my-3 rounded p-3"
            placeholder="Admin Id"
            {...register('id', { required: true, maxLength: 255 })}
          />
        ) : role === 'teacher' ? (
          <input
            type="text"
            className="my-3 rounded p-3"
            placeholder="Teacher Id"
            {...register('id', { required: true, maxLength: 255 })}
          />
        ) : (
          ''
        )}
        <input
          type="text"
          className="my-3 rounded p-3"
          placeholder="Your Address"
          {...register('address', { required: true, maxLength: 255 })}
        />
        <input
          type="password"
          className="my-3 rounded p-3"
          placeholder="Your Password "
          {...register('p1')}
        />
        <input
          type="password"
          className="my-3 rounded p-3"
          placeholder="Confirm Password "
          {...register('p2')}
        />

        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}
export default SignUp
// 2hrlbK7YPcZR0v90
// MySchool
