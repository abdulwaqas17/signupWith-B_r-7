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
import Page404 from './pages/Page404'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>


      <Routes>

        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/' element={
        
            <Home />
        
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

<Route path='*' element={<Page404/>} />



      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
