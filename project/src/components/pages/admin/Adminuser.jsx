// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Usermodal from '../Adminhome/modal/Usermodal';

// const Userlist = () => {
//   const [list, setList] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:8000/users')
//       .then(res => setList(res.data))
//       .catch(error => console.log(error));
//   }, []);

 

//   const handleRowClick = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//   };


//   const handleDelete = (userId) => {
//     axios.delete(http://localhost:8000/users/${userId})
//       .then(response => {
//         setList(list.filter(user => user.id !== userId));
//       })
//       .catch(error => console.log(error));
//   };
  
//   return (
//     <div className="p-4 md:w-16">
      
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr className="border-b border-black bg-gray-400">
//             <th className="py-2 px-4">ID</th>
//             <th className="py-2 px-4">Name</th>
//             <th className="py-2 px-4">Email</th>
//             <th className="py-2 px-4">Orders</th>
//             <th className="py-2 px-4">Cart</th>
//             <th className="py-2 px-4">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((item) => (

//             <tr 
//               key={item.id} 
              
//               className="border-b cursor-pointer hover:bg-gray-100 text-center border-gray-400"
//             >
//               <td className="py-2 px-4 text-black">{item.id}</td>
//               <td className="py-2 px-4 text-black">{item.name}</td>
//               <td className="py-2 px-4 text-black">{item.email}</td>
              
//               <td className="py-2 px-4">
//               <button className="bg-green-400 text-black p-2 rounded-lg font-bold  px-3 "> 
//                   ViewOrder
//                 </button>
//                 </td>
//                 <td className="py-2 px-4">
                
//                 <button 
//                   className=" bg-yellow-400 p-2 rounded-lg font-bold px-5" 
                  
//                   onClick={() => handleRowClick(item)}
//                 >ViewCart
//                 </button>
//               </td>
//                 <td className="py-2 px-4">
//                 <button className="bg-red-500 text-black p-2 rounded-lg font-bold px-6" onClick={()=>handleDelete(item.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
        
//           ))}
//         </tbody>
//       </table>
//       {selectedUser && (
//         <Usermodal 
//           isOpen={isModalOpen} 
//           onClose={handleCloseModal} 
//           user={selectedUser} 
//         />
//       )}
//     </div>
//   );
// };

// export default Userlist;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from './Usermodal';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Userlist = () => {
  const [list, setList] = useState([]);
  const [usersearch, setUserSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios.get('http://localhost:8000/user')
      .then(res => setList(res.data))
      .catch(error => console.log(error));
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleOrderClick = (user) => {
    setSelectedUser(user);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedUser(null);
  };

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:8000/user/${userId}`)
      .then(response => {
        setList(list.filter(user => user.id !== userId));
      })
      .catch(error => console.log(error));
  };

  const UserData = list.filter(item =>
    item.name.toLowerCase().includes(usersearch.toLowerCase()) ||
    item.id.toLowerCase().includes(usersearch.toLowerCase()) ||
    item.email.toLowerCase().includes(usersearch.toLowerCase())
  );

  const handleBack = () => {
    navigate(-1); 
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
        <h1 className='text-black font-bold text-3xl'>User Details</h1>
      </div>
      <div className='flex justify-center p-5'>
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md border border-gray-400 rounded-md px-4 py-2 mb-6"
          value={usersearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </div>
    
      <div className="p-4 w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b bg-gray-300">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Cart</th>
              <th className="py-2 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((item) => (
              <tr 
                key={item.id} 
                className="border-b cursor-pointer hover:bg-gray-100 text-center"
              >
                <td className="py-2 px-4 text-black">{item.id}</td>
                <td className="py-2 px-4 text-black">{item.name}</td>
                <td className="py-2 px-4 text-black">{item.email}</td>
                <td className="py-2 px-4">
                  <button 
                    className="bg-yellow-400 text-white p-2 rounded-lg font-bold hover:bg-yellow-500" 
                    onClick={() => handleOrderClick(item)}
                  >
                    View Cart
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button 
                    className="bg-red-500 text-white p-2 rounded-lg font-bold hover:bg-red-600" 
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {selectedUser && (
          <Modal 
            isOpen={isOrderModalOpen} 
            onClose={handleCloseOrderModal} 
            user={selectedUser} 
          />
        )}
      </div>
    </div>
  );
};

export default Userlist;
