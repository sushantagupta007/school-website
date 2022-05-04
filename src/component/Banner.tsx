import Image from 'next/image'
import React from 'react'
import Banner1 from '../image/BannerGirl.png'

const Banner = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 px-4 md:grid-cols-2 ">
      <div className=" flex flex-col px-2">
        <h6 className="my-3 text-white md:my-3"> Online Training </h6>
        <h1 className="text-bold my-3 text-2xl uppercase text-white sm:text-4xl md:my-5 lg:text-6xl">
          {' '}
          25K Students
        </h1>
        <h1 className="text-bold my-3 text-2xl uppercase  text-white sm:text-4xl md:my-3 lg:my-5 lg:text-6xl">
          {' '}
          Trust US
        </h1>
        <h6 className="my-2 text-white md:my-3 lg:my-5">
          {' '}
          Our goal is to make online education <br /> work for everyone{' '}
        </h6>
        <div className="md:justify-content-center flex flex-col md:flex-row md:items-center md:space-x-2 lg:space-x-7">
          <button className="my-1 w-2/5 rounded bg-blue-500 py-2  px-4 text-white hover:bg-blue-700  sm:my-0 ">
            Button
          </button>
          <button className=" border-white-500 5 my-1 w-2/5 rounded border bg-transparent py-2 px-4 text-white hover:border-transparent hover:bg-blue-500 hover:text-white sm:my-0">
            Button
          </button>
        </div>
      </div>
      <div>
        <Image className="w-100 " src={Banner1} alt="BannerGirl" />
      </div>
    </div>
  )
}

export default Banner
