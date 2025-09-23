"use client"
import Link from 'next/link'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText);

const Header = () => {
    // useGSAP(() => {
    //     gsap.from('.parts',{
    //         x : -300,
    //         ease : "circ",
    //         duration : 1,
    //         stagger : "0.5"
    //     }
    //     )
    // })
    return (
        <div className='fixed z-50  w-screen '>
            <div className='bars flex w-full justify-between '>
                <div className='logo text-5xl pl-2 text-amber-100 font-extrabold '>ELARION</div>
             
            </div>
        </div>
    )
}

export default Header