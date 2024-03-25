import Nav from 'components/Nav'
import Info from 'feature/Detail/Info/Info'
import Body from 'feature/Detail/Body/Body'
import Feedback from 'feature/Detail/Feedback/Feedback'
import Foot from 'components/Foot'
import { useEffect } from 'react'

export default function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="bg-[url('assets/images/b1.jpg')]">
        <div className="contain px-5">
          <div className="flex flex-col gap-2 sm:gap-5">
            <div className="flex flex-col">
              <div id="head">
                <Nav />
              </div>
              <div className="bg-white ">
                <Info />
              </div>
            </div>
            <div className="bg-white">
              <Body />
            </div>
            {/* <div className="bg-white">
              <Feedback />
            </div> */}
          </div>
        </div>
        <Foot />
      </div>
    </>
  )
}
