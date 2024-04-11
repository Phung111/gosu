import Header from 'components/Header/Header'
import Slogan from 'feature/Home/Slogan/Slogan'
import About from 'feature/Home/About/About'
import Revolution from 'feature/Home/Revolution/Revolution'
import Feature from 'feature/Home/Feature/Feature'
import Discover from 'feature/Home/Discover/Discover'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from './ToTop'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Home() {
  const home = useSelector((state) => state.baseSlice.home)
  const language = useSelector((state) => state.baseSlice.language)
  const isEnglish = language.en
  const isKhomo = language.kh

  useEffect(() => {
    if (home) {
      const titleWebRaw = home[0].data.site_title
      const extractedStrings = window.extractStrings(titleWebRaw)
      let title = ''
      if (isEnglish) {
        title = extractedStrings[0]
      } else if (isKhomo) {
        title = extractedStrings[1]
      }

      document.title = title
    }
  }, [home, isEnglish, isKhomo])

  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <div className="relative">
          <div id="head" />
          <Header />
          <Slogan />
          <About />
          <Revolution />
          <Feature />
          <Discover />
          <Foot />
          <ToTop />
        </div>
      </div>
    </>
  )
}
