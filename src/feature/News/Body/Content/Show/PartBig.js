import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSlug, getPostDetail } from 'service/baseSlice'

export default function PartBig({ post }) {
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
        <div className={`relative flex h-[700px] rounded-xl bg-blue/20`}>
          <img className="absolute left-0 top-0 z-[-2] h-full w-full rounded-xl object-cover" src={require(`assets/images/news/bg-fg.jpg`)} alt="bg" />
          <div className="relative flex h-full w-full items-end transition-all duration-500 group-hover:-translate-x-2">
            <img className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl object-cover " src={require(`assets/images/news/tpc_6740.jpg`)} alt="bg" />
            <div className={`flex flex-col bg-black/40 px-[4%] py-2.5 text-white`}>
              <div className="flex items-center gap-2">
                <img className="aspect-square w-6" src={require(`assets/images/news/logoG.png`)} alt="" />
                <p className="SourceSansPro-b text-[18px] text-primary">{window.extractModifiedString(post.categories[0].title, language)}</p>
                <p className="text-[18px] text-[#bfbfbf]">{window.convertDateFormat(post.created_at, language)}</p>
              </div>
              <p className={`SourceSansPro-b font_title_news mt-[5px] line-clamp-3 leading-[1.1] lg:h-[70px]`}>{window.extractModifiedString(post.title, language)}</p>
              <p className={`mt-[15px] line-clamp-3 font-medium leading-[1.1] [font-size:_clamp(12px,3.5vw,16px)]`}>{window.extractModifiedString(post.desc, language)}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
