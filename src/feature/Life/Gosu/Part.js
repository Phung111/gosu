export default function Part({ data }) {
  return (
    <>
      <div className={`group relative w-full cursor-pointer overflow-hidden rounded-xl bg-blue p-[15px_10px] transition-all duration-500 lg:h-[300px] lg:p-[15px_25px] ${data.img} bg-cover bg-center`}>
        <div className="flex h-full w-full flex-col">
          <p className="SourceSansPro-b capitalize text-white [font-size:_clamp(16px,3.5vw,30px)]">{data.title}</p>
          <p className="mt-[1%] leading-[1.2] text-white [font-size:_clamp(12px,3vw,20px)]">{data.des}</p>
          <div className="mt-[10%] flex items-center gap-[15px] text-[15px] text-white lg:mt-[50px]">
            <p className="transition-all duration-500 group-hover:tracking-[0.2em]">Learn more</p>
            <i className="fa-solid fa-angle-right text-[12px]" />
          </div>
        </div>
        <div className="absolute left-[-28px] top-[-50%] h-[180%] w-[110%] -translate-x-[100%] rotate-[8deg] bg-black/20 transition-all duration-1000 group-hover:translate-x-0 "></div>
      </div>
    </>
  )
}
