import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Form from './components/Form'
import Redirect from './components/Redirect'
import Team from './components/Team'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <div className=''>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/team' element={<Team/>}/>
        <Route path='/register' element={<Form/>}/>

        {/* Redirection Settings */}
        <Route path='/redirect/' element={<Redirect />} />
        <Route path='/redirect/:to_url' element={<Redirect />} />

        {/* 404 Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App