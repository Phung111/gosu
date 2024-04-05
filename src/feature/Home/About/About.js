import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const data = [
    {
      id: 1,
      title: 'Vision',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/img-ab1.png'),
    },
    {
      id: 2,
      title: 'Mission',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/img-ab2.png'),
    },
    {
      id: 3,
      title: 'Action Principle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nesciunt ratione, minus libero fugit, soluta explicabo ullam accusantium dolore',
      imageUrl: require('assets/images/home/img-ab3.png'),
    },
  ]

  const [selectedId, setSelectedId] = useState(null)
  const [isRolledForward, setIsRolledForward] = useState(false)

  const handleClick = (id) => {
    if (selectedId === id) {
      setSelectedId(null)
      setIsRolledForward(false)
    } else {
      setSelectedId(id)
      setIsRolledForward(!isRolledForward)
    }
  }

  return (
    <>
      <div className="container1">
        <div className="bg-white bg-cover bg-[center_top_0] bg-no-repeat lg:bg-[url('assets/images/home/bg-top-abhome.jpg')]">
          <div className="container2 relative z-10 flex flex-col pt-[10%] lg:pt-[150px]">
            <h2 className="SourceSansPro-b title text-center">ABOUT GOSU</h2>

            <div className="mt-[5%] flex flex-col justify-between gap-2.5 md:flex-row md:gap-[25px] lg:mt-[60px] lg:gap-10">
              {data &&
                data.map((item) => {
                  const isSelected = selectedId === item.id
                  const animationClass = selectedId === item.id ? 'animate__fadeInUp' : 'animate__fadeOutDown'
                  const titleOut = selectedId === item.id ? 'animate__fadeOutRight' : 'animate__fadeInRight'
                  const imgRoll = selectedId === item.id ? 'roll-forward' : 'roll-backward'
                  return (
                    <div key={item.id} onClick={() => handleClick(item.id)} className={`flex h-[360px] ${isSelected ? 'grow-[3]' : 'grow'} cursor-pointer overflow-hidden rounded-lg bg-[url('assets/images/home/bg-itab.jpg')] bg-cover bg-[left_center] bg-no-repeat transition-all duration-500 md:h-[568px]`}>
                      <div className="relative flex h-full w-full flex-col items-center">
                        <img className="h-[201px] w-[212px]" src={item.imageUrl} alt="about" />
                        <div className="h-full w-full px-[15px] lg:px-[45px] -md:absolute">
                          <div className="relative h-full w-full ">
                            <div className="absolute flex h-full w-full -md:items-center">
                              <div className={`animate__animated flex flex-col gap-1.5 ${animationClass} transition`}>
                                <p className="SourceSansPro-b title-about text-center capitalize text-white">{item.title}</p>
                                <p className="text-justify text-[18px] text-white">{item.description}</p>
                              </div>
                            </div>
                            <div className="absolute bottom-[5%] w-full transition-all duration-500">
                              <div className="flex items-end justify-between">
                                <p className={`animate__animated SourceSansPro-b title-about capitalize text-white ${titleOut}`}>{item.title}</p>
                                <div className="flex aspect-square w-[40px] items-center justify-center">
                                  <img className={`aspect-square w-[23px] shrink-0 ${imgRoll}`} src={require('assets/images/home/more-abhome.png')} alt="about" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
