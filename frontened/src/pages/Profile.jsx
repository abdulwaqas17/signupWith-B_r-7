import React, { useState } from 'react';
import Nav from '../Components/Nav';

const initialCarts = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/150",
    price: "$99.99",
    description: "High-quality sound, noise cancellation, and long battery life."
  }
];

const UserProfile = () => {
  const [carts, setCarts] = useState(initialCarts);
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    price: '',
    description: ''
  });

  const handleChange = (e) => {

    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // prev ka matlab porni state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('image', formData.image);
  
    try {
      const res = await fetch("http://localhost:3000/add-cart", {
        method: "POST",
        body: formDataToSend
      });
  
      const data = await res.json();
      console.log("Upload success:", data);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };
  

  const handleCancel = () => {
    setFormData({ name: '', image: null, price: '', description: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Main Layout */}

<Nav/>

      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* User Profile Section */}
        <section className="bg-white shadow rounded-xl p-6">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="User"
              className="mx-auto rounded-full w-24 h-24 mb-4"
            />
            <h1 className="text-3xl font-bold text-blue-600">John Doe</h1>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </section>

        {/* Add to Cart Form */}
        <section className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add Product to Cart</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-3 border rounded-lg"
              rows="4"
              required
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button type="button" onClick={handleCancel} className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition">
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* Carts Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Carts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {carts.map(cart => (
            <div
              key={cart.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={cart.image}
                alt={cart.name}
                className="rounded-lg h-48 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{cart.name}</h2>
              <p className="text-blue-600 font-medium mt-1">{cart.price}</p>
              <p className="text-gray-600 mt-2 flex-grow">{cart.description}</p>
            </div>
          ))}
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

export default UserProfile;
