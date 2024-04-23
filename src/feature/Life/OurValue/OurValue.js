import React, { useState, useEffect } from 'react'
import Part from './Part'
import PartMb from './PartMb'

export default function OurValue() {
  const data = [
    { id: 1, title: 'culture', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui laborum iure molestias doloribus, quaerat dolores itaque ea cupiditate omnis assumenda. Quos asperiores dolorum vel.', img: "bg-[url('assets/images/life/culture.jpg')]" },
    { id: 2, title: 'value', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui laborum iure molestias doloribus, quaerat dolores itaque ea cupiditate omnis assumenda. Quos asperiores dolorum vel.', img: "bg-[url('assets/images/life/value.jpg')]" },
    { id: 3, title: 'activities', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui laborum iure molestias doloribus, quaerat dolores itaque ea cupiditate omnis assumenda. Quos asperiores dolorum vel.', img: "bg-[url('assets/images/life/activities.jpg')]" },
    { id: 4, title: 'benefit', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui laborum iure molestias doloribus, quaerat dolores itaque ea cupiditate omnis assumenda. Quos asperiores dolorum vel.', img: "bg-[url('assets/images/life/benefits.jpg')]" },
    { id: 5, title: 'and more ', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui laborum iure molestias doloribus, quaerat dolores itaque ea cupiditate omnis assumenda. Quos asperiores dolorum vel.', img: "bg-[url('assets/images/life/bg-andmore.jpg')]" },
  ]

  const [selectedId, setSelectedId] = useState(null)
  const [bg, setBg] = useState("bg-[url('assets/images/life/bg-toplife.jpg')]")

  const handleClick = (item) => {
    if (selectedId === item.id) {
      setSelectedId(null)
      setBg("bg-[url('assets/images/life/bg-toplife.jpg')]")
    } else {
      setSelectedId(item.id)
      setBg(item.img)
    }
  }

  return (
    <>
      <div className={`relative h-[100vh] min-h-[800px] w-full ${bg} hidden overflow-hidden bg-cover bg-center bg-no-repeat lg:block`}>
        {/* <div className="image_burn absolute z-20 h-[340px] w-[890px]"></div> */}
        <div className="flex h-full w-full divide-x-[0.5px] divide-white/40">{data && data.map((item) => <Part key={item.id} item={item} isSelected={selectedId === item.id} handleClick={handleClick} />)}</div>
      </div>
      <div className="relative mt-[60px] block lg:hidden">
        <div className="flex flex-col gap-1 bg-[#2B2A29]">{data && data.map((item) => <PartMb key={item.id} item={item} isSelected={selectedId === item.id} handleClick={handleClick}></PartMb>)}</div>
      </div>
    </>
  )
}
