export default function Mark({ children, className, select }) {
  return (
    <>
      <div className={`group flex cursor-pointer flex-col items-center ${className} absolute origin-bottom`}>
        <p className="SourceSansPro-b capitalize text-[#999999] [font-size:_clamp(8px,2.2vw,18px)] group-hover:text-white">{children}</p>
        <div className="w-[2vw] max-w-[20px] ">
          {!select && (
            <>
              <img src={require(`assets/images/home/position.png`)} alt="m-img-map" className="block h-full w-full object-contain transition-all group-hover:hidden" />
              <img src={require(`assets/images/home/position-hv.png`)} alt="m-img-map" className={`group-hover:mark_animatison hidden h-full w-full origin-bottom object-contain transition-all group-hover:block`} />
            </>
          )}
          {select && <img src={require(`assets/images/home/position-hv.png`)} alt="m-img-map" className={`mark_animatison h-full w-full origin-bottom object-contain transition-all`} />}
        </div>
      </div>
    </>
  )
}
