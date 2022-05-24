import React from 'react'
import ReactPlayer from 'react-player'
import BgColor from '../../../styles/mycard.module.css'
const Package = () => {
  return (
    <div className={`${BgColor.bg}`}>
      <div className="mx-auto grid max-w-6xl gap-1 py-10 px-4 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h1 className="my-3 text-xl  text-white md:text-5xl md:font-bold">
            {' '}
            Affordable Packages
          </h1>

          <p className="text-sm leading-6 text-white">
            {' '}
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{' '}
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <ReactPlayer
            light
            playing
            url="https://www.youtube.com/watch?v=LlCwHnp3kL4"
          ></ReactPlayer>
        </div>
      </div>
    </div>
  )
}

export default Package
