
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MovieSearcher from './pages/MovieSearch'
import Home from './pages/Home';
import Words from './pages/Words';
import './styles/_app.scss'

function App() {

  return (

    <BrowserRouter>
      <div className="app_container">

        <main className="main_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieSearcher />} />
            <Route path="/words" element={<Words />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>

  )
}

export default App