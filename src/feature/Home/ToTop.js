import { Link } from 'react-scroll'
import React, { useState, useEffect } from 'react'

export default function ToTop({ footHeight }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    const handleResize = () => {
      setScreenHeight(window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div id="totop" className={`fixed bottom-[42px] right-[1%] z-50 transition-all duration-500`}>
        <div className="flex flex-col items-center gap-2">
          <img src={require(`assets/images/home/join-td.png`)} alt="join" className="w-[80px] cursor-pointer object-contain lg:w-[130px]" />
          <Link to="head" smooth={true} className={`${scrollPosition > screenHeight / 4 ? 'block' : 'hidden'} group aspect-square w-[40px] cursor-pointer rounded-full border border-[#1189FF] lg:w-[50px]`}>
            <img src={require(`assets/images/home/gotop.png`)} alt="top" className="block h-full w-full object-contain group-hover:hidden" />
            <img src={require(`assets/images/home/gotop-hv.png`)} alt="top" className="hidden h-full w-full object-contain group-hover:block" />
          </Link>
        </div>
      </div>
    </>
  )
}
