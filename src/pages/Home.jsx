import React from 'react'
import { Achievers, Courses, Faqs, Founders, Hubs, Learners, Main, Numbers, Quality, } from '../components'
import Difference from '../components/difference/Difference'



const Home = () => {
  return (
      <>
          <Main /> 
          <Courses />
          <Numbers />
          <Hubs />
          <Learners />
          <Achievers />
      <Quality />
      <Difference />
      <Founders />
      <Faqs/>
      </>
  )
}

export default Home
