import Part from './Part'
import PartMb from './PartMb'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'

export default function OurValue() {
  const data = useSelector((state) => state.baseSlice)
  const life = data.life
  const arrays = life[0].data.content
  const bgMain = life[0].data.main_bg

  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (index) => {
    const pick = $(`.img_pick_${index}`)
    const bg = $(`.img_life_${index}`)
    const main = $(`.img_life_main`)
    if (pick.hasClass('active')) {
      setCurrentIndex(null)
      pick.toggleClass('active')
      bg.toggleClass('active')

      main.addClass('active')
      setTimeout(() => {
        bg.toggleClass('previous')
        main.addClass('previous')
      }, 2000)
    } else {
      setCurrentIndex(index)
      $('.img_pick').removeClass('active')
      pick.addClass('active')
      $('.img_life').removeClass('active')
      bg.addClass('active')
      setTimeout(() => {
        $('.img_life').removeClass('previous')
        bg.addClass('previous')
      }, 2000)
    }
  }

  const handleClickMobile = (index) => {
    if (currentIndex === index) {
      setCurrentIndex(null)
    } else {
      setCurrentIndex(index)
    }
  }

  return (
    <>
      <div className={`relative hidden h-[100vh] min-h-[800px] w-full overflow-hidden bg-cover bg-center bg-no-repeat lg:block`}>
        <div className="relative flex h-full w-full bg-[#2B2A29]">
          {arrays && arrays.map((item, index) => <div className={`img_life img_life_${index}`} style={{ backgroundImage: `url(${require(`assets/images${item.bg}`)})` }} key={index} />)}
          <div className="bgbg img_life img_life_main active previous" style={{ backgroundImage: `url(${require(`assets/images${bgMain}`)})` }}></div>
        </div>
        <div className=" absolute left-0 top-0 z-10 flex h-full w-full divide-x-[0.5px] divide-white/40">{arrays && arrays.map((item, index) => <Part className={`img_pick_${index}`} key={index} item={item} index={index} isSelected={currentIndex === index} handleClick={handleClick} />)}</div>
      </div>
      <div className="relative mt-[60px] block lg:hidden">
        <div className="flex flex-col gap-1 bg-[#2B2A29]">{arrays && arrays.map((item, index) => <PartMb key={index} item={item} index={index} isSelected={currentIndex === index} handleClick={handleClickMobile}></PartMb>)}</div>
      </div>
    </>
  )
}
