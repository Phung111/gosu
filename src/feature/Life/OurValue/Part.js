import { useSelector } from 'react-redux'

export default function Part({ item, isSelected, handleClick, index, className }) {
  const language = useSelector((state) => state.baseSlice.language)

  return (
    // <div className={`img_pick ${className} group ${isSelected ? 'grow-[2] bg-black/50' : 'grow'} h-full cursor-pointer overflow-hidden transition-all duration-500`} onClick={() => handleClick(index)}>
    <div className={`img_pick ${className} group h-full grow cursor-pointer overflow-hidden transition-all duration-500`} onClick={() => handleClick(index)}>
      <div className="relative h-full w-full">
        <div className="absolute flex h-full w-full items-center justify-center">
          <p className={`SourceSansPro-b ${isSelected ? 'hidden' : 'block'} rounded bg-black/50 px-3.5 py-[1px] uppercase text-white transition-all duration-500 [font-size:_clamp(16px,4vw,25px)] group-hover:tracking-widest`}>{window.extractModifiedString(item.title, language)}</p>
          <div className={`animate__animated ${isSelected ? 'animate__fadeInUp flex' : 'hidden'} flex w-full translate-y-[400%] flex-col items-center gap-[5%]`}>
            <p className="SourceSansPro-b uppercase text-white [font-size:_clamp(20px,4vw,40px)]">{window.extractModifiedString(item.title, language)}</p>
            <div className="flex w-full px-[5%]">
              <div className="text-justify text-white [font-size:_clamp(11px,3vw,17.5px)]" dangerouslySetInnerHTML={{ __html: window.extractModifiedString(item.content, language) }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
