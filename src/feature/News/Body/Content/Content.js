import Show from './Show/Show'
import Info from './Info/Info'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShow } from 'service/baseSlice'

export default function Content() {
  const dispatch = useDispatch()
  const location = useLocation()
  const data = useSelector((state) => state.baseSlice)
  const isShow = data.isShow

  useEffect(() => {
    const urlPathname = location.pathname
    const regex = /news\/([^\/]+)\/([^\/]+)/
    const match = urlPathname.match(regex)
    const matchedType = match && match[2]
    if (matchedType != null) {
      if (matchedType.length <= 0) {
        dispatch(setShow(true))
      } else {
        dispatch(setShow(false))
      }
    } else {
      dispatch(setShow(true))
    }
  }, [location])

  return <>{isShow ? <Show /> : <Info />}</>
}
