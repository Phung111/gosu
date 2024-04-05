export default function Foot() {
  return (
    <>
      <div id="foot" className="border-t-2 border-primary bg-black px-[2%] py-[5%] lg:py-[60px]">
        <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
          <img src={require(`assets/images/home/logo.png`)} alt="m-img-map" className="h-[50px] w-[200px] object-contain" />
          <div className="flex items-center gap-5">
            <button className="SourceSansPro-b h-[40px] w-[124px] rounded border-[0.5px] border-white uppercase text-white transition-all duration-500 [font-size:_clamp(14px,3vw,20px)] hover:bg-primary">contact</button>
            <img src={require(`assets/images/home/fb-xam.png`)} alt="m-img-map" className="cursor-pointer object-contain" />
            <img src={require(`assets/images/home/tiktok.png`)} alt="m-img-map" className="cursor-pointer object-contain" />
            <div className="relative flex shrink-0 flex-col after:absolute after:-left-[10px] after:top-0 after:h-full after:w-[1px] after:bg-[#646464] after:content-['']">
              <p className="text-[16px] leading-[0.9] text-white">Hotline</p>
              <p className="SourceSansPro-b text-[20px] leading-[0.9] text-primary">1900.7189</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
