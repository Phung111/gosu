import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import Slogan from './Slogan/Slogan'
import Body from './Body/Body'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts, getCategories, setSlug, setShow, getPostDetail, setLimit, setOffset } from 'service/baseSlice'
import { useLocation } from 'react-router-dom'

export default function News() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const urlPathname = location.pathname
    const regex = /news\/([^\/]+)(?:\/([^\/]+))?/
    const match = urlPathname.match(regex)
    dispatch(getCategories())
    if (match == null) {
      dispatch(setSlug('all'))
      dispatch(setLimit('4'))
      dispatch(setOffset('0'))
      dispatch(getPosts())
      dispatch(setShow(true))
    } else {
      if (match[2] != null) {
        dispatch(setSlug(match[1]))
        dispatch(getPostDetail(match[2]))
        dispatch(setShow(false))
      } else {
        dispatch(setSlug(match[1]))
        dispatch(setLimit('3'))
        dispatch(setOffset('0'))
        dispatch(getPosts())
        dispatch(setShow(true))
      }
    }
  }, [location.pathname, dispatch])

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
