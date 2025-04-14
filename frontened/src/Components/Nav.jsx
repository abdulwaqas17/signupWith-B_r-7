import React from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
      // logout logic here
      console.log('User logged out');
      alert('Logout Scccessfully');
      navigate('/')
    };

  return (
    <>
    {/* Navbar */}
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="text-xl font-bold text-blue-600" onClick={()=> navigate('/home')}>MyApp</div>
           <div className='flex gap-[35px] items-center'>
            <ul className='flex gap-[15px]'>
              <li className='cursor-pointer text-xl' onClick={()=> navigate('/profile')}>Profile</li>
              <li className='cursor-pointer text-xl' onClick={()=> navigate('/carts')}>Carts</li>
              <li className='cursor-pointer text-xl'>Help Us</li>
            </ul>
           <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all cursor-pointer"
            >
              Logout
            </button>
           </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav