"use client"
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import { Physics2DPlugin } from 'gsap/Physics2DPlugin'

gsap.registerPlugin(ScrollTrigger, SplitText, Physics2DPlugin);

const Page = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    const box = boxRef.current;
    const ground = window.innerHeight - box.offsetHeight; // موقع الأرض (أسفل الشاشة)

    gsap.to(box, {
      duration: 3,
      physics2D: {
        velocity: 0,
        angle: 90,
        gravity: 800
      },
      onUpdate: function () {
        const y = gsap.getProperty(box, "y");
        if (y >= ground) {
          gsap.set(box, { y: ground }); // ثبّت عند الأرض
          this.kill(); // أوقف السقوط

          // أضف ارتداد (Bounce)
          gsap.to(box, {
            y: ground - 150,   // يرتفع شوي عن الأرض
            duration: 0.6,
            ease: "power2.out",
            yoyo: true,
            repeat: 1          // يرتد مرة وحدة (تقدر تزود الرقم)
          });
        }
      }
    });
  });

  return (
    <div className='relative flex w-screen h-screen justify-center items-start bg-gray-900'>
      <div ref={boxRef} className='w-32 h-32 bg-violet-400'></div>
    </div>
  )
}

export default Page;