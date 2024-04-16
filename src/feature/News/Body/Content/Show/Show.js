import Part from './Part'
import PartBig from './PartBig'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMore } from 'service/baseSlice'
import React from 'react'

export default function Show() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.baseSlice)
  const posts = data.posts
  const count_all = data.count_all
  const postsLength = posts.length
  const slug = data.slug

  const [isAll, setIsAll] = useState(false)
  const [screen, setScreen] = useState(false)

  let postMain = []
  let postShows = []
  let postLoadmore = []

  if (slug == 'all') {
    postMain = posts.slice(0, 1)
    postShows = posts.slice(1, 4)
    postLoadmore = posts.slice(4)
  } else {
    postShows = posts
  }

  useEffect(() => {
    if (slug == 'all') {
      setIsAll(true)
    } else {
      setIsAll(false)
    }
  }, [slug, dispatch, posts])

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth
      if (screenWidth > 767) {
        setScreen(false)
      } else {
        setScreen(true)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="flex flex-col">
        {posts.length == 0 && <div className="flex items-center justify-center">Data not found</div>}
        {!isAll && (
          <div className="grid-cols-3 gap-6 md:grid -md:flex -md:flex-col">
            {posts.map((item, index) => (
              <React.Fragment key={index}>
                <Part post={item} key={index} />
                {index !== posts.length - 1 && <div className="line my-[0.2rem] md:hidden" />}
              </React.Fragment>
            ))}
          </div>
        )}

        {isAll && screen && (
          <div className="grid-cols-3 gap-6 md:grid -md:flex -md:flex-col">
            {posts.map((item, index) => (
              <React.Fragment key={index}>
                <Part post={item} key={index} />
                {index !== posts.length - 1 && <div className="line my-[0.2rem] md:hidden" />}
              </React.Fragment>
            ))}
          </div>
        )}

        {isAll && !screen && (
          <>
            <div className="flex flex-col gap-6">
              {postMain &&
                postMain.map((item, index) => {
                  return <PartBig post={item} key={index} main={true} />
                })}
              <div className="grid grid-cols-3 gap-6">
                {postShows &&
                  postShows.map((item, index) => {
                    return <Part post={item} key={index} />
                  })}
              </div>
            </div>

            <div className="line my-[1.5rem]" />
            {postLoadmore && (
              <div className="flex flex-col ">
                {postLoadmore.map((item, index) => (
                  <React.Fragment key={index}>
                    <Part post={item} horizone={true} />
                    {index !== postLoadmore.length - 1 && <div className="line my-[1.5rem]" />}
                  </React.Fragment>
                ))}
              </div>
            )}
          </>
        )}

        {count_all != postsLength && (
          <button
            onClick={() => {
              dispatch(loadMore())
            }}
            className={`SourceSansPro-b [font-size:_clamp(14px,4vw,20px) rounded] mx-auto mt-10 h-[50px] w-[280px] rounded border border-[6c7177] text-primary transition-all duration-500 hover:bg-primary hover:text-white`}
          >
            Load More
          </button>
        )}
      </div>
    </>
  )
}
