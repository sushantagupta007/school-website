import Image from 'next/image'
import React from 'react'
import { AiFillStar, AiOutlineArrowRight } from 'react-icons/ai'
import CourseStyle from '../../styles/courses.module.css'

interface CourseCardProp {
  img: any
  title: string
  des: string
  price1: string
  price2: string
}
const CourseCard = ({ img, title, des, price1, price2 }: CourseCardProp) => {
  return (
    <div className="flex flex-col bg-white">
      <Image className="w-100" src={img} alt="image" />
      <div className="flex items-center justify-between p-4">
        {' '}
        <p className={`${CourseStyle.txtColor}`}> For better future</p>{' '}
        <button
          style={{ backgroundColor: 'rgba(38, 51, 93, 1)' }}
          className="flex items-center rounded-full py-1 px-4 font-bold text-white"
        >
          <AiFillStar style={{ color: '#FFCE31' }}></AiFillStar>{' '}
          <span className=""> 4.9 </span>
        </button>
      </div>
      <div className="p-4">
        {' '}
        <p className="my-2  text-sm font-semibold">{title}</p>
        <p className="my-2"> {des}</p>
        <p style={{ color: 'rgba(189, 189, 189, 1)' }}>
          {' '}
          $${price1}{' '}
          <span
            className="font-bold"
            style={{ color: 'rgba(255, 123, 82, 1)' }}
          >
            {' '}
            $${price2}
          </span>
        </p>
        <button className="w-50 flex items-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
          Learn More <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default CourseCard
