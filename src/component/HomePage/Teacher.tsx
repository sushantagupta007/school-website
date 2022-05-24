import Image from 'next/image'
import React from 'react'
import BgColor from '../../../styles/mycard.module.css'
import TeacherBG from '../../../styles/teacher.module.css'
import TeacherGirl from '../../image/TeacherGirl.png'

const Teacher = () => {
  return (
    <div className={`${BgColor.bg}`}>
      <div className="mx-auto grid max-w-6xl gap-1 py-10 px-4 md:grid-cols-2">
        <div
          className={`${TeacherBG.bg_color} flex w-4/5 justify-center rounded`}
        >
          <Image className="w-100 rounded" src={TeacherGirl} alt="teacher" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="my-3 text-xl  text-white md:text-5xl md:font-bold">
            {' '}
            Our Expert
          </h1>
          <h1 className="my-3 text-xl  text-white md:text-5xl md:font-bold">
            {' '}
            Teacher
          </h1>
          <p className="text-sm leading-6 text-white">
            {' '}
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Teacher
