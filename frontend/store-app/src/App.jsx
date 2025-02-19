import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [products, SetProducts] = useState([]);


  useEffect(() => {

    axios.get('http://localhost:8005/api/products')
      .then(response => {
        SetProducts(response.data)
        console.log(response)
      })
      .catch(error => console.log('Error fetching data (Front)', error))
  }, []);



  return (

    <>
      <h1 class=" mt-5 text-4xl font-extrabold text-center text-gray-900 mb-8">Welcome To My Store</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mb-10">
        {products.map(product => (
          <div key={product.id} class="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={product.image} alt={product.title} class="w-full h-56 object-fit object-center" />
            <div class="p-4">
              <h2 class="text-xl font-semibold text-gray-900 truncate">{product.name}</h2>
              <p class="text-sm text-gray-600 mt-2 mb-4 line-clamp-3">{product.description}</p>
              <span class="text-lg font-bold text-green-600">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
