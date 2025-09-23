import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Tales = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" })
  useGSAP(() => {
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".taleContainer",
        start: "top 60%",
        end: "+=600",
        scrub: 1,

      }

    })
    const taleSplit = SplitText.create(".tales", {
      type: "words, lines , chars",
      mask: "lines",
      linesClass: "line++",

    });
    textTimeline.from(taleSplit.chars, {
      yPercent:100,
      rotate: 'random(-60,60)',
      stagger: {
        each: 0.2,
        from: "center",
      },
      duration: 1,
      ease: "back.inOut"
    })





    const talesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".taleContainer",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 2,
        markers: true


      }
    })
    talesTimeline.to('.tales', {
      transform: "translateZ(690px)",
      color: "black",
      x: isMobile ? 45 : 200,
      ease: "power1",
      duration: 1,
    }).to('.taleContainer',
      { backgroundColor: "black", duration: 0 }
    )
    talesTimeline.to('.tales', {
      transform: "translateZ(0px)",
      ease: "power1",
      duration: 1,
    })


  })
  return (
    <div className='taleContainer relative h-screen w-screen flex justify-center items-center  bg-amber-100' style={{ perspective: "700px" }} >
      <h1 className='tales text-[15vh] font-bold xl:text-[30vh]  absolute   '>TALES</h1>
      {/* <h1 className='tales leading-[1.2] xl:text-[30vh] text-[15vh] left-25 font-bold   text-yellow-500'> TALES</h1> */}
    </div>
  )
}

export default Tales