import React from 'react'
//import HeroMain from "./components/hero/HeroMain";
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import HeroGradient from './HeroGradient'

const HeroMain = () => {
  return (
    <div>
        <HeroText/>
        <HeroPic/>
        <HeroGradient/>
    </div>
  )
}

export default HeroMain