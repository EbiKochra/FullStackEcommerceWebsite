// Used to filter out the data for featured products

const ProductReducer = (state, action) => {


  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

      case "SET_API_DATA":
        const featureData = Array.isArray(action.payload.Products)
        ? action.payload.Products.filter((curElem) => curElem.featured === true)
        : [];
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};



export default ProductReducer;