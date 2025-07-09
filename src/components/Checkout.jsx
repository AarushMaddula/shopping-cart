import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import Styles from "../styles/checkout.module.css"

const Checkout = () => {

  const { items, setItems } = useOutletContext();
  const [ itemData, setItemData ] = useState([])

  useEffect(() => {

    async function fetchData() {
      const promises = (items ?? []).map(item =>
      fetch('https://fakestoreapi.com/products/' + item.id)
        .then(res => res.json())
        .then(data => ({ ...data, count: item.count }))
      );

      const results = await Promise.all(promises);

      setItemData(results);
    }

    fetchData();
  }, [])

  return (
    <> 
      <h1>My Shopping Cart</h1>

      <table className={Styles.table}>
        <thead className={Styles.tableHeader}>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>  
          {
            (itemData ?? []).map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.count}</td>
                  <td>${item.price}</td>
                </tr>
              )
            })
          }
        </tbody>

        <tfoot className={Styles.tableFooter}>
          <tr>
            <td>Total</td>
            <td>${itemData.reduce((p, i) => p + (+i.price * 100) * +i.count / 100, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Checkout;
