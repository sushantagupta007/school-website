import React from 'react'
import CourseStyle from '../../../styles/courses.module.css'
import CardStyle from '../../../styles/mycard.module.css'
import CourseCards from './CourseCards'

const MyCourse = () => {
  return (
    <div className={`${CardStyle.bg}`}>
      <div className="mx-auto max-w-6xl px-4 ">
        <p className={`${CourseStyle.txtColor}`}> Practice Advice</p>
        <h1 className="my-3 text-xl  text-white md:text-4xl md:font-bold">
          {' '}
          Our Popular Courses
        </h1>
        <p className="my-2 text-sm leading-6 text-white">
          {' '}
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{' '}
        </p>
        <CourseCards></CourseCards>
      </div>
    </div>
  )
}

export default MyCourse
