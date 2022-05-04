import type { NextPage } from 'next'
import Banner from '../src/component/Banner'
import Contact from '../src/component/Contact'
import MyCards from '../src/component/MyCards'
import MyCourse from '../src/component/MyCourse'
import Navbar from '../src/component/Navbar'
import Package from '../src/component/Package'
import Teacher from '../src/component/Teacher'
import homePage from '../styles/homePage.module.css'
import Testimonial from './../src/component/Testimonial'

const Home: NextPage = () => {
  return (
    <>
      <div className={`${homePage.headerBG}`}>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <MyCards></MyCards>
      <Teacher></Teacher>
      <Package></Package>
      <MyCourse></MyCourse>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  )
}

export default Home
