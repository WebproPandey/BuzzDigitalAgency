import React from 'react'
import HeroSection from '../Components/HeroSection'
import SecondSection from '../Components/SecondSection'
import FourthSection from '../Components/FourthSection'
import FeaturedSection from '../Components/FeaturedSection'
import Fotter from '../Components/Fotter'

const Home = () => {
  return (
    <div className='w-full'>
      <HeroSection/>
      <SecondSection/>
      <FourthSection/>
      <FeaturedSection/>
      <Fotter/>
    </div>
  )
}

export default Home