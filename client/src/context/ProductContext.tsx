// ProductContext.tsx
import React, { createContext, useContext, useState,useEffect,ReactNode } from 'react';


const ProductContext = createContext(undefined);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const[reviews,setReviews]=useState([]);
  const [loaded, setLoeaded] = useState(true);
  const [err, setError] = useState("");

  const addProduct = (product) => {
    setProducts(prev => [...prev, product]);
  };

  



 const loadInitial = async (setter, url) => {
    const result = await fetch(url)
    const data = await result.json()
    setter(data)
 }

 const loadInitialTwo = async(setter,url) =>{
    const result = await fetch(url)
    const data = await result.json()
    setter(data)
 }

    useEffect(() => {
      loadInitial(setProducts, "http://localhost:3000/products")
      loadInitialTwo(setReviews, "http://localhost:3000/products/1/review")
  }, []);


  return (
    <ProductContext.Provider value={{ products, addProduct, reviews, setReviews }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProductContext must be used within ProductProvider");
  return context;
};
