import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'

import { useState, useEffect } from 'react'

export default function Feature() {
  const data = [
    {
      id: 1,
      title: 'Cuu am chan kinh 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/nkvs2.jpg'),
      img: `bg-[url('assets/images/home/nkvs2.jpg')]`,
    },
    {
      id: 2,
      title: 'Cuu am chan kinh 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/nkvs.jpg'),
      img: `bg-[url('assets/images/home/nkvs.jpg')]`,
    },
    {
      id: 3,
      title: 'Cuu am chan kinh 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/nkvs2.jpg'),
      img: `bg-[url('assets/images/home/nkvs2.jpg')]`,
    },
    {
      id: 4,
      title: 'Cuu am chan kinh 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/dinhphong3q.jpg'),
      img: `bg-[url('assets/images/home/dinhphong3q.jpg')]`,
    },
    {
      id: 5,
      title: 'Cuu am chan kinh 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/cack_pc.jpg'),
      img: `bg-[url('assets/images/home/cack_pc.jpg')]`,
    },
    {
      id: 6,
      title: 'Cuu am chan kinh 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/cack_mobile.jpg'),
      img: `bg-[url('assets/images/home/cack_mobile.jpg')]`,
    },
  ]
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
    console.log('slidesPerViewLg', slidesPerViewLg)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="container1">
        <div className="features bg-[url('assets/images/home/bg-fg.jpg')] bg-cover bg-center">
          <div className="-md:container2 relative mx-auto flex w-[90%] -translate-y-[20%] flex-col 2xl:max-w-[1360px]">
            <h2 className="SourceSansPro-b title text-center">FEATURED GAME</h2>
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
                {data &&
                  data.map((item) => {
                    const titleOut = selectedId === item.id ? 'animate__fadeOutDown' : 'animate__fadeInUp'
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="group relative h-[313px] cursor-pointer overflow-hidden rounded-xl bg-center transition-all md:h-[560px]" onMouseEnter={() => handleHover(item.id)}>
                          <div className="absolute z-[-1] h-full w-full">
                            <img src={item.imageUrl} alt="feature game" className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[105%]" />
                          </div>
                          <div className="flex h-full flex-col bg-[url('assets/images/home/bg-left-it.png')] bg-cover bg-center px-[5%] py-[5%] group-hover:bg-black/50 lg:pb-[10%] lg:pt-[10%]">
                            <div className="relative flex h-full w-full justify-center">
                              <p className={`SourceSansPro-b animate__animated shrink-0 ${titleOut} line-clamp-1 uppercase text-white [font-size:_clamp(16px,6vw,30px)] [writing-mode:vertical-rl]`}>ngao kiem vo song</p>
                              <div className="flex flex-col gap-[10px] opacity-0 transition duration-500 group-hover:opacity-100">
                                <p className="SourceSansPro-b uppercase leading-[1.1] text-white [font-size:_clamp(13px,4vw,25px)]">{item.title}</p>
                                <p className="text-white">{item.description}</p>
                              </div>
                              <div className="absolute flex h-full w-full items-end">
                                <button className="SourceSansPro-b w-full rounded-xl bg-black/50 py-[4%] text-center  text-white transition duration-500 [font-size:_clamp(14px,3vw,20px)] hover:bg-primary">Official site</button>
                              </div>
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
              <button className="SourceSansPro-b h-[50px] w-[280px] rounded border border-white bg-none capitalize text-white transition duration-500 [font-size:_clamp(14px,4vw,20px)] hover:bg-white hover:text-primary ">our pride & joy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
