import React from 'react'
import Navbar from '../src/component/HomePage/Navbar'
import SignIn from '../src/component/SignIn/SignIn'
import BgColor from '../styles/mycard.module.css'
const signin = () => {
  return (
    <div className={`border ${BgColor.bg} `}>
      <Navbar></Navbar>
      <SignIn></SignIn>
    </div>
  )
}

export default signin
