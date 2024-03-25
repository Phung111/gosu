import { Link } from 'react-scroll'

export default function Foot() {
  return (
    <>
      <div id="foot">
        <div className="relative flex justify-center">
          <img className="absolute -bottom-5 w-full sm:-bottom-10" src={require(`assets/images/nuocden.png`)} alt="nuocden" />
          <div className="absolute h-full w-full">
            <img className="" src={require(`assets/images/b3.jpg`)} alt="bgfoot" />
            <div className="relative h-10 w-full -translate-y-full sm:h-20">
              <div className="flex h-1/2 items-center justify-end border-b-2 border-red2 pr-2 sm:pr-20">
                <div className="contain flex h-7 justify-end gap-5 sm:gap-10">
                  <a href="https://www.facebook.com/Makoto.decor" target="_blank" className="flex items-center text-red2 hover:text-red sm:text-3xl">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/makotodecor" target="_blank" className="flex items-center text-red2 hover:text-red sm:text-3xl">
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                  <a href="#" className="flex items-center text-red2 hover:text-red sm:text-3xl">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="" className="flex items-center text-red2 hover:text-red sm:text-3xl">
                    <i className="fa-brands fa-square-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="contain flex -translate-y-[150%] pl-[10%]">
                <Link to="head" smooth={true} className="h-[40px] w-[30px] animate-bounce cursor-pointer sm:h-[100px] sm:w-[80px]">
                  <img className="" src={require(`assets/images/totop.png`)} alt="totop" />
                </Link>
              </div>
            </div>
          </div>
          <img className="absolute w-[600px]" src={require(`assets/images/chufoot.png`)} alt="chufoot" />
        </div>
      </div>
    </>
  )
}
