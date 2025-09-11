import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function Stairs(props) {
  const currentPath = useLocation().pathname;
  const stairsParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairsParentRef.current, {
      display: 'block',
    });

    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairsParentRef.current, {
      display: 'none',
    });

    tl.to('.stair', {
      y: '0%',
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale:1.2
    }

    )
  }, { dependencies: [currentPath] });

  return (
    <div>
      <div ref={stairsParentRef} className="text-white z-20 top-0">
      <div className="h-screen w-full fixed z-20 top-0">
        <div className="h-screen w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
    </div>
     <div  ref={pageRef}>
      {props.children}
     </div>
    </div>
  );
}
