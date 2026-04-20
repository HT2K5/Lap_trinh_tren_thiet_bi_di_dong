import React, { createContext, useContext, useState, useEffect } from "react";
import {
  saveCart,
  getCart,
  clearCart,
  saveOrder,
  saveFavs,
  getFavs,
} from "./storage";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      try {
        const [savedCart, savedFavs] = await Promise.all([
          getCart(),
          getFavs(),
        ]);
        setCart(savedCart);
        setFavs(savedFavs);
      } catch (e) {
        console.error("loadAll error:", e);
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  // Auto save cart
  useEffect(() => {
    if (!loading) saveCart(cart);
  }, [cart, loading]);

  // Auto save favs
  useEffect(() => {
    if (!loading) saveFavs(favs);
  }, [favs, loading]);

  const reloadCart = async () => {
    try {
      const saved = await getCart();
      setCart(saved);
    } catch (e) {
      console.error("reloadCart error:", e);
    }
  };

  // Reset toàn bộ state khi logout
  const resetCart = () => {
    setCart([]);
    setFavs([]);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          unit: item.unit,
          image: item.image,
          price: parseFloat(item.price) || 0,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(p => (p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p))
        .filter(p => p.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const checkout = async () => {
    try {
      const order = await saveOrder(cart, total);
      setCart([]);
      await clearCart();
      return order;
    } catch (e) {
      console.error("checkout error:", e);
    }
  };

  const addToFavs = (item) => {
    setFavs(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) return prev;
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          unit: item.unit,
          image: item.image,
          price: parseFloat(item.price) || 0,
        },
      ];
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
    <CartContext.Provider
      value={{
        cart,
        favs,
        total,
        loading,
        addToCart,
        updateQty,
        removeFromCart,
        checkout,
        reloadCart,
        resetCart,
        addToFavs,
        removeFromFavs,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);