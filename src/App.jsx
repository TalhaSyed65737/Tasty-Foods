import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Succes from'./Pages/Success'
import Error from './Pages/Error'
import Success from './Pages/Success'
import ProtectedRoute from './Components/ProtectedRoute'
import Hero from './Components/Hero'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Hero' element={<Hero/>}/>
        <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App