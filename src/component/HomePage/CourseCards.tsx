import React from 'react'
import CourseImage1 from '../../image/product1.png'
import CourseImage2 from '../../image/product2.png'
import CourseImage3 from '../../image/product3.png'
import CourseCard from './CourseCard'
const CourseCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 ">
      <CourseCard
        img={CourseImage1}
        title="Online Course"
        price1="14.54"
        price2="16.65"
        des="We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away."
      ></CourseCard>
      <CourseCard
        img={CourseImage2}
        title="Training Course"
        price1="14.54"
        price2="16.65"
        des="We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away."
      ></CourseCard>
      <CourseCard
        img={CourseImage3}
        title="Book Library"
        price1="14.54"
        price2="16.65"
        des="We focus on ergonomics and meeting 
              you where you work. It's only a 
              keystroke away."
      ></CourseCard>
    </div>
  )
}

export default CourseCards
