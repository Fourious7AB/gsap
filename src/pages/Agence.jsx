
import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'


function Agence() {
  const imageDivref=useRef(null);
  gsap.registerPlugin(ScrollTrigger)

useGSAP(()=>{
  gsap.to(imageDivref.current,{
    scrollTrigger:{
      trigger:imageDivref.current,
      markers:true,
      start:'top 29%',
      end:'top -70%',
      pin:true
    }
    
  })
})

  return (
    <div>
       <div className='section1'>    
         <div ref={imageDivref} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-96 left-[30vw]  bg-red-500'>
          <img className='h-full object-cover w-full ' src=''/>
         </div>
       <div className=' relative font-[font2]'>
           <div className=' mt-[55vh]'>
             <h1 className='text-[19vw] text-black text-center leading-[18vw] uppercase'>Soixan7e<br/>
             Douze</h1>
           </div>
           <div className='pl-[40%] mt-20'>
             <p className='text-black text-6xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
           </div>
         </div>
       </div>
     <div className='section2 h-screen'></div>
    </div>
  )
}

export default Agence