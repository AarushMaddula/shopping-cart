import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react"

import Styles from "../styles/products.module.css"

import PropTypes from 'prop-types';

function ProductCard({ id, title, price, image }) {

    const { items, setItems } = useOutletContext();

    const numItems = items.find(e => e.id === id)?.count ?? 0;

    function setCount(num) {        
        const item = items.find(e => e.id === id)

        if (num > 0) {
            if (item) {
                setItems(items.map(e => e.id === id ? { id, count: num } : e))  
            } else {
                setItems([...items, { id, count: num }])
            }
        } else if (item) {
            setItems(items.filter(e => e.id !== id))
        }
                                   
    }

    return (
        <div className={Styles.product}>
            <div className={Styles.productInfo}>
                <div className={Styles.productImage}>
                    <img src={image}/>
                </div>
                <h2 className={Styles.productTitle}>{title}</h2>
            </div>

            <div>
                <h3 className={Styles.productPrice}>
                    {
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(price)
                    }
                </h3>

                <div>
                    {
                        numItems <= 0 
                        ? (
                            <button className={Styles.addButton} onClick={() => setCount(1)}>Add to Cart</button>
                        )
                        : (
                            <>
                                <button className={Styles.decrementButton} onClick={() => setCount(+numItems - 1)}>-</button>

                                <input className={Styles.countInput} type="number" value={+numItems} onChange={e => setCount(+e.target.value)}/>
                                
                                <button className={Styles.incrementButton} onClick={() => setCount(+numItems + 1)}>+</button>
                            </>
                        )
                    }
                </div>
            </div>

        </div>  
    )
}

ProductCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
}

export default ProductCard