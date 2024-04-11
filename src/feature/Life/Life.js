import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import OurValue from './OurValue/OurValue'
import Gosu from './Gosu/Gosu'
import Hire from './Hire/Hire'
import { css, keyframes } from 'styled-components'
import { useState, useEffect } from 'react'

export default function Life() {
  // const [wBurn, setWBurn] = useState(0)

  // const burnEffect = keyframes`
  //   from {
  //     background-position-x: -32768px;
  //   }
  //   to {
  //     background-position-x: 0px;
  //   }
  // `

  // const styleBurn = {
  //   position: 'absolute',
  //   top: 0,
  //   width: '1360px',
  //   height: '800px',
  //   backgroundImage: "url('assets/images/life//watercolour-sprite2.png')",
  //   backgroundSize: '2400%',
  //   backgroundPosition: 'center left',
  //   mixBlendMode: 'multiply',
  //   animation: css`
  //     ${burnEffect} 1s forwards steps(23)
  //   `,
  // }

  // useEffect(() => {
  //   const handleResize = () => {
  //     const imageBurnnElement = document.querySelector('.image_burnn')
  //     if (imageBurnnElement) {
  //       setWBurn(imageBurnnElement.clientWidth)
  //     }
  //   }

  //   handleResize() // Gọi lần đầu để cập nhật giá trị khởi đầu

  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  return (
    <>
      <div id="head" />
      <Header />
      <OurValue />
      <Gosu />
      <Hire />
      <Foot />
      <ToTop />
      {/* <div className="group relative h-[500px]">
        <div className="abc" />
        <div className="image_burnn" style={styleBurn} />
        <div className="group-hover:image_burnn absolute left-0 top-0" />
      </div> */}
    </>
  )
}
