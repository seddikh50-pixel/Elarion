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



const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: "768px" })

    useGSAP(() => {



        const splitName = SplitText.create(".textname", {
            type: "words, lines , chars",
            mask: "lines",
            linesClass: "line++",
        });

        gsap.from(splitName.chars, {
            y: -600,
            stagger: 0.1,
            duration: 1,
            ease: "bounce"
        })

        const cloudsTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: 'top top',
                end: "+=1000",
                scrub:3,
                pin: true
            }
        })

        cloudsTimeLine.to('.leftcloud', {
            x: isMobile ? -100 : -500,
            ease: "power1"
        })
        cloudsTimeLine.to('.rightcloud', {
            x: isMobile ? 100 : 500,
            ease: "power1"
        }, '<')
        cloudsTimeLine.to('.island', {
            y: -700,
            duration: 1,
            scale: 3,
            ease: "power1"
        }, '<')
        cloudsTimeLine.to('.textname', {
            duration: 1,
            scale: 1,
            ease: "power1"
        }, '<')
        cloudsTimeLine.to('.hero', {
            borderRadius: "40px",
        })
    })


    return (
        <div className='hero relative w-full h-full flex justify-center items-center overflow-hidden bg-amber-100 '>
            <h1 className='textname z-2 text-[10vh] whitespace-nowrap scale-30 sm:text-[14vh] md:text-[15vh] xl:text-[37vh] text-amber-100 uppercase font-bold '>Elarion </h1>
            <div className='leftcloud absolute xl:w-full top-50 xl:-top-20 -left-80 md:w-200 md:h-200  w-150 h-96  xl:-left-200 xl:h-full z-3'>
                <Image src={"/pnh.webp"} className='object-cover' loading="lazy" alt='fantasy' fill />
            </div>
            <div className='rightcloud absolute xl:w-6/8 top-50 xl:top-20 -right-80 w-150 h-96 md:w-200 md:h-200  xl:-right-80 rotate-x-180   xl:h-full z-11'>
                <Image src={"/pnh.webp"} className='object-cover' loading="lazy" alt='fantasy' fill />
            </div>
            <div className=' absolute w-full h-full'>
                <Image src={"/sd.webp"} className='object-cover' loading="lazy" alt='fantasy' fill />
            </div>
            <div className='island absolute xl:w-350 xl:h-250 w-100 h-70 md:w-300 md:h-200 md:top-84 top-64 z-10 xl:top-50 right-30 xl:right-130'>
                <Image src={"/dd.webp"} className='object-cover' loading="lazy" alt='fantasy' fill />
            </div>

        </div>
    )
}

export default Hero
