import React from 'react';
import { HiShoppingCart, HiUserGroup } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('id'); 
    

    
    navigate('/signin');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6" style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/patterns/wood_pattern.png')" }}>
      <div className="container mx-auto max-w-screen-lg">
        {/* Header */}
        <header className="bg-white shadow-lg p-6 rounded-lg mb-6 flex items-center justify-between relative overflow-hidden">
          {/* Logo */}
          <img
            src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
            alt="logo"
            className="w-40 h-auto uppercase"
          />

          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Logout
          </button>
        </header>

        {/* Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Details */}
          <Link to='/adminproduct'>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixid=MXwyNzEyNzF8MHwxfGFsbHwxfHx8fHx8fHwxNjE1NzQ3NzE5&ixlib=rb-1.2.1&w=1000" 
                alt="Baby Products" 
                className="absolute top-0 right-0 w-1/3 h-full object-cover opacity-30"
              />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <HiShoppingCart className="text-green-500 text-4xl mr-3" />
                  <h2 className="text-xl font-semibold">Product Details</h2>
                </div>
                <p className="text-gray-600">Manage and view all products.</p>
              </div>
            </div>
          </Link>
          
          {/* User Details */}
          <Link to='/adminuser'>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixid=MXwyNzEyNzF8MHwxfGFsbHwxfHx8fHx8fHwxNjE1NzQ3NzE5&ixlib=rb-1.2.1&w=1000" 
                alt="User Management" 
                className="absolute top-0 right-0 w-1/3 h-full object-cover opacity-30"
              />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <HiUserGroup className="text-blue-500 text-4xl mr-3" />
                  <h2 className="text-xl font-semibold">User Details</h2>
                </div>
                <p className="text-gray-600">Manage and view all users.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
