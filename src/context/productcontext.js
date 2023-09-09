// create a context
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer';
// import api from './data.json';

const AppContext = createContext();

const API = "https://livehostbackend-production.up.railway.app/api/products";
// const API = api;

const initialState ={
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

// provider

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"});
        try{
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error){
            dispatch({type: "API_ERROR"});
        }
    
    };

    // Api call for a single product

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({type: "SET_SINGLE_ERROR"});
        }
    };



// used to trigger the getProducts function
    useEffect(() => {
        getProducts(API);
    },[]);

    return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
    );
};

// Custom hooks

const useProductContext = () => {
    return  useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };



// consumer => useContext Hook