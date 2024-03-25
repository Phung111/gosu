import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'

import Product from 'components/Product'

export default function Products({}) {
  const products = useSelector((state) => state.baseSlice.data.products)

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '320px',
    width: '216px',
  }

  const styleMobile = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '280px',
    width: '140px',
  }

  const [canPrevious, setCanPrevious] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const swipreBtnClass = `relative z-30 h-10 w-10 rounded-full shadow-md sm:transition sm:hover:scale-150 `
  useEffect(() => {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet')

    bullets.forEach((bullet, index) => {
      bullet.style.backgroundColor = '#999999'
    })
  }, [])

  const isSM = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <>
      {!isSM && (
        <div className="relative h-full w-full">
          <Swiper
            onSlideChange={(swiper) => {
              setCanPrevious(swiper.activeIndex !== 0)
              setCanNext(swiper.isEnd ? false : true)
            }}
            modules={[Grid, Navigation, Pagination, Autoplay]}
            slidesPerView={5}
            grid={{
              fill: 'row',
              rows: 2,
            }}
            spaceBetween={30}
            slidesPerGroup={5}
            pagination={{
              el: `.swiper-custom-pagination`,
              dynamicBullets: true,
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>'
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
          >
            {products &&
              products.map((item, index) => (
                <SwiperSlide style={style} key={index}>
                  <Product product={item} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="absolute left-0 top-0 flex h-full w-full items-center">
            <div className="flex w-full justify-between">
              <button className={`swiper-button-prev-custom -translate-x-[100%] ${swipreBtnClass} ${!canPrevious ? 'opacity-0' : 'opacity-100'}`}>
                <img src={require(`assets/images/button_prev.png`)} alt="button_prev" className="object-contain" />
              </button>
              <button className={`swiper-button-next-custom translate-x-[100%] ${swipreBtnClass} ${!canNext ? 'opacity-0' : 'opacity-100'}`}>
                <img src={require(`assets/images/button_next.png`)} alt="button_next" className="object-contain" />
              </button>
            </div>
          </div>
          <div className="men_men flex h-10 w-full items-center justify-center ">
            <div className="swiper-custom-pagination flex !w-full !translate-x-0 justify-center"></div>
          </div>
        </div>
      )}
      {isSM && (
        <div className="relative h-full w-full">
          <Swiper
            onSlideChange={(swiper) => {
              setCanPrevious(swiper.activeIndex !== 0)
              setCanNext(swiper.isEnd ? false : true)
            }}
            modules={[Grid, Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            grid={{
              fill: 'row',
              rows: 2,
            }}
            spaceBetween={10}
            slidesPerGroup={2}
            pagination={{
              el: '.swiper-custom-pagination-mobile',
              type: 'custom',
              renderCustom: function (swiper, current, total) {
                return current + '/' + total
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom-mobile',
              nextEl: '.swiper-button-next-custom-mobile',
            }}
          >
            {products &&
              products.map((item, index) => (
                <SwiperSlide style={styleMobile} key={index}>
                  <Product product={item} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="absolute left-0 top-0 flex h-full w-full items-center">
            <div className="flex w-full justify-between">
              <button className={`swiper-button-prev-custom-mobile -translate-x-[100%] ${swipreBtnClass} ${!canPrevious ? 'opacity-0' : 'opacity-100'}`}>
                <img src={require(`assets/images/button_prev.png`)} alt="button_prev" className="object-contain" />
              </button>
              <button className={`swiper-button-next-custom-mobile translate-x-[100%] ${swipreBtnClass} ${!canNext ? 'opacity-0' : 'opacity-100'}`}>
                <img src={require(`assets/images/button_next.png`)} alt="button_next" className="object-contain" />
              </button>
            </div>
          </div>
          <div className="men_men flex h-10 w-full items-center justify-center">
            <div className="swiper-custom-pagination-mobile flex h-5 !w-full !translate-x-0 justify-center"></div>
          </div>
        </div>
      )}
    </>
  )
}
