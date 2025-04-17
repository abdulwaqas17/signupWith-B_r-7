import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Carts from './pages/Carts'
import Profile from './pages/Profile'
import ProtectedRoutes from './Components/ProtectedRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>


      <Routes>

        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/home' element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        } />

        <Route path='/carts' element={
          <ProtectedRoutes>
            <Carts/>
          </ProtectedRoutes>
        } />
        
        <Route path='/profile' element={
          <ProtectedRoutes>
            <Profile/>
          </ProtectedRoutes>
        } />


      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
