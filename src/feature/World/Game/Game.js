import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import { Link } from 'react-router-dom'

export default function Game() {
  const data = useSelector((state) => state.baseSlice)
  const language = data.language
  const allGames = data.allGames

  return (
    <>
      <div className="bg-[#EEEEEE] pb-[20px] lg:pr-[60px]">
        <div className="flex flex-col gap-5">
          <Swiper
            className="h-full w-full"
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            pagination={{
              el: '.swiper-custom-pagination1',
              clickable: true,
              renderBullet: function (index, className) {
                const game = allGames[index] || {}
                const { icon_img } = game
                return `
                    <div class="${className} pagination_world_game">
                      <img class="" src=${require(`assets/images${icon_img}`)} alt="pagination" />
                    </div>
                    `
              },
            }}
          >
            {allGames &&
              allGames.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={item.link_trailer} target="_blank" className="group absolute left-[45%] top-[25%] z-40 flex h-[55px] w-[10vw] cursor-pointer items-center justify-center rounded-2xl bg-[#282828] transition-all duration-1000 lg:left-[45%] lg:top-[45%]">
                      <i className="fa-solid fa-play text-white transition-all duration-500 group-hover:scale-95 group-hover:text-primary"></i>
                    </Link>
                    <div className="relative right-0 top-0 w-full  lg:h-[580px] lg:w-[60%]">
                      <img className="absolute bottom-0 h-[55%] w-full rounded-br-xl rounded-tr-xl" src={require('assets/images/home/bg-fg.jpg')} alt="bg" />
                      <img className="animation_world_game relative z-10 h-full object-cover opacity-95 lg:max-w-[1240px] 2xl:object-contain -lg:w-full" src={require(`assets/images${item.art_img}`)} alt="bg" />
                    </div>
                    <div className="animation_world_des relative right-0 top-0 z-30 w-full lg:absolute  lg:h-[400px] lg:h-full lg:w-[500px]">
                      <div className="flex h-full w-full flex-col bg-none py-[3%] lg:pt-[100px] -lg:px-2.5">
                        <p className="SourceSansPro-b bg-none text-right leading-[1] [font-size:_clamp(20px,5vw,50px)]">{window.extractModifiedString(item.name, language)}</p>
                        <p className="text-right [font-size:_clamp(16px,5vw,30px)]">{window.extractModifiedString(item.slogan, language)}</p>
                        <p className="text-right text-[20px]">{window.extractModifiedString(item.des, language)}</p>
                        <p className="text-right text-[20px] font-bold">Avaiable at</p>
                        <div className="flex justify-end gap-1">
                          <img className="h-[20px] w-[30px]" src={require(`assets/images/world/malaysia.jpg`)} alt="flag" />
                          <img className="h-[20px] w-[30px]" src={require(`assets/images/world/cambodia.jpg`)} alt="flag" />
                          <img className="h-[20px] w-[30px]" src={require(`assets/images/world/us.jpg`)} alt="flag" />
                          <img className="h-[20px] w-[30px]" src={require(`assets/images/world/china.jpg`)} alt="flag" />
                          <img className="h-[20px] w-[30px]" src={require(`assets/images/world/vietnam.jpg`)} alt="flag" />
                        </div>
                        <div className="mt-5 flex justify-end gap-[30px]">
                          <Link to={item.link_home} target="_blank" className="SourceSansPro-b flex h-[48px] w-[150px] items-center justify-center rounded-md border border-black/10 text-[20px] transition-all duration-300 hover:bg-primary hover:text-white lg:w-[300px]">
                            Official Site
                          </Link>
                          <Link to={item.link_fb} target="_blank" className="flex h-full items-center">
                            <img src={require(`assets/images/world/fb-black.png`)} alt="fb" />
                          </Link>
                          <Link to={item.link_yt} target="_blank" className="flex h-full items-center">
                            <img src={require(`assets/images/world/youtube-black.png`)} alt="ytb" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
          <div className="swiper-custom-pagination1 flex justify-center gap-2"></div>
        </div>
      </div>
    </>
  )
}
