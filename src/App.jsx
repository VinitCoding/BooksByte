import React from 'react'
import './App.css'
import Home from './components/Home'
import bg_img from './assets/bg_img.svg'
import Header from './components/Header'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import SuccessPage from './components/SuccessPage'

const App = () => {
  return (
    <div>
      <header className='bg-gray-100 scroll-smooth'>
        <Header />
      </header>
      <Routes>
        <Route path='/' element= {
        <div className="mt-1 bg-center bg-no-repeat bg-cover h-fit" style={{ backgroundImage: `url(${bg_img})` }}>
          <Home />
          <About />
        </div>
        }/>

        <Route path='/search' element ={<Search />}/>
        <Route path='/success' element={<SuccessPage />} />
      </Routes>

    </div>

  )
}

export default App