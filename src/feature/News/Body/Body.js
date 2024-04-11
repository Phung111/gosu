import Head from './Head/Head'
import Content from './Content/Content'

export default function Body() {
  return (
    <>
      <div className="mx-auto mb-[50px] mt-[3%] max-w-[1360px] px-6 lg:mt-[45px]">
        <div className="flex h-full w-full flex-col gap-[3%] lg:gap-[40px]">
          <Head />
          <Content />
        </div>
      </div>
    </>
  )
}
