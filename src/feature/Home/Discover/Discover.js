import Mark from './Mark'

export default function Discover() {
  const data = [
    {
      id: 1,
      title: 'Head Office - Hanoi City',
      des: '3rd Floor, HH2 Bac Ha Building, No.15 To Huu street, Nhan Chinh ward, Thanh Xuan District, Hanoi City, Vietnam.',
      phone: 'Phone: +84 246 686 0058',
    },
    {
      id: 2,
      title: 'Branch Office - Hue City',
      des: '7th Floor, Vietinbank Building, 02 Le Quy Don street, Phu Hoi ward, Hue City, Vietnam.',
      phone: 'Phone: +84 234 394 9689',
    },
    {
      id: 3,
      title: 'Representative Office - HCMC',
      des: 'Waseco Plaza, No.10 Pho Quang street, ward 2, Tan Binh District, Ho Chi Minh City, Vietnam.',
      phone: 'Phone: +84 283 844 7184',
    },
    {
      id: 4,
      title: 'Oversea Office - Dubai',
      des: 'A1-602G Ajman Free Zone - Dubai.',
      phone: '',
    },
  ]

  return (
    <>
      <div className="container1">
        <div id="aaabcd" className="relative w-full bg-discover px-[5%] pb-[4%] pt-[5%] lg:pb-[50px] lg:pt-[70px]">
          <div className="relative flex h-full w-full flex-col">
            <div className="flex h-[90px] w-full items-center justify-center">
              <h2 className="SourceSansPro-b title text-center text-white">DISCOVER OUR GLOBAL TEAMS</h2>
            </div>
            <div className="relative mx-auto h-full w-full max-w-[840px] lg:max-w-[1426px]">
              <img src={require(`assets/images/home/img-map.png`)} alt="img-map" className="hidden object-contain lg:flex" />
              <img src={require(`assets/images/home/m-img-map.png`)} alt="m-img-map" className="flex object-contain lg:hidden" />
              <div className="absolute top-0 z-10 flex h-full w-full">
                <Mark className={'right-[25%] top-[37%] lg:right-[22%] lg:top-[31%]'} select={true}>
                  viet nam
                </Mark>
                <Mark className={'right-[22%] top-[15%] lg:right-[20%] lg:top-[15%]'}>korea</Mark>
                <Mark className={'right-[15%] top-[22%] lg:right-[16%] lg:top-[18%]'}>japan</Mark>
                <Mark className={'right-[19%] top-[32%] lg:right-[18%] lg:top-[27%]'}>taiwan</Mark>
                <Mark className={'right-[16%] top-[42%] lg:right-[16%] lg:top-[36%]'}>philipines</Mark>
                <Mark className={'right-[29%] top-[46%] lg:right-[25.3%] lg:top-[38%]'}>cambodia</Mark>
                <Mark className={'right-[24%] top-[54%] lg:right-[25%] lg:top-[47%]'}>singapore</Mark>
                <Mark className={'right-[28%] top-[28%] lg:right-[26%] lg:top-[22%]'}>china</Mark>
                <Mark className={'right-[58%] top-[28%] lg:right-[41%] lg:top-[27%]'}>UAE</Mark>
              </div>
            </div>
            <div className="bottom-0 left-0 z-10 flex flex-row gap-5 lg:absolute lg:flex-col">
              {data &&
                data.map((item) => {
                  return (
                    <div className="flex w-[200px] gap-2 lg:w-[280px]" key={item.id}>
                      <img src={require(`assets/images/home/position.png`)} alt="m-img-map" className="block h-8 w-5 object-contain" />
                      <div className="flex w-full flex-col gap-2 [font-size:_clamp(8px,2.5vw,13px)]">
                        <p className="SourceSansPro-b capitalize text-primary">{item.title}</p>
                        <div className="flex flex-col">
                          <p className="text-[#b9b9b9]">{item.des}</p>
                          <p className="SourceSansPro-b text-[#b9b9b9]">{item.phone}</p>
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
