import { useSelector } from 'react-redux'

export default function PartMb({ item, index, isSelected, handleClick }) {
  const language = useSelector((state) => state.baseSlice.language)
  return (
    <>
      <div className={`group relative cursor-pointer overflow-hidden bg-cover bg-center px-[10px] py-[30px] `} onClick={() => handleClick(index)} style={{ backgroundImage: `url(${require(`assets/images${item.bg}`)})` }}>
        {isSelected && <div className="absolute left-0 top-0 h-full w-full bg-black/50"></div>}
        <div className="relative flex h-full w-full justify-center">
          <div className="absolute top-0 flex h-full w-full items-start justify-end">
            <div className="flex aspect-square w-[30px] items-center justify-center rounded-full border border-white">
              <i className={`fa-solid fa-plus text-white ${isSelected ? '!hidden' : '!block'}`}></i>
              <i className={`fa-solid fa-minus text-white ${isSelected ? '!block' : '!hidden'}`}></i>
            </div>
          </div>
          <p className={`SourceSansPro-b ${isSelected ? 'hidden' : 'block'} rounded bg-black/50 px-3.5 py-[1px] uppercase text-white transition-all duration-500 [font-size:_clamp(16px,4vw,25px)] group-hover:tracking-widest`}>{window.extractModifiedString(item.title, language)}</p>
          <div className={`animate__animated ${isSelected ? 'animate__fadeInUp flex ' : 'hidden'} h-full w-full flex-col gap-[15px] `}>
            <p className="SourceSansPro-b text-center uppercase text-white [font-size:_clamp(20px,4vw,40px)]">{window.extractModifiedString(item.title, language)}</p>
            <div className="text-justify text-white [font-size:_clamp(11px,3vw,17.5px)]" dangerouslySetInnerHTML={{ __html: window.extractModifiedString(item.content, language) }} />
          </div>
        </div>
      </div>
    </>
  )
}
