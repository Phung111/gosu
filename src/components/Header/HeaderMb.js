import { Link, useLocation } from 'react-router-dom'
export default function HeaderMb() {
  const location = useLocation()

  const links = [
    { text: 'we are gosu', url: '/' },
    { text: 'life at gosu', url: '/life' },
    { text: 'gosu world', url: '/world' },
    { text: 'gosu news', url: '/news' },
  ]

  return (
    <>
      <div className="h-screen w-screen bg-black/60">
        <div className="flex flex-col items-center pt-[60px]">
          {links.map((item, index) => (
            <Link key={index} to={item.url} className="flex h-11 w-full items-center justify-center border-b border-white/50">
              <p className={`SourceSansPro-b trasition text-[15px] uppercase duration-300 ${location.pathname === item.url ? 'text-primary' : 'text-white'} hover:text-primary`}>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
