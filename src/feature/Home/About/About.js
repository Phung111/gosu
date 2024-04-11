import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function About() {
  const [selectedId, setSelectedId] = useState(null)
  const [isRolledForward, setIsRolledForward] = useState(false)
  const [mang, setMang] = useState([])

  const handleClick = (id) => {
    if (selectedId === id) {
      setSelectedId(null)
      setIsRolledForward(false)
    } else {
      setSelectedId(id)
      setIsRolledForward(!isRolledForward)
    }
  }

  const home = useSelector((state) => state.baseSlice.home)
  const language = useSelector((state) => state.baseSlice.language)

  useEffect(() => {
    let mangTemp = []
    mangTemp.push(home[1].data.vision)
    mangTemp.push(home[1].data.mission)
    mangTemp.push(home[1].data.action_principle)
    setMang(mangTemp)
  }, [home])

  return (
    <>
      <div className="bg-white bg-cover bg-[center_top_0] bg-no-repeat lg:bg-[url('assets/images/home/bg-top-abhome.jpg')]">
        <div className="container2 relative z-10 flex flex-col pt-[10%] lg:pt-[150px]">
          <h2 className="SourceSansPro-b title text-center uppercase">{window.extractModifiedString(home[1].data.main_title, language)}</h2>
          <div className="mt-[5%] flex flex-col justify-between gap-2.5 md:flex-row md:gap-[25px] lg:mt-[60px] lg:gap-10">
            {mang &&
              mang.map((item, index) => {
                const isSelected = selectedId === index
                const animationClass = selectedId === index ? 'animate__fadeInUp' : 'animate__fadeOutDown'
                const titleOut = selectedId === index ? 'animate__fadeOutRight' : 'animate__fadeInRight'
                const imgRoll = selectedId === index ? 'roll-forward' : 'roll-backward'
                return (
                  <div key={index} onClick={() => handleClick(index)} className={`flex h-[360px] ${isSelected ? 'grow-[3]' : 'grow'} cursor-pointer overflow-hidden rounded-lg bg-[url('assets/images/home/bg-itab.jpg')] bg-cover bg-[left_center] bg-no-repeat transition-all duration-500 md:h-[568px]`}>
                    <div className="relative flex h-full w-full flex-col items-center">
                      <img src={require(`assets/images/home/img-ab${index + 1}.png`)} className="h-[201px] w-[212px]" />
                      <div className="h-full w-full px-[15px] lg:px-[45px] -md:absolute">
                        <div className="relative h-full w-full ">
                          <div className="absolute flex h-full w-full -md:items-center">
                            <div className={`animate__animated flex w-full flex-col gap-1.5 ${animationClass} transition`}>
                              <p className="SourceSansPro-b title-about text-center capitalize text-white">{window.extractModifiedString(item.title, language)}</p>
                              <div className="text-[18px] text-white" dangerouslySetInnerHTML={{ __html: window.extractModifiedString(item.content, language) }} />
                            </div>
                          </div>
                          <div className="absolute bottom-[5%] w-full transition-all duration-500">
                            <div className="flex items-end justify-between">
                              <p className={`animate__animated SourceSansPro-b title-about capitalize text-white ${titleOut}`}>{window.extractModifiedString(item.title, language)}</p>
                              <div className="flex aspect-square w-[40px] items-center justify-center">
                                <img className={`aspect-square w-[23px] shrink-0 ${imgRoll}`} src={require('assets/images/home/more-abhome.png')} alt="about" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
