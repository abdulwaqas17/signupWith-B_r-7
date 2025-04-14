import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';

// const products = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     image: "https://via.placeholder.com/150",
//     price: "$99.99",
//     description: "High-quality sound, noise cancellation, and long battery life."
//   },
//   {
//     id: 2,
//     name: "Smartwatch",
//     image: "https://via.placeholder.com/150",
//     price: "$149.99",
//     description: "Track your fitness, monitor your health, and stay connected."
//   },
//   {
//     id: 3,
//     name: "Bluetooth Speaker",
//     image: "https://via.placeholder.com/150",
//     price: "$79.99",
//     description: "Portable speaker with deep bass and crisp audio clarity."
//   }
// ];

const Carts = () => {

  const [carts,setCarts] = useState([]);


  useEffect(()=> {

    const fetchData = async ()=> {

      try {

        const res = await fetch("http://localhost:3000/get-carts")
        const data = await res.json();


        setCarts(data.carts)
        console.log(data);


      } catch (err) {
        console.log(err);
      }
    }


    fetchData();

  },[])

  console.log(carts.length);
  return (
    <>
    <Nav/>
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Heading Section */}
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Your Shopping Cart</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto px-4">
          Explore your selected products with full details and make your purchase with confidence.
        </p>
      </header>

      {/* Products Grid */}
      <main className="flex-grow py-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {carts.length > 0 ? carts.map(cart => (
            <div
              key={cart._id}
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
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          )) : 'No Carts found'}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          <p className="text-sm mt-2 text-gray-400">Designed with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Carts;


/*  
phely is thrn likhty thy
()=> {
  return ()
}

aur ager is thrn likho to kia return likne ki need nhe h
{products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg h-48 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-blue-600 font-medium mt-1">{product.price}</p>
              <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}




          
ye formData() kia h kia kam krta h, aur ye jo post request bhji h is me headers q nhe set kie
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
*/