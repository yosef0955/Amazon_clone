import React, { useState, useEffect } from "react";
import style from "./Product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";




function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [flex, setFlex] = useState(false);  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data)
      setIsLoading(false)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }, []);

  return (
    <>
      {isLoading ? (<Loader />)  : (
        <section className={style.products_container}>
          {products?.map((singleProduct) => {
            return <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true}/> 
          })}
        </section>
      )}
    </>
  );
}

export default Product;
