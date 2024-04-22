import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'

import img1 from 'assets/images/life/bg-ithwh1.png'
import img1hv from 'assets/images/life/bg-ithwh1-hv.png'
import img2 from 'assets/images/life/bg-ithwh2.png'
import img2hv from 'assets/images/life/bg-ithwh2-hv.png'
import img3 from 'assets/images/life/bg-ithwh3.png'
import img3hv from 'assets/images/life/bg-ithwh3-hv.png'

import Part from './Part'

export default function Hire() {
  const swiperRef = useRef(null)
  useEffect(() => {
    const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet')

    paginationBullets.forEach((el) => {
      el.addEventListener('mouseover', () => {
        el.click()
      })
    })

    return () => {
      paginationBullets.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          el.click()
        })
      })
    }
  }, [])

  return (
    <>
      <div className="container3 mt-[8%] lg:mt-[80px]">
        <div className="flex h-full w-full flex-col gap-[5%] lg:gap-[70px]">
          <h2 className="SourceSansPro-b title text-center">HOW WE HIRE</h2>
          <div className="swiper-custom-pagination flex"></div>
        </div>
      </div>
      <div className="bg-[#333] pb-[15%] pt-[10%] lg:pb-[150px] lg:pt-[130px]">
        <div className="container3">
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{
                el: '.swiper-custom-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  const slides = [
                    { imgSrc: img1, imgHvSrc: img1hv, title: 'ready' },
                    { imgSrc: img2, imgHvSrc: img2hv, title: 'set' },
                    { imgSrc: img3, imgHvSrc: img3hv, title: 'game on' },
                  ]

                  const { imgSrc, imgHvSrc, title } = slides[index] || { imgSrc: '', imgHvSrc: '', title: '' }

                  return `<div class="${className} bullet_cover" data-index="${index}>
                        <div class="bullet_content">
                          <img src="${imgSrc}" alt="bg-ithwh1" class="bullet_img" />
                          <img src="${imgHvSrc}" alt="bg-ithwh1" class="bullet_img_hv" />
                          <div class="bullet_title">${title}</div>
                        </div>
                      </div>`
                },
              }}
            >
              <SwiperSlide>
                <div className="relative flex justify-between">
                  <div className="absolute top-4 z-[-1] h-1 w-full bg-[#4e4e51]"></div>
                  <Part>ready</Part>
                  <Part>check requirement</Part>
                  <Part>update cv</Part>
                  <Part>apply</Part>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative flex justify-between">
                  <div className="absolute top-4 z-[-1] h-1 w-full bg-[#4e4e51]"></div>
                  <Part>informative phone call</Part>
                  <Part>receive invitation</Part>
                  <Part>get ready</Part>
                  <Part>f2f interview</Part>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative flex justify-between">
                  <div className="absolute top-4 z-[-1] h-1 w-full bg-[#4e4e51]"></div>
                  <Part>accept offer</Part>
                  <Part>prepare profile</Part>
                  <Part>welcome onboard</Part>
                  <Part>game on</Part>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
