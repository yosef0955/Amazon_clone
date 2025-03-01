import React, { useState, useEffect } from "react";
import style from "./Result.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Components/Loader/Loader";

function Result() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  const decodedCategoryName = decodeURIComponent(categoryName);

  useEffect(() => {
    setIsLoading(true); // Ensure loading state is set before fetching
    axios
      .get(`${productUrl}/products/category/${decodedCategoryName}`) 
      .then((res) => {
        console.log("API Response", res.data);
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("API error", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <h1 style={{ padding: "30px" }}>Results</h1>
            <p style={{ padding: "30px" }}>Category / {decodedCategoryName}</p>
            <hr />
            <div className={style.products_container}>
              {results?.map((product) => (
                <ProductCard key={product.id} product={product} renderAdd={true}/>
              ))}
            </div>
          </section>
        )}
      </>
    </LayOut>
  );
}

export default Result;
