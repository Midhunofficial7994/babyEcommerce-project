import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Productmodal from './Productmodal';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const fetchProducts = () => {
    axios.get("http://localhost:8000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (product) => {
    setSelectedProduct(product);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setIsEditMode(false);
  };

  const handleAddProduct = () => {
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/products/${id}`)
      .then(() => {
        fetchProducts();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='flex justify-between items-center mb-6'>
        <button
          className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600'
          onClick={handleBack}
        >
          Back
        </button>
        <div className='text-black font-bold text-3xl'>
          <h1>Product</h1>
        </div>
      </div>
      <div className='flex justify-center p-5'>
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md border border-gray-400 rounded-md px-4 py-2 mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='flex justify-center mb-6'>
        <button
          className='rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-700'
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
            <img
              className="w-full h-64 object-cover mt-4"
              src={item.url || 'https://via.placeholder.com/300'} // Use a placeholder image if none is provided
              alt={item.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
            </div>
            <div className='flex justify-between p-4 bg-gray-50'>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={() => handleRowClick(item)}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {isModalOpen && (
          <Productmodal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            value={selectedProduct} 
            isEditMode={isEditMode}
            refreshProducts={fetchProducts}
          />
        )}
      </div>
    </div>
  );
}

export default Product;
