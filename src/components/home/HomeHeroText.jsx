import React from 'react'
import Video from '../home/Video'

function HomeHeroText() {
  return (
    <div className='font-[font2] pt-5  text-center'>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>L'étincelle</div>
      <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]'>qui<div className='w-[16vw] h-[7vw] rounded-full  overflow-hidden -mt-3'><Video/></div>génère</div>
      <div className='text-[9.5vw] uppercase leading-[8vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText