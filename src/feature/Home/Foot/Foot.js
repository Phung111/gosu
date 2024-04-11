import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Foot() {
  const home = useSelector((state) => state.baseSlice.home)
  const language = useSelector((state) => state.baseSlice.language)
  return (
    <>
      <div id="foot" className="border-t-2 border-primary bg-black px-[2%] py-[5%] lg:py-[60px]">
        <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
          <img src={require(`assets/images/home/logo.png`)} alt="m-img-map" className="h-[50px] w-[200px] object-contain" />
          <div className="flex items-center gap-5">
            <button className="SourceSansPro-b h-[40px] w-[124px] rounded border-[0.5px] border-white uppercase text-white transition-all duration-500 [font-size:_clamp(14px,3vw,20px)] hover:bg-primary">contact</button>
            <Link to={home[0].data.contact.link_fb} target="_blank">
              <img src={require(`assets/images/home/fb-xam.png`)} alt="m-img-map" className="cursor-pointer object-contain" />
            </Link>
            <Link to={home[0].data.contact.link_tt} target="_blank">
              <img src={require(`assets/images/home/tiktok.png`)} alt="m-img-map" className="cursor-pointer object-contain" />
            </Link>
            <div className="relative flex shrink-0 flex-col after:absolute after:-left-[10px] after:top-0 after:h-full after:w-[1px] after:bg-[#646464] after:content-['']">
              <p className="text-[16px] leading-[0.9] text-white">Hotline</p>
              <p className="SourceSansPro-b text-[20px] leading-[0.9] text-primary">{home[0].data.contact.hotline}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
