import React, { useState, useEffect } from 'react'

import HeaderPc from './HeaderPc'
import HeaderMb from './HeaderMb'

export default function Header() {
  const [isShowNavMb, setShowNavMb] = useState(false)

  return (
    <div className="header fixed top-0 z-[100] w-full flex-col bg-gradient-to-b from-black/30 to-transparent lg:flex">
      <HeaderPc isShowNavMb={isShowNavMb} setShowNavMb={setShowNavMb} />
      {isShowNavMb && <HeaderMb />}
    </div>
  )
}
