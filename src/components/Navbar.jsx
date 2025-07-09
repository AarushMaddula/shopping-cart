import { Link, useOutletContext } from "react-router-dom"

import Styles from "../styles/navbar.module.css"

import logo from "../assets/store.svg"
import cart from "../assets/cart.svg"

function Navbar({items}) {

    const numItems = (items ?? []).reduce((p, i) => p + i.count, 0);

    return (
        <nav className={Styles.nav}>
            <div>
                <div className={Styles.leftSideContainer}>
                    <img className={Styles.logo} src={logo} />
                    <h1>The Shopping Page</h1>
                </div>

                <div className={Styles.rightSideContainer}>
                    <ul className={Styles.links}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>

                    <div className={Styles.cartContainer}>
                        <Link to="/checkout">
                            <img className={Styles.cart} src={cart}/>
                        </Link>
                        {
                            numItems > 0 && (
                                <div className={Styles.cartStatus}>
                                    {numItems < 10 ? numItems : "9+"}
                                </div> 
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar