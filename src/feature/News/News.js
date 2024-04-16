import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import Slogan from './Slogan/Slogan'
import Body from './Body/Body'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getPosts, getCategories, setSlug, setShow, getPostDetail } from 'service/baseSlice'
import { useLocation } from 'react-router-dom'

export default function News() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const urlPathname = location.pathname
    const regex = /\/news\/([^\/]+)\/([^\/]+)$/
    const match = urlPathname.match(regex)
    dispatch(setShow())
    dispatch(setSlug(match ? match[1] : 'all'))
    dispatch(getCategories())
    dispatch(getPosts())
  }, [])

  useEffect(() => {
    const urlPathname = location.pathname
    const regex = /\/news\/([^\/]+)\/([^\/]+)$/
    const match = urlPathname.match(regex)
    if (match && match[2]) {
      dispatch(getPostDetail(match[2]))
    }
  }, [location])

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
