import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentImage } from 'service/baseSlice'

export default function Image() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.baseSlice.data.product)
  const currentImage = useSelector((state) => state.baseSlice.data.currentImage)

  const colors = product.colors
  const otherImgs = product.otherImgs
  const nocolors = product.nocolors

  const handleSlideClick = (image) => {
    dispatch(setCurrentImage(image))
  }

  const [canPrevious, setCanPrevious] = useState(false)
  const [canNext, setCanNext] = useState(true)

  return (
    <>
      <div className="flex w-full shrink-0 flex-col gap-3 sm:w-[550px]">
        {colors && <img width={600} height={600} src={require(`assets/images/sp/${currentImage}.png`)} className="aspect-square h-full w-full bg-gray object-contain" />}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            slidesPerView={5}
            spaceBetween={12}
            className="h-full w-full"
            onSlideChange={(swiper) => {
              setCanPrevious(swiper.activeIndex !== 0)
              setCanNext(swiper.isEnd ? false : true)
            }}
          >
            {colors &&
              colors.map((item, index) => (
                <SwiperSlide key={index} onClick={() => handleSlideClick(item.img)}>
                  <img src={require(`assets/images/sp/${item.img}.png`)} className="aspect-square w-[94px] cursor-pointer bg-gray object-contain hover:bg-black/20" />
                </SwiperSlide>
              ))}
            {nocolors &&
              nocolors.map((item, index) => (
                <SwiperSlide key={index} onClick={() => handleSlideClick(item)}>
                  <img src={require(`assets/images/sp/${item}.png`)} className="aspect-square w-[94px] cursor-pointer bg-gray object-contain hover:bg-black/20" />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="absolute left-0 top-0 flex h-full w-full items-center">
            <div className="flex w-full justify-between">
              <button className={`swiper-button-prev-custom relative z-30 w-5 -translate-x-4 sm:w-10 ${!canPrevious ? 'opacity-50' : 'opacity-100'}`}>
                <img src={require(`assets/images/button_prev.png`)} alt="button_prev" className="object-contain" />
              </button>
              <button className={`swiper-button-next-custom relative z-30 w-5 translate-x-4 sm:w-10 ${!canNext ? 'opacity-50' : 'opacity-100'}`}>
                <img src={require(`assets/images/button_next.png`)} alt="button_next" className="object-contain" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
