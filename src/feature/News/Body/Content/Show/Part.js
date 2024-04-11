import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Part({ post }) {
  const data = useSelector((state) => state.baseSlice)
  const language = data.language

  return (
    <>
      <Link className="group">
        <div className="flex flex-col gap-5">
          <div className="relative flex h-[222px] w-full">
            <img className="absolute h-full w-full rounded-xl object-cover" src={require(`assets/images/news/bg-fg.jpg`)} alt="" />
            <img className="absolute h-full w-full rounded-xl object-cover transition-all duration-500 group-hover:-translate-y-2" src={require(`assets/images/news/tpc_6740.jpg`)} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <img className="aspect-square w-6" src={require(`assets/images/news/logoG.png`)} alt="" />
              <p className="SourceSansPro-b text-[18px] text-primary">{window.extractModifiedString(post.categories[0].title, language)}</p>
              <p className="text-[18px] text-[#bfbfbf]">{window.convertDateFormat(post.created_at, language)}</p>
            </div>
            <p className="SourceSansPro-b mt-[5px] line-clamp-3 leading-[1.1] [font-size:_clamp(12px,3.5vw,20px)] lg:h-[70px]">{window.extractModifiedString(post.title, language)}</p>
            <p className="mt-[5px] line-clamp-3 leading-[1.1] [font-size:_clamp(12px,3.5vw,18px)]">{window.extractModifiedString(post.desc, language)}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
