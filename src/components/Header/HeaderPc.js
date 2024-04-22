import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import SelectCustom from 'components/SelectCustom'
import { ConfigProvider, Space, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from 'service/baseSlice'

export default function HeaderPc({ isShowNavMb, setShowNavMb }) {
  const dispatch = useDispatch()
  const location = useLocation()
  console.log('location.pathname', location.pathname)

  const links = [
    { text: 'we are gosu', url: '/' },
    { text: 'life at gosu', url: '/life' },
    { text: 'gosu world', url: '/world' },
    { text: 'gosu news', url: '/news' },
  ]

  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    setIsScrolled(scrollPosition > 300)
  }, [scrollPosition])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const showNavMb = () => {
    setShowNavMb(!isShowNavMb)
  }

  return (
    <>
      <div className={`h-[60px] w-full px-[2%] transition ${scrollPosition > 300 ? 'bg-blue' : 'bg-blue lg:bg-transparent'}`}>
        <div className="relative flex h-full w-full items-center justify-between">
          <div className="absolute flex h-full w-full items-center justify-between">
            <img src={require(`assets/images/home/logo.png`)} className="h-[35px] w-[139px]" />
            <div className="re flex shrink-0 items-center gap-2">
              <Select
                onChange={(value) => dispatch(setLanguage(value))}
                style={{ width: 100, background: 'transparent !important', zIndex: 100 }}
                defaultValue={'en'}
                options={[
                  {
                    value: 'en',
                    label: (
                      <div className="flex items-center gap-2">
                        <img className="h-[18px] w-[18px]" src={require('assets/images/home/en.png')} alt="en" />
                        <span>EN</span>
                      </div>
                    ),
                  },
                  {
                    value: 'kh',
                    label: (
                      <div className="flex items-center gap-2">
                        <img className="h-[18px] w-[18px]" src={require('assets/images/home/kh.png')} alt="en" />
                        <span>KH</span>
                      </div>
                    ),
                  },
                ]}
              />

              <button className="relative z-20 flex aspect-square w-[30px] items-center justify-center text-white lg:hidden" onClick={() => showNavMb()}>
                {!isShowNavMb ? <i className="fa-solid fa-bars text-[24px]" /> : <i className="fa-solid fa-xmark text-[30px]" />}
              </button>
            </div>
          </div>
          <div className="relative z-10 hidden w-full justify-center lg:flex">
            <div className="flex gap-20">
              {links.map((item, index) => (
                <a key={index} href={item.url} className={`SourceSansPro-b text-center text-[20px] uppercase text-white hover:text-primary ${location.pathname === item.url ? `${isScrolled ? '!text-primary' : '!text-blue hover:!text-primary'}` : ''}`}>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
