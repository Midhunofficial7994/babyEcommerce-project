import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductModal = ({
  isOpen,
  onClose,
  value,
  isEditMode,
  refreshProducts,
}) => {
  const [productData, setProductData] = useState(
    value || {
      title: "",
      id: "",
      description: "",
      price: "",
      url: "",
      quantity: "",
      category: "",
    }
  );

  useEffect(() => {
    if (value) {
      setProductData(value);
    } else {
      setProductData({
        title: "",
        id: "",
        description: "",
        price: "",
        url: "",
        quantity: "",
        category: "",
      });
    }
  }, [value, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = isEditMode
      ? axios.put(
          `http://localhost:8000/products/${productData.id}`,
          productData
        )
      : axios.post("http://localhost:8000/products", productData);

    request
      .then(() => {
        refreshProducts();
        onClose();
        alert("Successfully added");
      })
      .catch((error) => console.log(error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 mb-24 overflow-y-auto h-3/4">
        <h2 className="text-2xl font-bold mb-4">
          {isEditMode ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">ID</label>
            <input
              type="text"
              name="id"
              value={productData.id}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <input
              type="text"
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">URL</label>
            <input
              type="url"
              name="url"
              value={productData.url}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
