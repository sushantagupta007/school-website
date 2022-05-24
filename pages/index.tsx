import type { NextPage } from 'next'
import Banner from '../src/component/HomePage/Banner'
import Contact from '../src/component/HomePage/Contact'
import Footer from '../src/component/HomePage/Footer'
import FooterEnd from '../src/component/HomePage/FooterEnd'
import MyCards from '../src/component/HomePage/MyCards'
import MyCourse from '../src/component/HomePage/MyCourse'
import Navbar from '../src/component/HomePage/Navbar'
import Package from '../src/component/HomePage/Package'
import Teacher from '../src/component/HomePage/Teacher'
import Testimonial from '../src/component/HomePage/Testimonial'
import homePage from '../styles/homePage.module.css'

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
      <Footer></Footer>
      <FooterEnd></FooterEnd>
    </>
  )
}

export default Home
