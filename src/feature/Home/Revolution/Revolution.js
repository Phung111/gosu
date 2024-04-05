import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'

import { useState, useEffect } from 'react'

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

  const data = [
    {
      id: 1,
      title: 'we are one',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      year: '2015-2016',
      img: `bg-[url('assets/images/home/bgitnew1.png')]`,
    },
    {
      id: 2,
      title: 'one life, one dream',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      year: '2015-2016',
      img: `bg-[url('assets/images/home/bgitnew2.png')]`,
    },
    {
      id: 3,
      title: 'we share, we build up',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      year: '2015-2016',
      img: `bg-[url('assets/images/home/bgitnew3.png')]`,
    },
    {
      id: 4,
      title: 'team work makes dream works',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      year: '2015-2016',
      img: `bg-[url('assets/images/home/bgitnew4.png')]`,
    },
    {
      id: 5,
      title: 'sea to ocean',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      year: '2015-2016',
      img: `bg-[url('assets/images/home/bgitnew1.png')]`,
    },
    {
      id: 6,
      title: 'go on sea unicorn - go on space unicorn',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      year: '2015-2016',
      img: `bg-[url('assets/images/home/bgitnew2.png')]`,
    },
  ]

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
    console.log('slidesPerViewLg', slidesPerViewLg)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="container1 mt-[10%] lg:mt-[120px]">
        <div className="bg-[url('assets/images/home/bg-top-ft.jpg')] bg-[left_bottom] bg-no-repeat pb-[40%]">
          <div className="container2 relative z-10 flex flex-col">
            <div className="flex flex-col">
              <h2 className="SourceSansPro-b title text-center">OUR EVOLUTION</h2>
              <p className="text-center">Started from the bottom - Now we're here</p>
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
                {data &&
                  data.map((item) => {
                    const isFlip = selectedId === item.id
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="relative h-[313px] cursor-pointer overflow-hidden rounded-xl md:h-[558px]" onClick={() => handleFlip(item.id)}>
                          <div className={`${item.img} transiton-all backface-visibility-hidden absolute h-full w-full bg-cover duration-500 ${isFlip ? 'flip_start' : 'flip_back'}`}>
                            <div className="flex h-full flex-col items-center justify-between px-[2%] pb-[10%] pt-[25%] lg:pt-[175px]">
                              <div className="SourceSansPro-b text-center text-lg capitalize [font-size:_clamp(16px,4vw,23.5px)]">{item.title}</div>
                              <p className="SourceSansPro-b text-2xl text-white [font-size:_clamp(20px,5vw,40px)]">{item.year}</p>
                            </div>
                          </div>
                          <div className={`transiton-all backface-visibility-hidden absolute h-full w-full bg-[url('assets/images/home/bgit-hv.png')] bg-cover duration-500 ${isFlip ? 'flip_back' : 'flip_start'}`}>
                            <div className="flex h-full flex-col gap-[10%] px-[10%] pb-[10%] pt-[25%] lg:gap-[25px] lg:pt-[105px]">
                              <div className="SourceSansPro-b text-lg capitalize text-white [font-size:_clamp(16px,3vw,20px)]">{item.title}</div>
                              <p className="text-white [font-size:_clamp(16px,3vw,20px)]">{item.description}</p>
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
