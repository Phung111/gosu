import { Link } from 'react-router-dom'
export default function HeaderMb() {
  const links = [
    { text: 'we are gosu', url: '/#', isSelect: true },
    { text: 'life at gosu', url: '/life', isSelect: false },
    { text: 'gosu world', url: '/#', isSelect: false },
    { text: 'gosu news', url: '/#', isSelect: false },
  ]

  return (
    <>
      <div className="h-screen w-screen bg-black/60">
        <div className="flex flex-col items-center pt-[60px]">
          {links.map((item, index) => (
            <Link key={index} to={item.url} className="flex h-11 w-full items-center justify-center border-b border-white/50">
              <p className={`SourceSansPro-b trasition text-[15px] uppercase duration-300 ${item.isSelect ? 'text-primary' : 'text-white'} hover:text-primary`}>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
