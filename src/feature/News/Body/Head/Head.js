import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select, Input } from 'antd'
import { getPosts, setTitle, setYear, setSlug } from 'service/baseSlice'

export default function Head() {
  const dispatch = useDispatch()
  const location = useLocation()

  const links = [
    { slug: 'all', text: 'all news', url: '/news/' },
    { slug: 'announcement', text: 'annoucement', url: '/news/announcement' },
    { slug: 'activities', text: 'activites', url: '/news/activities' },
    { slug: 'game', text: 'game', url: '/news/game' },
    { slug: 'archive', text: 'archive', url: '/news/archive' },
  ]

  const years = [
    { value: '', label: '' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
  ]

  const handleChangeYear = (value) => {
    dispatch(setYear(value))
    dispatch(getPosts())
  }
  const handleSetSlug = (value) => {
    dispatch(setSlug(value))
    dispatch(getPosts())
  }
  const handleSetTitle = (value) => {
    dispatch(setTitle(value))
    dispatch(getPosts())
  }

  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between -lg:gap-5">
        <div className="flex h-[45px] gap-[25px]">
          {links.map((item, index) => (
            <Link to={item.url} className="group relative flex items-center justify-center" key={index} onClick={() => handleSetSlug(item.slug)}>
              <p className={`${location.pathname === item.url ? 'text-black' : 'text-[#BFBFBF] hover:text-black'} SourceSansPro-b capitalize [font-size:_clamp(12px,3.2vw,18px)] `}>{item.text}</p>
              <div className="absolute bottom-0 h-1 w-7 rounded-full bg-primary opacity-0 group-hover:opacity-100" />
              {location.pathname === item.url && <div className="absolute bottom-0 h-1 w-7 rounded-full bg-primary" />}
            </Link>
          ))}
        </div>
        <div className="flex h-[45px] gap-2 -lg:w-full">
          <Select onChange={(value) => handleChangeYear(value)} className="h-full w-1/2 lg:w-[250px]" placeholder="Pick a year" variant="filled" options={years.map((item) => ({ value: item.value, label: item.label }))} />
          <Input onChange={(event) => handleSetTitle(event.target.value)} className="h-full w-1/2 lg:w-[210px]" placeholder="Search" variant="filled" />
        </div>
      </div>
    </>
  )
}
