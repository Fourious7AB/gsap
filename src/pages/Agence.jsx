
import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'


function Agence() {
  const imageDivref=useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  const imageref=useRef(null);
  const imageArray=[
    "../public/image/Carl_480x640-480x640.jpg",
    "../public/image/ChantalG_480x640-480x640.jpg",
      "../public/image/ChantalG_480x640-480x640.jpg",
      "../public/image/Claire_480x640-480x640.jpg",
      "../public/image/HugoJoseph_480x640-480x640.jpg",
    "../public/image/joel_480X640_3-480x640.jpg",
    "../public/image/Lawrence_480x640-480x640.jpg",
    "../public/image/MAXIME_480X640_2-480x640.jpg",
    "../public/image/MEGGIE_480X640_2-480x640.jpg",
    "../public/image/MEL_480X640-480x640.jpg",
    "../public/image/MEL_480X640-480x640.jpg",
    "../public/image/Michele_480X640-480x640.jpg",
    "../public/image/Michele_480X640-480x640.jpg",
    "../public/image/Olivier_480x640-480x640.jpg",
    "../public/image/MyleneS_480x640-480x640.jpg",
    "../public/image/SophieA_480x640-480x640.jpg"
  ]

useGSAP(()=>{
  gsap.to(imageDivref.current,{
    scrollTrigger:{
      trigger:imageDivref.current,
      start:'top 28%',
      end:'top -80%',
      pin:true,
      pinSpacing:true,
      pinReparent:true,
      pinType:'transform',
      scrub:1,
      anticipatePin:1,
      invalidateOnRefresh:true,
      onUpdate:function(elem){

        let  imageIndex;
        
        if(elem.progress<1){
          imageIndex=Math.floor(elem.progress*imageArray.length)
        }else{
          imageIndex=imageArray.length-1
        }
        imageref.current.src=imageArray[imageIndex]
      }
    }
    
  })
})

  return (
    <div className='text-black'>
       <div className='section1  pt-[22vh]'>    
         <div ref={imageDivref} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-96 left-[30vw]  bg-red-500'>
          <img ref={imageref} className='h-full  object-cover w-full ' src='../public/image/Carl_480x640-480x640.jpg'/>
         </div>
       <div className=' relative font-[font2]'>
           <div className=' mt-[55vh]'>
             <h1 className='text-[19vw] text-black text-center leading-[18vw] uppercase'>Soixan7e<br/>
             Douze</h1>
           </div>
           <div className='pl-[40%] mt-20'>
             <p className='text-black text-5xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
           </div>
         </div>
       </div>
     <div className='section2 h-screen'></div>
    </div>
  )
}

export default Agence