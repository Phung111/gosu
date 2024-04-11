import Mark from './Mark'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Discover() {
  const home = useSelector((state) => state.baseSlice.home)
  const language = useSelector((state) => state.baseSlice.language)

  const mang = home[4].data.content

  return (
    <>
      <div className="container1">
        <div id="aaabcd" className="relative w-full bg-discover px-[5%] pb-[4%] pt-[5%] lg:pb-[50px] lg:pt-[70px]">
          <div className="relative flex h-full w-full flex-col">
            <div className="flex h-[90px] w-full items-center justify-center">
              <h2 className="SourceSansPro-b title text-center uppercase text-white">{window.extractModifiedString(home[4].data.main_title, language)}</h2>
            </div>
            <div className="relative mx-auto h-full w-full max-w-[840px] lg:max-w-[1426px]">
              <img src={require(`assets/images/home/img-map.png`)} alt="img-map" className="hidden object-contain lg:flex" />
              <img src={require(`assets/images/home/m-img-map.png`)} alt="m-img-map" className="flex object-contain lg:hidden" />
              <div className="absolute top-0 z-10 flex h-full w-full">
                <Mark className={'right-[25%] top-[37%] lg:right-[22%] lg:top-[31%]'} select={true}>
                  viet nam
                </Mark>
                <Mark className={'right-[22%] top-[15%] lg:right-[20%] lg:top-[15%]'}>korea</Mark>
                <Mark className={'right-[15%] top-[22%] lg:right-[16%] lg:top-[18%]'}>japan</Mark>
                <Mark className={'right-[19%] top-[32%] lg:right-[18%] lg:top-[27%]'}>taiwan</Mark>
                <Mark className={'right-[16%] top-[42%] lg:right-[16%] lg:top-[36%]'}>philipines</Mark>
                <Mark className={'right-[29%] top-[46%] lg:right-[25.3%] lg:top-[38%]'}>cambodia</Mark>
                <Mark className={'right-[24%] top-[54%] lg:right-[25%] lg:top-[47%]'}>singapore</Mark>
                <Mark className={'right-[28%] top-[28%] lg:right-[26%] lg:top-[22%]'}>china</Mark>
                <Mark className={'right-[58%] top-[28%] lg:right-[41%] lg:top-[27%]'}>UAE</Mark>
              </div>
            </div>
            <div className="bottom-0 left-0 z-10 flex flex-row gap-5 lg:absolute lg:flex-col">
              {mang &&
                mang.map((item, index) => {
                  return (
                    <div className="flex w-[200px] gap-2 lg:w-[280px]" key={index}>
                      <img src={require(`assets/images/home/position.png`)} alt="m-img-map" className="block h-8 w-5 object-contain" />
                      <div className="flex w-full flex-col gap-2 [font-size:_clamp(8px,2.5vw,13px)]">
                        <p className="SourceSansPro-b capitalize text-primary">{window.extractModifiedString(item.name, language)}</p>
                        <div className="flex flex-col">
                          <p className="text-[#b9b9b9]">{window.extractModifiedString(item.address, language)}</p>
                          <p className="SourceSansPro-b text-[#b9b9b9]">{window.extractModifiedString(item.phone, language)}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
