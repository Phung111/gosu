export default function Mark({ children, className, select }) {
  return (
    <>
      <div className={`flex flex-col items-center ${className} absolute origin-bottom`}>
        <p className="SourceSansPro-b capitalize text-white [font-size:_clamp(8px,2.2vw,18px)]">{children}</p>
        <div className="group h-[32px] w-[20px] cursor-pointer">
          {!select && (
            <>
              <img src={require(`assets/images/home/position.png`)} alt="m-img-map" className="block h-full w-full object-contain transition-all group-hover:hidden" />
              <img src={require(`assets/images/home/position-hv.png`)} alt="m-img-map" className={`hover:mark_animatison hidden h-full w-full origin-bottom object-contain transition-all group-hover:block`} />
            </>
          )}
          {select && <img src={require(`assets/images/home/position-hv.png`)} alt="m-img-map" className={`mark_animatison h-full w-full origin-bottom object-contain transition-all`} />}
        </div>
      </div>
    </>
  )
}
