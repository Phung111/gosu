import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import Slogan from './Slogan/Slogan'
import Game from './Game/Game'
import Verse from './Verse/Verse'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function World() {
  const data = useSelector((state) => state.baseSlice)
  const allGames = data.allGames

  const imgpart = allGames[0].art_img
  const imgpart2 = allGames[0].icon_img

  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <div className="relative">
          <div id="head" />
          <Header />
          <Slogan />
          <Game />
          <Verse />
          <Foot />
          <ToTop />
        </div>
      </div>
    </>
  )
}
