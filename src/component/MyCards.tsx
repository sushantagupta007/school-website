import React from 'react'
import BgColor from '../../styles/mycard.module.css'
import CardImage3 from '../image/courses.png'
import CardImage2 from '../image/expert.png'
import CardImage from '../image/online.png'
import MyCard from './MyCard'

const MyCards = () => {
  return (
    <div className={` ${BgColor.bg}`}>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        <MyCard
          img={CardImage}
          num="2000"
          alt="Online Courses"
          dex="The gradual accumulation of 
            information about atomic and 
          small-scale behaviour..."
        ></MyCard>
        <MyCard
          img={CardImage2}
          num="2000"
          alt="Online Courses"
          dex="The gradual accumulation of 
            information about atomic and 
          small-scale behaviour..."
        ></MyCard>
        <MyCard
          img={CardImage3}
          num="2000"
          alt="Online Courses"
          dex="The gradual accumulation of 
            information about atomic and 
          small-scale behaviour..."
        ></MyCard>
      </div>
    </div>
  )
}

export default MyCards
