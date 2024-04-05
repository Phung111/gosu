import Header from 'components/Header/Header'
import Slogan from 'feature/Home/Slogan/Slogan'
import About from 'feature/Home/About/About'
import Revolution from 'feature/Home/Revolution/Revolution'
import Feature from 'feature/Home/Feature/Feature'
import Discover from 'feature/Home/Discover/Discover'
import Foot from 'feature/Home/Foot/Foot'
import ToTop from './ToTop'

export default function Home() {
  return (
    <>
      <div id="head" />
      <Header />
      <Slogan />
      <About />
      <Revolution />
      <Feature />
      <Discover />
      <Foot />
      <ToTop />
    </>
  )
}
