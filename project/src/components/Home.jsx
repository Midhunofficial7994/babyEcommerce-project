import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='bg-neutral-200 min-h-screen flex flex-col'>
      <div className='flex-grow flex items-center justify-center'>
        <div className='flex flex-col items-center md:items-start md:flex-row max-w-6xl p-6 mx-auto'>
          
          {/* Text Section */}
          <div className='text-center md:text-left mb-8 md:mb-0 md:mr-12'>
            <h1 className='text-4xl md:text-7xl font-bold text-gray-900 mb-4'>
              Baby Essential
              <span className='block text-xl md:text-3xl text-gray-700 mt-2'>
                Fashion & Nursery
              </span>
            </h1>

            {/* Shop Now Button */}
            <a
              href='/shop'
              className='bg-yellow-500 text-white text-lg font-semibold py-3 px-7 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 mt-4'
            >
              Shop Now
            </a>
          </div>

          {/* Image Section */}
          <div className='flex-shrink-0 mt-8 md:mt-0'>
            <img
              className='w-full max-w-md md:max-w-xl rounded-lg shadow-lg'
              src='https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-baby-img.png'
              alt='Baby'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
