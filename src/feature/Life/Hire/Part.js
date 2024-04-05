export default function Part({ children }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex aspect-square w-8 items-center justify-center bg-[#333333]">
          <img src={require('assets/images/life/icon-gosu-orange.png')} alt="icon-gosu-orange" className="aspect-square w-6" />
        </div>
        <p className="SourceSansPro-b capitalize text-white [font-size:_clamp(10px,2.5vw,20px)]">{children}</p>
      </div>
    </>
  )
}
