import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Revolution() {
  const [canPrevious, setCanPrevious] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [slidesPerViewLg, setSlidesPerViewLg] = useState(4)

  const [selectedId, setSelectedId] = useState(null)
  const [isFlipped, setIsFlipped] = useState({})

  const handleFlip = (id) => {
    if (selectedId === id) {
      setSelectedId(null)
      setIsFlipped(false)
    } else {
      setSelectedId(id)
      setIsFlipped(!isFlipped)
    }
  }

  const swipreBtnClass = `relative z-30 h-[60px] lg:h-[120px] w-[20px] lg:w-[54px] flex items-center justify-center bg-[#f2f2f2] shadow-md sm:transition sm:hover:scale-125 `

  const home = useSelector((state) => state.baseSlice.home)
  const language = useSelector((state) => state.baseSlice.language)

  const mang = home[2].data.content

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth

      if (screenWidth >= 1024) {
        setSlidesPerViewLg(4)
      } else if (screenWidth > 768) {
        setSlidesPerViewLg(3)
      } else if (screenWidth > 420) {
        setSlidesPerViewLg(2)
      } else {
        setSlidesPerViewLg(1)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="container1 mt-[10%] lg:mt-[120px]">
        <div className="bg-[url('assets/images/home/bg-top-ft.jpg')] bg-[left_bottom] bg-no-repeat pb-[40%]">
          <div className="container2 relative z-10 flex flex-col">
            <div className="flex flex-col">
              <h2 className="SourceSansPro-b title text-center">{window.extractModifiedString(home[2].data.main_title, language)}</h2>
              <p className="text-center">{window.extractModifiedString(home[2].data.sub_title, language)}</p>
            </div>
            <div className="relative mt-[10%] h-full w-full lg:mt-[50px]">
              <Swiper
                onSlideChange={(swiper) => {
                  setCanPrevious(swiper.activeIndex !== 0)
                  setCanNext(swiper.isEnd ? false : true)
                }}
                modules={[Navigation]}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                slidesPerView={slidesPerViewLg}
                spaceBetween={30}
              >
                {mang &&
                  mang.map((item, index) => {
                    const isFlip = selectedId === index
                    return (
                      <SwiperSlide key={index}>
                        <div className="relative h-[313px] cursor-pointer overflow-hidden rounded-xl  md:h-[558px]" onClick={() => handleFlip(index)}>
                          <div className={`transiton-all backface-visibility-hidden realtive absolute h-full w-full overflow-hidden rounded-xl bg-cover duration-500 ${isFlip ? 'flip_start' : 'flip_back'}`}>
                            <img src={require(`assets/images/home/bgitnew${index + 1}.png`)} className="absolute z-[-1] h-full w-full object-cover" />
                            <div className="flex h-full flex-col items-center justify-between px-[2%] pb-[10%] pt-[25%] lg:pt-[175px]">
                              <div className="SourceSansPro-b text-center text-lg capitalize [font-size:_clamp(16px,4vw,23.5px)]" dangerouslySetInnerHTML={{ __html: window.extractModifiedString(item.title, language) }} />
                              <p className="SourceSansPro-b text-2xl text-white [font-size:_clamp(20px,5vw,40px)]">{window.extractModifiedString(item.years, language)}</p>
                            </div>
                          </div>
                          <div className={`transiton-all backface-visibility-hidden absolute h-full w-full overflow-hidden rounded-xl bg-cover duration-500 ${isFlip ? 'flip_back' : 'flip_start'}`}>
                            <img src={require(`assets/images/home/bgit-hv.png`)} className="absolute z-[-1] h-full w-full object-cover" />
                            <div className="flex h-full flex-col gap-[10%] px-[10%] pb-[10%] pt-[25%] lg:gap-[25px] lg:pt-[105px]">
                              <div className="SourceSansPro-b text-center text-lg capitalize  text-white [font-size:_clamp(16px,3vw,20px)]" dangerouslySetInnerHTML={{ __html: window.extractModifiedString(item.title, language) }} />
                              <div className=" text-white [font-size:_clamp(16px,3vw,20px)]" dangerouslySetInnerHTML={{ __html: window.extractModifiedString(item.content, language) }} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
              <div className="absolute left-0 top-0 flex h-full w-full items-center">
                <div className="flex w-full justify-between">
                  <button className={`swiper-button-prev-custom -translate-x-[50%] rounded-bl-xl rounded-tl-xl sm:-translate-x-[150%] lg:-translate-x-[50%] ${swipreBtnClass} ${!canPrevious ? 'opacity-0' : 'opacity-100'}`}>
                    <img src={require(`assets/images/home/prev.png`)} alt="button_prev" className="object-contain" />
                  </button>
                  <button className={`swiper-button-next-custom translate-x-[50%] rounded-br-xl rounded-tr-xl sm:translate-x-[150%] lg:translate-x-[50%] ${swipreBtnClass} ${!canNext ? 'opacity-0' : 'opacity-100'}`}>
                    <img src={require(`assets/images/home/next.png`)} alt="button_next" className="object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
