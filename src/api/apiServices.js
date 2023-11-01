import { ITEMS } from "../utils/apiRoutes";
import api from "./api";

// GET => products
const getProducts = async () => {
  try {
    const response = await api.get(ITEMS);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// POST => ADD NEW PRODUCT
const addNewProduct = async (productData) => {
  try {
    const response = await api.post(ITEMS, productData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// DELETE => product
const deleteProduct = async (productId) => {
  try {
    const response = await api.delete(ITEMS + productId);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export { getProducts, addNewProduct, deleteProduct };
