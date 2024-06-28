import React from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import './cart.css'
import Product from './Product';
import { IoTrashBin } from "react-icons/io5";
function Cart({ cart, setcart }) {
    // increase quantity
    const incqty = (Product) => {

        const exist = cart.find((x) => {
            return x.id === Product.id
        })
        setcart(cart.map((element) => {
            return element.id === Product.id ? { ...exist, qty: exist.qty + 1 } : element
        }
        ))
    }

    // decrease quantity
    const decqty = (Product) => {

        const exist = cart.find((x) => {
            return x.id === Product.id
        })
        setcart(cart.map((element) => {
            return element.id === Product.id ? { ...exist, qty: exist.qty - 1 } : element
        }
        ))
    }
    // remove  product
    const removeproduct = (Product) => {

        const exist = cart.find((x) => {
            return x.id === Product.id
        })

        if (exist.qty > 0) {
            setcart(cart.filter((x) => {
                return x.id !== Product.id
            }))
        }
    }
    //total price
    const totalprice = cart.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <div>
            <div className="cartcontainer">
                {
                    cart.length === 0 ?
                        <div className="emptycart">
                            <h2>
                                Cart is Empty
                            </h2>
                            <Link className='emptybtn' to="/">Shop</Link>
                        </div> :

                        <div className="contant">
                            {

                                cart.map((currelement) => {
                                    return (
                                        <div className="cart_item" key={customElements.id}>
                                            <div className="img-box">
                                                <img src={currelement.img} alt={currelement.Title} />
                                            </div>
                                            <div className="detail">
                                                <div className="info">
                                                    <h4>{currelement.cat}</h4>
                                                    <h3>{currelement.Title}</h3>
                                                    <p>₹ {currelement.price}</p>
                                                    <div className="qty">
                                                        <button className='incqty' onClick={() => incqty(currelement)}>+</button><input type="text" value={currelement.qty} />{currelement.qty == 0 ? null : <button className='incqty' onClick={() => decqty(currelement)}>-</button>}
                                                        <h4 className='subtotal'>sub total: {currelement.qty * currelement.price}</h4>
                                                    </div>
                                                </div>
                                                <div className="close">
                                                <button onClick={() => removeproduct(currelement)}><FaRegWindowClose /></button>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            <h2 className='totalprice'>Total ₹ {totalprice}</h2><br />
                            <Link to="/feedback" className='checkout'>Checkout</Link>

                        </div>
                }
            </div>

        </div>
    )
}

export default Cart
