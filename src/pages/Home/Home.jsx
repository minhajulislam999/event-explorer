import React from 'react'
import Slider from './Slider'
import UpcomingEvents from './UpcomingEvents'
import EventCategories from './EventCategories'
import Newsletter from './Newsletter'
import Testimonials from './Testimonials'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Slider />
      <UpcomingEvents />
      <EventCategories />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home
