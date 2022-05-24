import React from 'react'
import { BsFacebook } from 'react-icons/bs'
const FooterEnd = () => {
  return (
    <div className="flex flex-col justify-around md:flex-row">
      <p className="text-sm"> CopyRight @ MySchool </p>
      <div className="flex ">
        <ul className="flex">
          <li className="mr-4">
            {' '}
            <BsFacebook className="text-xl" />
          </li>
          <li className="mr-4">
            {' '}
            <BsFacebook className="text-xl" />
          </li>
          <li className="mr-4">
            {' '}
            <BsFacebook className="text-xl" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterEnd
