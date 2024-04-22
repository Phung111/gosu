import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function HeaderMb() {
  const location = useLocation()

  const data = useSelector((state) => state.baseSlice)
  const language = data.language

  const links = [
    { text: 'we are gosu', khome: 'យើងគឺជា GOSU', url: '/' },
    { text: 'life at gosu', khome: 'ជីវិតនៅ GOSU', url: '/life' },
    { text: 'gosu world', khome: 'GOSU ពិភពលោក', url: '/world' },
    { text: 'gosu news', khome: 'ព័ត៌មាន GOSU', url: '/news' },
  ]

  return (
    <>
      <div className="h-screen w-screen bg-black/60">
        <div className="flex flex-col items-center pt-[60px]">
          {links.map((item, index) => (
            <Link key={index} to={item.url} className="flex h-11 w-full items-center justify-center border-b border-white/50">
              <p className={`SourceSansPro-b trasition text-[15px] uppercase duration-300 ${location.pathname === item.url ? 'text-primary' : 'text-white'} hover:text-primary`}>{language.en == true ? item.text : item.khome}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
