import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import StarColor from '../../styles/StartColor.module.css'

const StartGenerate = (rate: any) => {
  return (
    <div>
      <ul className="flex">
        <li>
          <AiFillStar className={StarColor.color}></AiFillStar>
        </li>
        <li>
          <AiFillStar className={StarColor.color}></AiFillStar>
        </li>
        <li>
          <AiFillStar className={StarColor.color}></AiFillStar>
        </li>
        <li>
          <AiFillStar className={StarColor.color}></AiFillStar>
        </li>
      </ul>
    </div>
  )
}

export default StartGenerate
