import { useEffect, useState } from "react"

import ProductCard from "./ProductCard"

import Styles from "../styles/products.module.css"
import Structure from "../styles/structure.module.css"

function Products() {

  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setProducts(data)
      });
  }, [])

  return (
    <>
      <main className={Structure.body}>

        <div className={Styles.productContainer}>
          <h2>Products</h2>

          <div className={Styles.productList}>
            {
              loading 
              ? "Loading"
              : products.map(product => {
                  return (
                    <ProductCard 
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                    />
                  )
                })
            }
          </div>
        </div>

      </main>
    </>
  );
};

export default Products;
