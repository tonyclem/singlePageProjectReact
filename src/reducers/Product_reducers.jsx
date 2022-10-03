const Product_reducers = (state, action) => {
  if (action.type === "GET_PRODUCT_BEGIN") {
    return { ...state, product_loading: true };
  }
  if (action.type === "GET_PRODUCT_SUCCESS") {
    return { ...state, product_loading: false, products: action.payload };
  }
};

export default Product_reducers;
