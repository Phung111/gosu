import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setProduct } from 'service/baseSlice'
import { useDispatch } from 'react-redux'

export default function BestProduct() {
  const bestProduct = useSelector((state) => state.baseSlice.data.bestProduct)

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setProduct(bestProduct.id))
  }

  return (
    <>
      <Link to="/detail/" onClick={handleClick}>
        <div className="flex cursor-pointer gap-5 sm:gap-10 sm:transition sm:hover:scale-[107%]">
          <div className="relative flex h-40 w-40 shrink-0 items-center justify-center p-5 sm:h-60 sm:w-60">
            <div className="aspect-square h-full w-full rounded-full bg-color1" />
            <img className="absolute left-0 top-0 h-full w-full object-contain" src={require(`assets/images/sp/${bestProduct.colors[0].img}.png`)} alt="logo" />
          </div>
          <div className="flex flex-col gap-3 sm:justify-center">
            <p className="svn_shikimaru text-xl font-semibold uppercase text-[#a8242d] sm:text-5xl">best product</p>
            <div className="h-1 w-1/3 bg-color1"></div>
            <p className="flex gap-2 text-base font-bold sm:flex-row sm:gap-2 sm:text-4xl">
              <span className="font-semibold uppercase">{bestProduct.name}</span>
              <span className="OTF_Kaisho font-semibold uppercase">だるまさん</span>
            </p>
            <p className="line-clamp-3 text-justify text-black/50 sm:line-clamp-4">"{bestProduct.des}"</p>
          </div>
        </div>
      </Link>
    </>
  )
}
