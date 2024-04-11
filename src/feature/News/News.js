import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import Slogan from './Slogan/Slogan'
import Body from './Body/Body'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getPosts } from 'service/baseSlice'

export default function News() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <>
      <div id="head" />
      <Header />
      <Slogan />
      <Body />
      <Foot />
      <ToTop />
    </>
  )
}
