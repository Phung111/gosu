import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

export default function Feature() {
  const [selectedId, setSelectedId] = useState(null)
  const [slidesPerViewLg, setSlidesPerViewLg] = useState(3)
  const [spaceBet, setSpacebet] = useState(70)
  const swipreBtnClass = `relative z-30 h-[60px] lg:h-[120px] w-[20px] lg:w-[54px] flex items-center justify-center bg-[#f2f2f2] shadow-md sm:transition sm:hover:scale-125 `

  const handleHover = (id) => {
    if (selectedId === id) {
      setSelectedId(null)
    } else {
      setSelectedId(id)
    }
  }

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth
      if (screenWidth >= 1024) {
        setSpacebet(70)
      } else if (screenWidth > 768) {
        setSlidesPerViewLg(3)
        setSpacebet(24)
      } else if (screenWidth > 420) {
        setSlidesPerViewLg(2)
        setSpacebet(12)
      } else {
        setSlidesPerViewLg(1)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const home = useSelector((state) => state.baseSlice.home)
  const language = useSelector((state) => state.baseSlice.language)
  const allGames = useSelector((state) => state.baseSlice.allGames)

  return (
    <>
      <div className="container1">
        <div className="features bg-[url('assets/images/home/bg-fg.jpg')] bg-cover bg-center">
          <div className="-md:container2 relative mx-auto flex w-[90%] -translate-y-[20%] flex-col 2xl:max-w-[1360px]">
            <h2 className="SourceSansPro-b title text-center">{window.extractModifiedString(home[3].data.main_title, language)}</h2>
            <div className="relative mt-[10%] h-full w-full lg:mt-[50px]">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '.swiper-button-prev-custom2',
                  nextEl: '.swiper-button-next-custom2',
                }}
                slidesPerView={slidesPerViewLg}
                spaceBetween={spaceBet}
                loop={true}
              >
                {allGames &&
                  allGames.map((item) => {
                    const titleOut = selectedId === item.id ? 'animate__fadeOutDown' : 'animate__fadeInUp'
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="group relative h-[313px] cursor-pointer overflow-hidden rounded-xl bg-center transition-all hover:bg-black/50 md:h-[560px]" onMouseEnter={() => handleHover(item.id)}>
                          <div className="absolute z-[-1] h-full w-full">
                            <img src={require(`assets/images/home/game-${item.id}.jpg`)} alt="feature game" className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[105%]" />
                          </div>
                          <div className={`relative flex h-full flex-col  px-[5%] py-[5%] lg:pb-[10%] lg:pt-[10%]`}>
                            <img className="absolute left-0 top-0 h-full w-full object-cover" src={require(`assets/images/home/bg-left-it.png`)} alt="game" />
                            <div className="relative flex h-full w-full justify-center ">
                              <p className={`SourceSansPro-b animate__animated shrink-0 ${titleOut} line-clamp-1 uppercase text-white [font-size:_clamp(16px,6vw,30px)] [writing-mode:vertical-rl]`}>{window.extractModifiedString(item.name, language)}</p>
                              <div className="flex flex-col gap-[10px] opacity-0 transition duration-500 group-hover:opacity-100">
                                <p className="SourceSansPro-b uppercase leading-[1.1] text-white [font-size:_clamp(13px,4vw,25px)]">{window.extractModifiedString(item.name, language)}</p>
                                <p className="text-white">{window.extractModifiedString(item.des, language)}</p>
                              </div>
                              <Link to={item.link_home} target="_blank" className="absolute flex h-full w-full items-end">
                                <button className="SourceSansPro-b w-full rounded-xl bg-black/50 py-[4%] text-center  text-white transition duration-500 [font-size:_clamp(14px,3vw,20px)] hover:bg-primary">{window.extractModifiedString(home[3].data.official_site_text, language)}</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
              <div className="absolute left-0 top-0 flex h-full w-full items-center">
                <div className="flex w-full justify-between">
                  <button className={`swiper-button-prev-custom2 -translate-x-[50%] rounded-bl-xl rounded-tl-xl sm:-translate-x-[150%] lg:-translate-x-[50%] ${swipreBtnClass}`}>
                    <img src={require(`assets/images/home/prev.png`)} alt="button_prev" className="object-contain" />
                  </button>
                  <button className={`swiper-button-next-custom2 translate-x-[50%] rounded-br-xl rounded-tr-xl sm:translate-x-[150%] lg:translate-x-[50%] ${swipreBtnClass}`}>
                    <img src={require(`assets/images/home/next.png`)} alt="button_next" className="object-contain" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[5%] flex justify-center lg:mt-[50px]">
              <button className="SourceSansPro-b h-[50px] w-[280px] rounded border border-white bg-none capitalize text-white transition duration-500 [font-size:_clamp(14px,4vw,20px)] hover:bg-white hover:text-primary ">{window.extractModifiedString(home[3].data.world_page_text, language)}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
