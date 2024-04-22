import { useSelector } from 'react-redux'

export default function Slogan() {
  const data = useSelector((state) => state.baseSlice)
  const language = data.language
  return (
    <>
      <div className="relative h-[200px] bg-[url('assets/images/world/bg-worldtop.png')] bg-[center_top] md:h-[260px] lg:h-[350px]">
        <div className="flex h-full w-full items-center justify-center">
          <p className="SourceSansPro-b text-white [font-size:_clamp(20px,6vw,55px)]">{language.en ? 'GOSU WORLD' : 'GOSU ពិភពលោក'}</p>
        </div>
      </div>
    </>
  )
}
