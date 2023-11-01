import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

// cart storage key
const STORAGE_KEY = "cartItems";

export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  const handleAddItem = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const existingItemIndex = updatedItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedItem = { ...updatedItems[existingItemIndex] };
        updatedItem.quantity += 1;
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return newItems;
    });
  };

  function getCartItemsFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return items ? items : [];
  }

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        handleAddItem,
        handleRemoveItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
