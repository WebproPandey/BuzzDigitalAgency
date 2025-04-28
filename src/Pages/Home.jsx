import React from 'react'
import HeroSection from '../Components/HeroSection'
import SecondSection from '../Components/SecondSection'
import FourthSection from '../Components/FourthSection'
import FeaturedSection from '../Components/FeaturedSection'
import Fotter from '../Components/Fotter'
import Navigating from '../Components/Navigating'
import TestimonialSection from '../Components/TestimonialSection'
import DigitalSection from '../Components/DigitalSection'
import ServicesSection from '../Components/ServicesSection'
import Sucess from '../Components/Sucess'
import Excellence from '../Components/Excellence'

const Home = () => {
  return (
    <div className='w-full'>
      <HeroSection/>
      <SecondSection/>
      <ServicesSection/>
      <FourthSection/>
       <Navigating/>
      <FeaturedSection/>
      <TestimonialSection/>
      <DigitalSection/>
      <Excellence/>
      <Sucess/>
      <Fotter/>
    </div>
  )
}

export default Home