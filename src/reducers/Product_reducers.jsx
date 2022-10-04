const Product_reducers = (state, action) => {
  if (action.type === "GET_PRODUCT_BEGIN") {
    return { ...state, product_loading: true };
  }

  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const productCategory = action.payload.filter((i) => i.categories === true);
    console.log(productCategory);

    return {
      ...state,
      product_loading: false,
      products: action.payload,
      productCategory,
    };
  }
  if (action.type === "GET_PRODUCT_ERROR") {
    return { ...state, product_loading: false, product_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default Product_reducers;
