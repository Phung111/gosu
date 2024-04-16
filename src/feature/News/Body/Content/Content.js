import Show from './Show/Show'
import Info from './Info/Info'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Content() {
  const data = useSelector((state) => state.baseSlice)
  const categories = data.categories

  const location = useLocation()

  const [show, setShow] = useState(true)

  useEffect(() => {
    const urlPathname = location.pathname
    const regex = /news\/([^\/]+)\/([^\/]+)/
    const match = urlPathname.match(regex)
    const matchedType = match && match[2]
    if (matchedType != null) {
      if (matchedType.length <= 0) {
        setShow(true)
      } else {
        setShow(false)
      }
    } else {
      setShow(true)
    }
  }, [location])

  return <>{show ? <Show /> : <Info />}</>
}
