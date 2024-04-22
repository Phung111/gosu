import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSlug, getPostDetail } from 'service/baseSlice'

export default function Part({ post, horizone }) {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.baseSlice)
  const language = data.language
  const stringUrl = `/news/${post.categories[0].slug}/${post.slug}`

  const handlePost = () => {
    dispatch(setSlug(post.categories[0].slug))
    dispatch(getPostDetail(post.slug))
  }

  return (
    <>
      <Link to={stringUrl} className="group" onClick={handlePost}>
        <div className={`flex ${horizone ? 'flex-row-reverse' : 'flex-col'} gap-5`}>
          <div className={`relative flex shrink-0 bg-cover bg-center md:h-[222px] lg:pt-[25%] -md:pt-[60%] ${horizone ? 'h-[275px] w-[41.66%]' : 'w-full'}`}>
            <img className="absolute left-0 top-0 h-full w-full rounded-xl object-cover" src={require(`assets/images/news/bg-fg.jpg`)} alt="" />
            <img className="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-all duration-500 group-hover:-translate-y-2" src={require(`assets/images${post.image}`)} alt="" />
          </div>
          <div className={`flex flex-col`}>
            <div className="flex items-center gap-2">
              <img className="aspect-square w-6" src={require(`assets/images/news/logoG.png`)} alt="" />
              <p className="SourceSansPro-b text-[18px] text-primary">{window.extractModifiedString(post.categories[0].title, language)}</p>
              <p className="text-[18px] text-[#bfbfbf]">{window.convertDateFormat(post.created_at)}</p>
            </div>
            <p className={`SourceSansPro-b mt-[5px] line-clamp-3 leading-[1.1] ${horizone ? '[font-size:_calc(1.325rem+0.9vw)]' : '[font-size:_clamp(12px,3.5vw,20px)] lg:h-[70px]'}`}>{window.extractModifiedString(post.title, language)}</p>
            <p className={`mt-[15px] line-clamp-3 font-medium leading-[1.1] ${horizone ? 'text-[1rem]' : '[font-size:_clamp(12px,3.5vw,18px)]'}`}>{window.extractModifiedString(post.desc, language)}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
