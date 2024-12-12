import React from 'react'
import LandingPage from './page/landingPage'
import About from './page/About'
import Contact from './page/Contact'
import FilterHouse from './page/filterHouse'
import AllHouse from './page/allHouse'

const Home = () => {
  return (
    <div>
        <LandingPage/>
        <FilterHouse/>
        <AllHouse/>
    
    </div>
  )
}

export default Home