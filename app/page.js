"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Fileds from "./components/Fileds";
import Nytheris from "./components/Nytheris";
import gsap from 'gsap';
import { ChevronsRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Header from "./components/Header";
import Tales from "./components/Tales";
import End from "./components/End";
gsap.registerPlugin(ScrollToPlugin);


export default function Home() {
  const [lenis, setLenis] = useState(null);
  const [rafState, setRafState] = useState(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [showHeader, setShowHeader] = useState(true);





  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > lastScroll) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setLastScroll(window.scrollY)

    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [lastScroll]);

  // useGSAP(()=>{

  // })






  return (

    <div className="page h-screen w-screen bg-amber-100" data-scroll-container >

      <Header />
      <div
        onMouseEnter={() => {
          gsap.to('.parts', {
            x: 129,
            duration: 1,
            stagger: 0.2,
            ease: "bounce"
          })

         
        }}
        onMouseLeave={() => {
          gsap.to('.parts', {
            x: -131 ,
            duration: 1,
            stagger: 0.2,
            ease: "bounce"
          })
        }}
        className="wrapper fixed left-0 bg-amber-100 z-10 top-64 border border-black border-l-0">
        <div className="bg-amber-100 w-12 h-10 relative flex flex-col gap-2  justify-center items-center">
          <div className="w-5 h-[1px] bg-black ">  </div>
          <div className="w-5 h-[1px] bg-black ">  </div>
        </div>
        <div className='links  flex flex-col  text-2xl xl:pr-4 absolute z-10 -left-33 ' >
          <button onClick={() =>
            gsap.to(window, {
              duration: 1,
              scrollTo: ".hero",
              ease: "power2.inOut",

            })
          } className='parts py-3 px-2 text-black bg-amber-100 border-r border-t     border-b cursor-pointer  duration-200 transition-all hover:bg-black hover:text-amber-100'>ELARION</button>
          <button
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: ".description",
                ease: "power2.inOut",

              })
            } className='parts py-3 px-2 text-black bg-amber-100 border-r border-b cursor-pointer   hover:bg-black hover:text-amber-100'>LORE</button>
          <button
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: ".contain",
                ease: "power2.inOut",

              })
            }
            className='parts py-3 px-2 text-black border-r bg-amber-100 border-b cursor-pointer hover:bg-black hover:text-amber-100'>NYTHERIS</button>
          <button
           onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: ".taleContainer",
                ease: "power2.inOut",

              })
            }
          className='parts py-3 px-2 text-black bg-amber-100 border-r border-b cursor-pointer hover:bg-black hover:text-amber-100'>TALES</button>

                <button
           onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: ".end",
                ease: "power2.inOut",

              })
            }
          className='parts text-black py-3 px-2 bg-amber-100 cursor-pointer border-b border-r hover:bg-black hover:text-amber-100'>END</button>
        </div>
        
      </div>
      <Hero />
      <Fileds />
      <Nytheris />
      <Tales />
      <End/>
    </div>


  );
}
