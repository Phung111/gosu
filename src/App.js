import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from 'feature/Home/Home'
import Life from 'feature/Life/Life'
import Loading from 'components/Loading'

function App() {
  return (
    <>
      {/* <Loading /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life" element={<Life />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
