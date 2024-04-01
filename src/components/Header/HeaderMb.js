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
      <div className="h-screen w-screen bg-black/50">
        <div className="mt-[60px] flex flex-col items-center">
          {links.map((item, index) => (
            <Link key={index} to={item.url} className="flex h-11 w-full items-center justify-center border-b border-white/50">
              <p className={`text-[15px] uppercase ${item.isSelect ? 'text-primary' : 'text-white'} hover:text-primary`}>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
