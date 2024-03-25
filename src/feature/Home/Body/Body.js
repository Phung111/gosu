import Products from 'feature/Home/Body/Products'

export default function Body() {
  return (
    <>
      <div id="body" className="pt-5">
        <div className="flex flex-col gap-5">
          <h2 className="svn_shikimaru text-center text-[13px] sm:text-2xl">From The Land of the Rising Sun to Your Home</h2>
          <div className="relative flex h-[680px] justify-center sm:h-[1000px]">
            <img className="absolute hidden sm:block" src={require(`assets/images/tori.png`)} alt="tori" />
            <img className="absolute sm:hidden" src={require(`assets/images/torimobi.png`)} alt="torimobi" />
            <div className="relative z-10 flex h-full w-full justify-center">
              <div className="mt-[60px] h-[600px] w-[280px] sm:mt-[200px] sm:h-[670px] sm:w-[1200px]">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
