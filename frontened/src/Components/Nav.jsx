import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: lucide-react ya heroicons use kar sakte ho

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    console.log('User logged out');
    window.localStorage.removeItem('token');
    alert('Logout Successfully');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>
            MyApp
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-[35px] items-center">
            <ul className="flex gap-[15px]">
              <li className="cursor-pointer text-xl" onClick={() => navigate('/profile')}>Profile</li>
              <li className="cursor-pointer text-xl" onClick={() => navigate('/carts')}>Carts</li>
              <li className="cursor-pointer text-xl">Help Us</li>
            </ul>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 mt-2">
            <ul className="flex flex-col space-y-2">
              <li className="cursor-pointer text-lg" onClick={() => { navigate('/profile'); setIsOpen(false); }}>Profile</li>
              <li className="cursor-pointer text-lg" onClick={() => { navigate('/carts'); setIsOpen(false); }}>Carts</li>
              <li className="cursor-pointer text-lg">Help Us</li>
            </ul>
            <button
              onClick={() => { handleLogout(); setIsOpen(false); }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all w-full cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
