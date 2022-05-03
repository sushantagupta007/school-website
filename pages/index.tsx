import type { NextPage } from 'next'
import Navbar from '../src/component/Navbar'
import HeaderBackgrounStyle from '../styles/homePage.module'

const Home: NextPage = () => {
  return (
    <div className={`${HeaderBackgrounStyle.headerBG}`}>
      <Navbar></Navbar>
    </div>
  )
}

export default Home
