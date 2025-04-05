import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
    // logout logic here
    console.log('User logged out');
    alert('Logout Scccessfully');
    navigate('/')
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-600">MyApp</div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to MyApp</h1>
          <p className="text-lg text-gray-600 mb-6">
            Build modern and responsive web applications with ease. Fast, clean, and beautiful UI powered by Tailwind CSS.
          </p>
          <a href="#features" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Responsive Design</h3>
            <p className="text-gray-600">Optimized for all devices — from mobile to desktop with seamless responsiveness.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Fast Development</h3>
            <p className="text-gray-600">Utilize utility-first Tailwind CSS classes to build faster and cleaner UI.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Easy Integration</h3>
            <p className="text-gray-600">Easily connect with APIs, databases, and other tools to extend functionality.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          <p className="text-sm mt-2 text-gray-400">Designed with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
