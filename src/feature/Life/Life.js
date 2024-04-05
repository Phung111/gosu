import Header from 'components/Header/Header'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from 'feature/Home/ToTop'
import OurValue from './OurValue/OurValue'
import Gosu from './Gosu/Gosu'
import Hire from './Hire/Hire'

export default function Life() {
  return (
    <>
      <div id="head" />
      <Header />
      <OurValue />
      <Gosu />
      <Hire />
      <Foot />
      <ToTop />
      {/* <div className="group relative h-[200px] w-[256px]">
        <img className="h-full w-full object-cover" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/chernimage2.png" alt="" />
        <div className=" absolute top-0">
          <div className="group-hover:image_burnn h-full w-full"></div>
        </div>
      </div> */}
    </>
  )
}
