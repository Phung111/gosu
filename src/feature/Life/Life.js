import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import OurValue from './OurValue/OurValue'
import Gosu from './Gosu/Gosu'
import Hire from './Hire/Hire'
import { css, keyframes } from 'styled-components'
import { useState, useEffect } from 'react'

export default function Life() {
  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <div className="relative">
          <div id="head" />
          <Header />
          <OurValue />
          <Gosu />
          <Hire />
          <Foot />
          <ToTop />
        </div>
      </div>
      {/* <div className="group relative h-[500px]">
        <div className="image_bg hover:image_burnn" />
      </div> */}
    </>
  )
}
