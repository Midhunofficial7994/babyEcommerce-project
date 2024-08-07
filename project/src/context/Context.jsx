import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create a context
const ProductContext = createContext();

const Context = ({ children }) => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);
  const [usercurrent, setUsercurrent] = useState([]);
  const [cart, setCart] = useState([]);
  

  const [isLogged, setIslogged] = useState(false);
  const id = localStorage.getItem("id");
  // console.log(id)
  // console.log(cart)
  useEffect(() => {
    if (id) {
      setIslogged(true);
    }
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/user/${id}`)
      .then((res) => {
        // console.log(res.data.cart);
        setCart(res.data.cart);
      })
      .catch((error) => console.log(error));
  });
  useEffect(() => {
    axios.get(`http://localhost:8000/user/${id}`)
      .then((res) => {
        // console.log(res.data.cart);
        setUsercurrent(res.data);
      })
      .catch((error) => console.log(error));
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        setUser(res.data);
        // console.log(user);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);
  const addToCart = (item) => {
    // console.log(item)
    const findedcart = cart.find((cartitem) => item.id === cartitem.id);
    if (findedcart) {
      // alert(`item alredy added`)
      return;
    } else {
      const updatedcart = [...cart, item];
      axios
        .patch(`http://localhost:8000/user/${id}`, { cart: updatedcart })
        .then((res) => console.log(`success`))
        .catch((error) => console.log(`error`));
    }
  };
  const removefromcart = (itemid) => {
    const removedata = cart.filter((cartitem) => cartitem.id !== itemid);
    axios
      .patch(`http://localhost:8000/user/${id}`, { cart: removedata })
      .then((res) => console.log(`success`))
      .catch((error) => console.log(`error`));
    console.log(removedata);
  };
  const incrementQuantity = (itemId) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );

      axios
        .patch(`http://localhost:8000/user/${id}`, { cart: newCart })
        .then((res) => {
          console.log("success");
        })
        .catch((error) => {
          console.error("Error updating cart:", error);
        });

      return newCart;
    });
  };

  const decrementQuantity = (itemId) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      );

      axios
        .patch(`http://localhost:8000/user/${id}`, { cart: newCart })
        .then((res) => {
          console.log("Cart updated successfully");
        })
        .catch((error) => {
          console.error("Error updating cart:", error);
        });

      return newCart;
    });
  };
 
 
  return (
    <ProductContext.Provider
      value={{
        items,
        addToCart,
        user,
        setIslogged,
        isLogged,
        cart,
        removefromcart,
        id,
        decrementQuantity,
        incrementQuantity,
        usercurrent,
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, Context };
