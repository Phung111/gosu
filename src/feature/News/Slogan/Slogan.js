import { useDispatch, useSelector } from 'react-redux'

export default function Slogan() {
  const data = useSelector((state) => state.baseSlice)
  const language = data.language
  return (
    <>
      <div className="flex h-[350px] items-center justify-center bg-[url('assets/images/news/bg-topnews.jpg')] bg-center">
        <p className="SourceSansPro-b text-white [font-size:_clamp(20px,6vw,50px)]">{language.en ? 'GOSU NEWS' : 'ព័ត៌មាន GOSU'}</p>
      </div>
    </>
  )
}
