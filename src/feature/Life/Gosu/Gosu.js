import Part from '../Gosu/Part'
export default function Gosu() {
  const data = [
    { title: 'talent acquisition', img: "bg-[url('assets/images/life/life1.jpg')]", des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos omnis est facere nulla, assumenda facilis numquam repellat beatae soluta distinctio!' },
    { title: 'fresher opportunities', img: "bg-[url('assets/images/life/life2.jpg')]", des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos omnis est facere nulla, assumenda facilis numquam repellat beatae soluta distinctio!' },
    { title: 'internship program', img: "bg-[url('assets/images/life/life3.jpg')]", des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos omnis est facere nulla, assumenda facilis numquam repellat beatae soluta distinctio!' },
  ]

  return (
    <>
      <div className="container3 mt-[8%] lg:mt-[80px]">
        <div className="relative flex h-full w-full flex-col gap-[5%] lg:gap-[50px]">
          <div className="flex flex-col">
            <h2 className="SourceSansPro-b title text-center">
              GO<span className="text-primary">&</span>U
            </h2>
            <p className="text-center">GOSU and You</p>
          </div>
          <div className="flex flex-wrap gap-[15px] md:gap-[35px]">
            <Part data={data[0]} />
            <div className="flex w-full flex-col gap-[15px] md:flex-row md:gap-[35px]">
              <Part data={data[1]} />
              <Part data={data[2]} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
