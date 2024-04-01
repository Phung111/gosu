import Header from 'components/Header/Header'
import Slogan from 'feature/Home/Slogan/Slogan'
import About from 'feature/Home/About/About'
import Revolution from 'feature/Home/Revolution/Revolution'
import Feature from 'feature/Home/Feature/Feature'
import Discover from 'feature/Home/Discover/Discover'
import Foot from 'feature/Home/Foot/Foot'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <>
      <div id="head"></div>
      <Header />
      <Slogan />
      <About />
      <Revolution />
      <Feature />
      <Discover />
      <Foot />
      <div className="fixed bottom-[213px] right-[1%] z-50">
        <div className="flex flex-col items-center gap-2">
          <img src={require(`assets/images/home/join-td.png`)} alt="join" className="w-[80px] cursor-pointer object-contain lg:w-[130px]" />
          <Link to="head" smooth={true} className="group aspect-square w-[50px] rounded-full border border-[#1189FF]">
            <img src={require(`assets/images/home/gotop.png`)} alt="top" className="block cursor-pointer object-contain group-hover:hidden" />
            <img src={require(`assets/images/home/gotop-hv.png`)} alt="top" className="hidden cursor-pointer object-contain group-hover:block" />
          </Link>
        </div>
      </div>
    </>
  )
}
