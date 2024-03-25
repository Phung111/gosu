import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function SwiperHead({}) {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: '.button_next',
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src={require(`assets/images/next1.png`)} alt="next1" className="object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require(`assets/images/next2.png`)} alt="next2" className="object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require(`assets/images/next3.png`)} alt="next3" className="object-contain" />
        </SwiperSlide>
        <button className={`button_next absolute bottom-3 left-1/2 z-10 flex aspect-square w-8 -translate-x-1/2 sm:w-16`}>
          <img src={require(`assets/images/button_next.png`)} alt="button_next" className="object-contain" />
        </button>
      </Swiper>
    </>
  )
}
