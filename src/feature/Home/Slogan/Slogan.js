import Gosu from './Gosu'
import React, { useState, useEffect } from 'react'

export default function Slogan() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="mt-[60px] bg-[url('assets/images/home/bg-slhome.jpg')] bg-cover bg-center bg-no-repeat lg:mt-0 lg:h-[675px]">
        <div className="-lg:container2 relative mx-auto h-full lg:max-w-[1650px]">
          <div className="flex h-full w-full items-center justify-center lg:justify-end lg:gap-[10%]">
            <img className="relative top-[30px] w-[25vw] max-w-[306px] lg:top-[5%]" src={require(`assets/images/home/img-linhvat.png`)} alt="linh vat" />
            <div className="flex shrink-0 flex-col">
              <p className="GOSU">
                <span className="GOSUa">G</span>
                <span className="GOSUb">ROUND</span>
              </p>
              <p className="GOSU">
                <span className="GOSUa">O</span>
                <span className="GOSUb">PEN</span>
              </p>
              <p className="GOSU">
                <span className="GOSUa">S</span>
                <span className="GOSUb">TABILIZATION</span>
              </p>
              <p className="GOSU">
                <span className="GOSUa">U</span>
                <span className="GOSUb">NITY</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
