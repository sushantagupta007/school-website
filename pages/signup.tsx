import React from 'react'
import Navbar from '../src/component/HomePage/Navbar'
import SignUp from '../src/component/SignUp/SignUp'
import BgColor from '../styles/mycard.module.css'
const signup = () => {
  return (
    <div className={`border ${BgColor.bg}`}>
      <Navbar></Navbar>
      <SignUp></SignUp>
    </div>
  )
}

export default signup
