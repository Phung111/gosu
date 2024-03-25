import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct, setProducts, setLoading } from 'service/baseSlice'

import Home from 'feature/Home/Home'
import Detail from 'feature/Detail/Detail'
import { monProducts } from 'service/sourceProduct'

import Loading from 'components/Loading'

function App() {
  const isLoading = useSelector((state) => state.baseSlice.data.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(monProducts))
    const storedProduct = localStorage.getItem('product')
    if (storedProduct) {
      const { id } = JSON.parse(storedProduct)
      dispatch(setProduct(id))
    }
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000)
  }, [dispatch])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </HashRouter>
      )}
    </>
  )
}

export default App
