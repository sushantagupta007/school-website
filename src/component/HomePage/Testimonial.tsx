import React from 'react'
import CourseStyle from '../../../styles/courses.module.css'
import MyCardStyle from '../../../styles/mycard.module.css'
import TestiMonyPic from '../../image/testimony1.png'
import TestiMonyCard from './TestiMonyCard'

const Testimonial = () => {
  return (
    <div className={`${MyCardStyle.bg} py-5`}>
      <div className=" mx-auto max-w-6xl px-4 ">
        <p className={`${CourseStyle.txtColor}`}> Testimonials</p>
        <h1 className="my-3 text-xl  text-white md:text-4xl md:font-bold">
          {' '}
          What Parents Say
        </h1>
        <p className="my-2 text-sm leading-6 text-white">
          {' '}
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{' '}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <TestiMonyCard img={TestiMonyPic} rating={4}></TestiMonyCard>
          <TestiMonyCard img={TestiMonyPic} rating={4}></TestiMonyCard>
          <TestiMonyCard img={TestiMonyPic} rating={4}></TestiMonyCard>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
