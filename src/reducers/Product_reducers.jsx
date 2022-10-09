const Product_reducers = (state, action) => {
  if (action.type === "GET_PRODUCT_BEGIN") {
    return { ...state, product_loading: true };
  }

  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const productCategory = action.payload.filter(
      (category) => category.categories === true
    );

    const productScrollImages = action.payload.filter(
      (scroll) => scroll.scrollImages === true
    );

    const productCarouselImages = action.payload.filter(
      (carousel) => carousel.carouselImage === true
    );

    const productBannerImages = action.payload.filter(
      (banner) => banner.bannerImages === true
    );

    const newProductsImages = action.payload.filter(
      (products) => products.newProducts === true
    );

    const womanSuitImages = action.payload.filter(
      (products) => products.womanSuits === true
    );

    return {
      ...state,
      product_loading: false,
      products: action.payload,
      productCategory,
      productScrollImages,
      productCarouselImages,
      productBannerImages,
      newProductsImages,
      womanSuitImages,
    };
  }
  if (action.type === "GET_PRODUCT_ERROR") {
    return { ...state, product_loading: false, product_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default Product_reducers;
