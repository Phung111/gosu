import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import { Link } from 'react-router-dom'

export default function Verse() {
  const data = useSelector((state) => state.baseSlice)
  const language = data.language
  const world = data.world
  const worlds = world[0].data.content

  const [swiperKey, setSwiperKey] = useState(false)

  useEffect(() => {
    setSwiperKey(!swiperKey)
  }, [language])

  return (
    <>
      <div className="mx-auto my-[45px] max-w-[1360px]">
        <div className="flex flex-col">
          <h2 className="text-center [font-size:_clamp(30px,6vw,60px)]">
            <span className="SourceSansPro-b">GOSU</span>verse
          </h2>
          <Swiper
            key={swiperKey}
            className="h-full w-full"
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            pagination={{
              el: '.swiper-custom-pagination2',
              clickable: true,
              renderBullet: function (index, className) {
                const verse = worlds[index] || {}
                const { title, content } = verse
                return `
                      <div class="${className} pagination_verse">
                        <div class="pagination_verse_head">
                          <p class="pagination_verse_title">${window.extractModifiedString(title, language)}</p>
                          <div class="pagination_verse_bar"></div>
                        </div>
                        <p class="pagination_verse_content">${window.extractModifiedString(content, language)}</p>
                      </div>
                    `
              },
            }}
          >
            {worlds &&
              worlds.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={require(`assets/images/uploads/settings/world/bw${index + 1}.png`)} alt="" />
                  </SwiperSlide>
                )
              })}
          </Swiper>
          <div className="swiper-custom-pagination2 pagination_verse_grid"></div>
        </div>
      </div>
    </>
  )
}
