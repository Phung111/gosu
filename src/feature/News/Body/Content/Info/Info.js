import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Info() {
  const data = useSelector((state) => state.baseSlice)
  const language = data.language
  const info = data.info
  const slug = data.slug

  const [numLike, setNumLike] = useState(0)
  const [like, setLike] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    setNumLike(info.like_number)
    let key = info.slug
    const isLiked = localStorage.getItem(key)
    if (isLiked == 'liked') {
      setLike(true)
    } else {
      setLike(false)
    }
  }, [info])

  const handleLike = () => {
    let key = info.slug
    localStorage.setItem(key, 'liked')
    setNumLike(numLike + 1)
    setLike(true)
  }

  const handleCopy = () => {
    const link = inputRef.current.value

    navigator.clipboard.writeText(link)

    alert('The link has been copied')
  }

  return (
    <>
      <div className="flex flex-col gap-[15px]">
        <div className="flex justify-between">
          <button className="SourceSansPro-b flex items-center gap-1 text-[#a8a8a8] transition-all duration-500 [font-size:_clamp(12px,3.5vw,16px)] hover:tracking-[0.1em] hover:text-primary">
            <i className="fa-solid fa-chevron-left" />
            Back
          </button>
          <div className="flex items-center gap-1 text-primary">
            {numLike}
            <i className="fa-solid fa-thumbs-up" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="SourceSansPro-b mb-[0.5rem] text-justify uppercase leading-[1.2] text-primary [font-size:_clamp(20px,6vw,35px)]">{window.extractModifiedString(info.title, language)}</h1>
          <p className="mt-[20px]">{window.convertDateFormat(info.created_at)} (GMT+07:00)</p>
          <div className="mt-[35px]" dangerouslySetInnerHTML={{ __html: window.extractModifiedString(info.content, language) }} />
        </div>
        <div className="mt-[5%] flex justify-end gap-2 lg:mt-[50px]">
          <button onClick={handleLike} className={`flex items-center justify-center gap-1 rounded-full border border-[#bfbfbf] px-[15px] py-1 text-[#bfbfbf] transition-all duration-500 ${like ? 'border-primary text-primary' : 'hover:border-primary hover:text-primary'}`}>
            <i className="fa-solid fa-thumbs-up" />
            LIKE
          </button>
          <button onClick={handleCopy} className="flex items-center justify-center gap-1 rounded-full border border-[#bfbfbf] px-[15px] py-1 text-[#bfbfbf] transition-all duration-500 hover:border-primary hover:text-primary">
            <input ref={inputRef} type="text" value={info.source} style={{ display: 'none' }} readOnly />
            <i className="fa-solid fa-link" />
            COPY LINK
          </button>
        </div>
      </div>
    </>
  )
}
