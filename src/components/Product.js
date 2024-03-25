import { Link } from 'react-router-dom'
import { setProduct, setCurrentImage } from 'service/baseSlice'
import { useDispatch } from 'react-redux'

export default function Product({ type, product }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setProduct(product.id))
  }

  let textName = ''
  let textPrice = ''

  if (type === 'trending') {
    textName = 'text-[9px] sm:text-[20px] leading-4 sm:leading-8'
    textPrice = 'text-[18px] sm:text-[28px]'
  } else {
    textName = 'text-[10px] sm:text-[18px]'
    textPrice = 'text-[20px] sm:text-[28px]'
  }

  return (
    <>
      {product && (
        <Link to="/detail" className="h-full w-full" onClick={handleClick}>
          <div className="flex h-full w-full flex-col sm:transition sm:hover:scale-[110%]">
            <div className="relative h-full bg-color3">
              <div className="absolute top-0 flex h-full w-full items-center justify-center p-3">
                <div className="aspect-square w-full rounded-full bg-color2" />
              </div>
              <div className="absolute z-10 h-full w-full p-2 sm:p-5">
                <img className="h-full w-full object-contain" src={require(`assets/images/sp/${product.colors[0].img}.png`)} alt="product" />
              </div>
            </div>
            <div className="flex h-[15%] justify-center bg-black">
              <p className={`${textName} !line-clamp-1 font-bold capitalize text-white`}>{product.name}</p>
            </div>
            <div className="flex h-1/5 justify-center bg-color1">
              <p className={`${textPrice} flex items-center justify-center font-bold text-white`}>{product.sizes[0].price}</p>
            </div>
            <div className="flex h-1/5 justify-center">
              <p className={`${textPrice} flex items-center justify-center font-bold line-through`}>{product.sizes[0].priceFirst}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
