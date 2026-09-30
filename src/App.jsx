import React from 'react'
import './App.css'
import Home from './components/Home'
import bg_img from './assets/bg_img.svg'
import Header from './components/Header'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import SuccessPage from './components/SuccessPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
        <Header />
      <Routes>
        <Route path='/' element= {
        <div className='flex flex-col'>
          <Home />
          <About />
        </div>
        }/>

        <Route path='/search' element ={<Search />}/>
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App