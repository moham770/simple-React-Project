import React, { useEffect, useState } from "react";
import { Product } from "./Product";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then(res => res.json())
      .then(data =>setProducts(data) );
  };

  return (
    <>
      <h2 className="p-4 text-center">Our Products</h2>
      <div className="container">
      <button
                  className="mx-2 text-white p-2 btn btn-info"
                  onClick={() => {
                    getProducts();
                  }}
                >
                
                  All
                </button>
        {categories.map((cat) => {
          return (
            <>
            
              <div className="d-inline-block mx-auto  mb-5" key={cat}>
                <button
                  className="mx-2 text-white p-2 btn btn-info"
                  onClick={() => {
                    getProductInCategory(cat);
                  }}
                >
                
                  {cat}
                </button>
              </div>
            </>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
