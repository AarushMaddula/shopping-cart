import { useEffect, useState } from "react"

import Styles from "../styles/products.module.css"
import ProductCard from "./ProductCard"

const useProductData = () => {

  const [productData, setProductData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Server Error!")
        }

        return response.json();
      })
      .then(data => setProductData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
    }, [])
    
  return { productData, loading, error }
}

function Products() {

  const { productData, loading, error } = useProductData();

  if (loading) return <p>Loading...</p>
  if (error) return <p>A network error was encountered</p>

  return (
    <div className={Styles.productList}>
      {
        productData.map(product => {
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
  );
};

export default Products;
