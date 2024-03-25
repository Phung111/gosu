import { useSelector } from 'react-redux'

export default function Body() {
  const product = useSelector((state) => state.baseSlice.data.product)
  const colors = product.colors
  const otherImgs = product.otherImgs

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col gap-10">
          <div className="flex items-center bg-gray px-4">
            <h2 className="text-xl font-medium uppercase">chi tiết sản phẩm</h2>
          </div>
          <div className="flex flex-col gap-2 p-4">
            {/* {colors && colors.map((item, index) => <img src={require(`assets/images/sp/${item.img}.png`)} className="aspect-square w-full object-contain" key={index} />)} */}
            {otherImgs && otherImgs.map((item, index) => <img src={require(`assets/images/sp/${item}.jpg`)} className="h-full w-full object-contain" key={index} />)}
          </div>
        </div>
      </div>
    </>
  )
}
