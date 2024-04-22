import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import Slogan from './Slogan/Slogan'
import Body from './Body/Body'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getPosts, getCategories, setSlug, setShow, getPostDetail, setLimit, setOffset } from 'service/baseSlice'
import { useLocation } from 'react-router-dom'

export default function News() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const urlPathname = location.pathname
    const regex = /\/news\/([^\/]+)\/([^\/]+)$/
    const match = urlPathname.match(regex)
    dispatch(setShow(true))
    dispatch(setSlug(match ? match[1] : 'all'))
    dispatch(setLimit('4'))
    dispatch(setOffset('0'))
    dispatch(getCategories())
    dispatch(getPosts())
  }, [])

  useEffect(() => {
    const urlHash = location.hash
    console.log('match', match)
    const regex = /\/news\/([^\/]+)\/([^\/]+)$/
    const match = urlHash.match(regex)
    console.log('match', match)
    if (match && match[2]) {
      dispatch(getPostDetail(match[2]))
    }
  }, [location.hash])

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
