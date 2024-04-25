import React from 'react'
import { Top } from "../components/Top/Top"
import { Membership } from "../components/Membership/Membership"
import { SliderBlock } from "../components/Slider/Slider"
import { News } from "../components/News/News"


export const Landing = () => {
  return (
    <div>
      <Top />
      <Membership />
      <SliderBlock />
      <News />
			<Landing />
    </div>
  )
}
