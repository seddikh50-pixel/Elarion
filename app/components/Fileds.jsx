"use client"
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive';
// import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Fileds = () => {
  useGSAP(() => {



    const descriptionTileline1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "top 60%",
        end: "+=700",
        scrub: 2,

      }
    })

    descriptionTileline1
      .from(".textdesc", {
        x: "1200",
        // transformOrigin: "left center",
        duration: 1,
        ease: "power1"
      })
    descriptionTileline1.to('.hero', {
      scale: 0.80
    }, "<")


    const descriptionTileline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".description",
        start: "top top",
        end: "bottom top",
        scrub: 3,
        pin: true,
        pinSpacing : false
      }
    })

    const paragraphSplit = SplitText.create(".paragraph", {
      type: "words, lines , chars",
      mask: "lines",
      linesClass: "line++",
    });
    descriptionTileline2.from(paragraphSplit.chars, {
      y: -600,
      stagger: 0.1,
      duration: 1,
      ease: "back.inOut"
    })
  })
  return (
    <div className='description w-screen h-screen p-4 bg-ref-100 text-[10vh] overflow-hidden'>
      {/* <div className=' absolute w-full h-full '>
            <Image alt='fantasy' className='object-cover' fill src={"/rendering.jpg"}/>
        </div>  */}
      <h1 className='textdesc text-[10vh] text-black xl:text-[45vh] leading-[0.9]'>Elarion</h1>
      <p className='paragraph text-black xl:text-[10vh] text-[4vh]'>Elarion — a realm of endless magic where light and shadow dance in eternal harmony.</p>
    </div>
  )
}

export default Fileds