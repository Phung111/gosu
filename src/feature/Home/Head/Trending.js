import Product from 'components/Product'
import { useSelector } from 'react-redux'

export default function Trending() {
  const newProducts = useSelector((state) => state.baseSlice.data.newProducts)

  return (
    <>
      <div className="flex w-full items-end justify-center">
        <div className="grid grid-cols-3 gap-5 sm:gap-10">
          {newProducts &&
            newProducts.map((item, index) => (
              <div className="h-[195px] w-[110px] sm:h-[320px] sm:w-[180px]" key={index}>
                <Product type={'trending'} product={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
