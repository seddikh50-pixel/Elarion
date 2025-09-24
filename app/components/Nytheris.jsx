"use client"
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Nytheris = () => {
    //   const isMobile = useMediaQuery({maxWidth : "500px"})
    const [isMobile, setIsMobile] = useState(false);

    useGSAP(() => {
        setIsMobile(window.innerWidth <= 500);


        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".contain",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,
            }
        })
        videoTimeline.from('.videoWrapper', {
            // rotateZ: "-30",
            borderRadius: "300px",
            scale: 0.3,
            ease: 'power1',
            duration: 1,
        }
        ).to(".parrot", {
            x: -1250,
            y: -700,
            scale: "0.5",
            ease: "power1"
        }).to(".butterfly", {
            x: 420,
            y: 320,
            scale: "0.5",
            ease: "power1"
        })

    })
    return (
        <div className='contain  w-screen h-screen text-black relative  flex justify-center  items-center overflow-hidden '>
            <div className='videoWrapper relative w-full  h-full  overflow-hidden'>
                <div className='absolute rotate-y-180 w-80 h-80 left-150 -bottom-20'>
                    <Image loading="lazy" src={"/animation/Parrot.gif"} className='parrot' fill alt='parrot' />
                </div>
                <div className={`absolute rotate-y-180 w-60 h-60 ${isMobile ? "left-50" : "left-200"} ${isMobile ? "bottom-50" : "bottom-100"}  `}>
                    <Image loading="lazy" src={"/animation/butterfly.gif"} className='butterfly' fill alt='parrot' />
                </div>
                <video src="/Vecteezy.mp4" className='video object-cover w-full h-full' loop autoPlay muted playsInline preload='metadata'></video>
            </div>
        </div>
    )
}

export default Nytheris