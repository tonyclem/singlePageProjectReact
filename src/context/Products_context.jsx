import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import initialState from "../initialStates/ProductInitialState";
import { products_url as url } from "../utils/Constants";
import reducer from "../reducers/Product_reducers";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: "GET_PRODUCT_BEGIN" });
    try {
      const response = await axios.get(url);
      const products = response.data.product;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const values = {
    ...state,
  };
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
