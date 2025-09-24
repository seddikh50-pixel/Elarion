import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Tales = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" })
  const isSmallTablet = useMediaQuery({ minWidth: "500px", maxWidth: "768px" })
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "820px" })
  const isSmallDesktop = useMediaQuery({ minWidth: "820px", maxWidth: "1024px" })
  useGSAP(() => {
    console.log(isTablet)
    const images = gsap.utils.toArray(".fantasyimage");
    const taleSplit = SplitText.create(".tales", {
      type: "words, lines , chars",
      mask: "lines",
      linesClass: "line++",

    });


    const imagesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".taleContainer",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    })


    imagesTimeline.from(taleSplit.chars, {
      yPercent: 100,
      rotate: 'random(-60,60)',
      stagger: {
        each: 0.2,
        from: "center",
      },
      duration: 1,
      ease: "back.inOut"
    })




    imagesTimeline.from('.fantasyimage', {
      y: "112%",
      rotateX: 45,
      scale: 0.7,
      transformOrigin: "bottom center",
      transform: "translateZ(100px)",
      duration: 1,
      borderRadius: "100px",
      stagger: 0.7,
      ease: "power1"
    })

    imagesTimeline.to('.tales', {
      transform: "translateZ(690px)",
      x: isMobile ? 70 : isSmallTablet ? 65 : isTablet ? 75 : isSmallDesktop ? 90 : 200,
      ease: "power1",
      duration: 1,
    })
      .to('.amberbox',
        { display: "flex", duration: 0 }
      )
      .to('.tales', {
        transform: "translateZ(0px)",
        ease: "power1",
        duration: 1,
      })
      .from('.ambertext', {
        opacity: 0,
        duration: 1,
        ease: 'power1',
        y: 200
      })
      .fromTo(
        ".futuristic",
        {
          clipPath: "inset(50% 50% 50% 50%)" // تبدأ من نقطة بالمنتصف
        },
        {
          clipPath: "inset(0% 0% 0% 0%)", // تمتلي الشاشة كلها
          duration: 2,
          ease: "power2.out"
        }
      ).to('.ambertext', {
        color: "#fef3c7",
        duration: 1,
        ease: 'power1',
        y: -200
      }, '<').to('.end', {
        y: 200,
        duration: 2,
        ease: "power1"
      })








  })
  return (
    <div className='taleContainer relative h-max  w-screen flex justify-center items-center  bg-black' style={{ perspective: "700px" }} >
      <div className='amberbox absolute  justify-center  items-center bg-amber-100 inset-0 z-20 hidden  text-black'>
        <h1 className='ambertext text-[7vh] sm:text-[11vh] font-bold xl:text-[30vh] uppercase relative z-10'>Futuristic</h1>
        <div className="futuristic absolute w-full h-full">
          <Image
            loading="lazy"
            src="/futuristic.webp"
            alt="fut"
            fill
            className="object-cover futuristic-img"
          />        </div>

      </div>
      <div className='w-full h-screen relative ' style={{ perspective: "700px" }}>
        <div className='fantasyimage w-full h-full absolute' >
          <Image loading="lazy" src={'/fantasy1.webp'} className='object-cover' fill alt='fantasy1' />
        </div>
        <div className='fantasyimage w-full h-screen absolute'>
          <Image loading="lazy" src={'/fantasy2.webp'} className='object-cover' fill alt='fantasy2' />
        </div>
        <div className='fantasyimage w-full h-screen absolute '>
          <Image loading="lazy" src={'/fantasy3.webp'} className='object-cover' fill alt='fantasy3' />
        </div>

      </div>
      <h1 className='tales text-[15vh] font-bold xl:text-[30vh]  absolute text-amber-100 uppercase   whitespace-nowrap   '>TALES</h1>
    </div>
  )
}

export default Tales