import { Link as LinkScroll } from 'react-scroll'
import { Link } from 'react-router-dom'

export default function Nav({}) {
  return (
    <>
      <div className="px-0 sm:px-10">
        <div className="flex flex-col-reverse justify-end gap-1 sm:h-14 sm:flex-row sm:gap-10">
          {/* <div className="flex h-6 items-center justify-center sm:h-14">
            <div className="relative flex h-full w-[150px] items-center sm:h-[75%] sm:w-[200px]">
              <input type="text" className="h-full w-full rounded-full border-2 border-white bg-transparent  pl-3 outline-none focus:ring-2 focus:ring-black -sm:text-xs" placeholder="Tìm kiếm" />
              <div className="absolute right-0 h-full p-[3px]">
                <button className="flex h-full items-center rounded-full bg-color1 px-5 hover:bg-color1_dark">
                  <i className="fa-solid fa-magnifying-glass text-white -sm:text-xs"></i>
                </button>
              </div>
            </div>
          </div> */}
          <div className="flex h-7 items-center justify-center sm:h-14">
            <div className="flex items-center gap-6 sm:gap-10 ">
              <Link to={'/'} className="cursor-pointer text-[10px] font-bold uppercase transition hover:text-color1 sm:text-[18px] sm:hover:scale-[110%]">
                trang chủ
              </Link>
              <a className="cursor-pointer text-[10px] font-bold uppercase transition hover:text-color1 sm:text-[18px] sm:hover:scale-[110%]">danh mục</a>
              <LinkScroll to="body" smooth={true} className="cursor-pointer text-[10px] font-bold uppercase transition hover:text-color1 sm:text-[18px] sm:hover:scale-[110%]">
                sản phẩm
              </LinkScroll>
              <LinkScroll to="foot" smooth={true} className="cursor-pointer text-[10px] font-bold uppercase transition hover:text-color1 sm:text-[18px] sm:hover:scale-[110%]">
                liên hệ
              </LinkScroll>
              <a className="cursor-pointer text-[10px] font-bold uppercase transition hover:text-color1 sm:text-[18px] sm:hover:scale-[110%]">
                <i className="fa-solid fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
