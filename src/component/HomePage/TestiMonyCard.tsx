interface TestiMonyObj {
  img: any
  rating: number | any
}
import Image from 'next/image'
import * as React from 'react'
import StartGenerate from './StartGenerate'

const TestiMonyCard = ({ img, rating }: TestiMonyObj) => {
  return (
    <div className="flex flex-col items-center bg-white p-4">
      <StartGenerate></StartGenerate>
      <p className="my-3 text-center">
        {' '}
        Slate helps you see how many more days you need to work to reach your
        financial goal for the month and year.
      </p>
      <div className="mx-auto flex">
        <Image src={img} alt="Regina Miles" />
        <div className="flex flex-col items-center justify-center">
          <p> Regina Miles </p>
          <p> Designer </p>
        </div>
      </div>
    </div>
  )
}

export default TestiMonyCard
