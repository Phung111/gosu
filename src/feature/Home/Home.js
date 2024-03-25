import Head from 'feature/Home/Head/Head'
import Body from 'feature/Home/Body/Body'
import Foot from 'components/Foot'
import Nav from 'components/Nav'

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-[url('assets/images/b1.jpg')]">
        <div className="contain">
          <div id="head" className="flex flex-col pb-10 sm:pb-20">
            <Nav />
            <Head />
          </div>
        </div>
        <div className="bg-[url('assets/images/b2.png')]">
          <div className="contain">
            <Body />
          </div>
        </div>
        <Foot />
      </div>
    </>
  )
}
