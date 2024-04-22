import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames, getHome, getLife, getNews, getWorld, setLoading } from 'service/baseSlice'
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from 'feature/Home/Home'
import Life from 'feature/Life/Life'
import Loading from 'components/Loading'
import News from 'feature/News/News'
import World from 'feature/World/World'

function App() {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.baseSlice.loading)

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([dispatch(getHome()), dispatch(getLife()), dispatch(getWorld()), dispatch(getNews()), dispatch(getAllGames())])
      dispatch(setLoading(false))
    }
    loadData()
  }, [dispatch])

  window.extractStrings = function (inputString) {
    const regex = /\[:\w+\](.*?)\[:\w+\]/g
    let match
    const extractedStrings = []

    while ((match = regex.exec(inputString)) !== null) {
      extractedStrings.push(match[1])
    }

    return extractedStrings
  }

  window.extractModifiedString = function (inputString, language) {
    let resultString = inputString
    const isEnglish = language.en
    const isKhmer = language.kh

    const regex = isEnglish ? /\[:en\]([\s\S]*?)\[:en\]/ : isKhmer ? /\[:kh\]([\s\S]*?)\[:kh\]/ : null
    const match = regex && regex.exec(inputString)
    if (match && match.length > 1) {
      resultString = match[1]
    }

    return resultString
  }

  window.convertDateFormat = function (dateString) {
    const date = new Date(dateString)

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/life" element={<Life />} />
            <Route path="/world" element={<World />} />
            <Route path="/news/*/:id" element={<Life />} />
            <Route path="/news/*" element={<News />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
