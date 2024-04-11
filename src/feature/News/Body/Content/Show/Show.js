import Part from './Part'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Show() {
  const data = useSelector((state) => state.baseSlice)
  const posts = data.posts
  console.log('posts', posts)

  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-6">
          {posts &&
            posts.map((item, index) => {
              return <Part post={item} />
            })}
        </div>
        <din className="line my-[1.5rem]"></din>
        <button className={`SourceSansPro-b [font-size:_clamp(14px,4vw,20px) rounded] mx-auto mt-10 h-[50px] w-[280px] rounded border border-[6c7177] text-primary transition-all duration-500 hover:bg-primary hover:text-white`}>Load More</button>
      </div>
    </>
  )
}
