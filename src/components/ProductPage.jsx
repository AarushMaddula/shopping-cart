import Products from "./Products";

import Styles from "../styles/products.module.css"
import Structure from "../styles/structure.module.css"

function ProductPage() {

  return (
    
    <main className={Structure.body}>

      <div className={Styles.productContainer}>
        <h2>Products</h2>

        <Products/>
      
      </div>

    </main>
  );
};

export default ProductPage;
