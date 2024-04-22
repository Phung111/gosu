import Show from './Show/Show'
import Info from './Info/Info'
import { useSelector } from 'react-redux'

export default function Content() {
  const data = useSelector((state) => state.baseSlice)
  const isShow = data.isShow

  return <>{isShow ? <Show /> : <Info />}</>
}
