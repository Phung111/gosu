import Image from 'feature/Detail/Info/Image'
import Name from 'feature/Detail/Info/Name'

export default function Info() {
  return (
    <>
      <div className="flex gap-8 p-4 -sm:flex-col">
        <Image />
        <Name />
      </div>
    </>
  )
}
