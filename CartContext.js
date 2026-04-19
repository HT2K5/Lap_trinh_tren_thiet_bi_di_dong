import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favs, setFavs] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, {
        id: item.id,
        name: item.name,
        unit: item.unit,
        image: item.image,
        price: parseFloat(item.price) || 0,
        qty: 1,
      }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(p => p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p)
        .filter(p => p.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const addToFavs = (item) => {
    setFavs(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) return prev;
      return [...prev, {
        id: item.id,
        name: item.name,
        unit: item.unit,
        image: item.image,
        price: parseFloat(item.price) || 0,
      }];
    });
  };

  const removeFromFavs = (id) => {
    setFavs(prev => prev.filter(p => p.id !== id));
  };

  const total = cart.reduce(
    (sum, p) => sum + (parseFloat(p.price) || 0) * (p.qty || 0),
    0
  );

  return (
    <CartContext.Provider value={{
      cart,
      favs,
      total,
      addToCart,
      updateQty,
      removeFromCart,
      addToFavs,
      removeFromFavs,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);