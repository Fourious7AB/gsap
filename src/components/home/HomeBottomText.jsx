import React from 'react'
import { Link } from 'react-router-dom'



function HomeBottomText() {
  return (
    <div className='font-[font2] flex item-center justify-center gap-2 '>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-18 pb-4 flex items-center px-10 border-white rounded-full  uppercase'>
        <Link className="text-[6vw] mt-6" to='/projects'>Projets</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-18 pb-4 flex items-center px-10 border-white rounded-full  uppercase'>
        <Link className="text-[6vw] mt-6" to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText