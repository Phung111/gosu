import BestProduct from 'feature/Home/Head/BestProduct'
import Trending from 'feature/Home/Head/Trending'
import SwiperHead from 'feature/Home/Head/SwiperHead'
import { Link } from 'react-scroll'
import Cat from 'components/Cat'

export default function Head() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="flex w-full flex-col gap-2 sm:w-1/2">
          <div className="relative flex w-full items-center justify-center">
            <img className="absolute w-full -translate-x-2 object-cover" src={require(`assets/images/cucmau.png`)} alt="cucmau" />
            <div className="flex w-[80%] items-center justify-center px-10">
              <SwiperHead />
            </div>
            <div className="absolute bottom-0 left-1/3 z-20">
              <Cat />
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:px-10">
            <div className="text-justify">Makoto đem hơi thở trong văn hóa Nhật Bản truyền thống đến không gian sống và làm việc của bạn. Người Nhật rất coi trọng sự hòa hợp giữa con người và thiên nhiên, giữa quá khứ và tương lai, giữa truyền thống và hiện đại. </div>
            <div className="flex justify-center">
              <Link to="foot" smooth={true}>
                <button className="w-[200px] rounded-full bg-black p-2 text-white hover:bg-black/70">Thông tin chi tiết</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-10 sm:w-1/2 sm:px-10">
          <BestProduct />
          <Trending />
        </div>
      </div>
    </>
  )
}
