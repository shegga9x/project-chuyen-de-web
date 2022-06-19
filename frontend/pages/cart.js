import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTrash,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import { getSession, useSession } from 'next-auth/client';
import instance from "../helpers/axiosConfig";
import axios from "axios";
import { useState, useRef } from 'react';

export default function Cart(props) {

  const [cart, setCart] = useState(props.cart);

  const getTotalCart = () => {
    let result = 0;
    cart.forEach(ele => {
      result += (ele.product.price * ele.quantity)
    })
    return result.toFixed(2);
  }

  const addToCart = async (quantity, product) => {
    disableClick(product.idProduct);
    const res = await instance.post(`http://localhost:4000/api/cart/addToCart`, { product, quantity: quantity }).catch(() => { alert("không thể thêm vào cart") });
    if (res) {
      const response = await instance.get("http://localhost:4000/api/cart/getCartByIdCustomer", { params: { idCustomer: props.user.id } });
      if (response) {
        removeDisableClick(product.idProduct);
        setCart(response.data);
      }
    }
  }

  const deletCart = async (quantity, product) => {
    const res = await instance.post(`http://localhost:4000/api/cart/deleteCartItem`, { product, quantity: quantity }).catch(() => { alert("không thể delete product") });
    if (res) {
      const response = await instance.get("http://localhost:4000/api/cart/getCartByIdCustomer", { params: { idCustomer: props.user.id } });
      if (response) {
        setCart(response.data);
      }
    }
  }

  const disableClick = (productId) => {
    let ele1 = document.getElementById(productId);
    ele1.style.pointerEvents = 'none';
  }

  const removeDisableClick = (productId) => {
    let ele1 = document.getElementById(productId);
    ele1.style.removeProperty('pointer-events');
  }

  // return <h1>{JSON.stringify(cart)}</h1>
  return (
    <>
      <Head>
        <title>
          Groover - Online Shopping for Electronics, Apparel, Computers, Books,
          DVDs & more
        </title>
      </Head>
      <Layout isPageCart={true}>
        {/* Page Introduction Wrapper */}
        <div className="page-style-a">
          <div className="container">
            <div className="page-intro">
              <h2>Cart</h2>
              <ul className="bread-crumb">
                <li className="has-separator">
                  <i>
                    <FontAwesomeIcon icon={faHome} />
                  </i>
                  <a href="home.html">Home</a>
                </li>
                <li className="is-marked">
                  <a href="cart.html">Cart</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Page Introduction Wrapper /- */}
        {/* Cart-Page */}
        <div className="page-cart u-s-p-t-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <>
                  {/* Products-List-Wrapper */}
                  <div className="table-wrapper u-s-m-b-60">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody >
                        {cart.map((element, i) => {
                          return (
                            <tr key={i} >
                              <td>
                                <div className="cart-anchor-image">
                                  <a href="single-product.html">
                                    <img
                                      src="/static/images/product/product@1x.jpg"
                                      alt="Product"
                                    />
                                    <h6>{element.product.name}</h6>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="cart-price">{element.product.price}</div>
                              </td>
                              <td>
                                <div className="cart-quantity">
                                  <div className="quantity" id={element.product.idProduct}>
                                    <input
                                      type="text"
                                      className="quantity-text-field"
                                      defaultValue={element.quantity}
                                    />
                                    <a className="plus-a" data-max={1000} onClick={() => { addToCart(1, element.product) }}>
                                      +
                                    </a>
                                    <a className="minus-a" data-min={1} onClick={() => { addToCart(-1, element.product) }}>
                                      -
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="action-wrapper">
                                  <button className="button button-outline-secondary fas fa-sync" >
                                    <i className="F-icon" >
                                      <FontAwesomeIcon icon={faSync} />
                                    </i>
                                  </button>
                                  <button className="button button-outline-secondary fas fa-trash" >
                                    <i className="F-icon" onClick={() => { deletCart(element.quantity, element.product) }} >
                                      <FontAwesomeIcon style={{ margin: '0' }} icon={faTrash} />
                                    </i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* Products-List-Wrapper /- */}
                  {/* Coupon */}
                  <div className="coupon-continue-checkout u-s-m-b-60">
                    <div className="coupon-area">
                      <h6>Enter your coupon code if you have one.</h6>
                      <div className="coupon-field">
                        <label className="sr-only" htmlFor="coupon-code">
                          Apply Coupon
                        </label>
                        <input
                          id="coupon-code"
                          type="text"
                          className="text-field"
                          placeholder="Coupon Code"
                        />
                        <button type="submit" className="button">
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                    <div className="button-area">
                      <a href="shop-v1-root-category.html" className="continue">
                        Continue Shopping
                      </a>
                      <a href="checkout.html" className="checkout">
                        Proceed to Checkout
                      </a>
                    </div>
                  </div>
                  {/* Coupon /- */}
                </>
                {/* Billing */}
                <div className="calculation u-s-m-b-60">
                  <div className="table-wrapper-2">
                    <table>
                      <thead>
                        <tr>
                          <th colSpan={2}>Cart Totals</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-0">Subtotal</h3>
                          </td>
                          <td>
                            <span className="calc-text">${getTotalCart()}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-8">Shipping</h3>
                            <div className="calc-choice-text u-s-m-b-4">
                              Flat Rate: Not Available
                            </div>
                            <div className="calc-choice-text u-s-m-b-4">
                              Free Shipping: Not Available
                            </div>
                            <a
                              data-toggle="collapse"
                              href="#shipping-calculation"
                              className="calc-anchor u-s-m-b-4"
                            >
                              Calculate Shipping
                            </a>
                            <div className="collapse" id="shipping-calculation">
                              <>
                                <div className="select-country-wrapper u-s-m-b-8">
                                  <div className="select-box-wrapper">
                                    <label
                                      className="sr-only"
                                      htmlFor="select-country"
                                    >
                                      Choose your country
                                    </label>
                                    <select
                                      className="select-box"
                                      id="select-country"
                                      defaultValue={'default'}
                                    >
                                      <option value="default">
                                        Choose your country...
                                      </option>
                                      <option value="">
                                        United Kingdom (UK)
                                      </option>
                                      <option value="">
                                        United States (US)
                                      </option>
                                      <option value="">
                                        United Arab Emirates (UAE)
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="select-state-wrapper u-s-m-b-8">
                                  <div className="select-box-wrapper">
                                    <label
                                      className="sr-only"
                                      htmlFor="select-state"
                                    >
                                      Choose your state
                                    </label>
                                    <select
                                      className="select-box"
                                      id="select-state"
                                      defaultValue={'default'}
                                    >
                                      <option value="default">
                                        Choose your state...
                                      </option>
                                      <option value="">Alabama</option>
                                      <option value="">Alaska</option>
                                      <option value="">Arizona</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="town-city-div u-s-m-b-8">
                                  <label
                                    className="sr-only"
                                    htmlFor="town-city"
                                  />
                                  <input
                                    type="text"
                                    id="town-city"
                                    className="text-field"
                                    placeholder="Town / City"
                                  />
                                </div>
                                <div className="postal-code-div u-s-m-b-8">
                                  <label
                                    className="sr-only"
                                    htmlFor="postal-code"
                                  />
                                  <input
                                    type="text"
                                    id="postal-code"
                                    className="text-field"
                                    placeholder="Postcode / Zip"
                                  />
                                </div>
                                <div className="update-totals-div u-s-m-b-8">
                                  <button className="button button-outline-platinum">
                                    Update Totals
                                  </button>
                                </div>
                              </>
                            </div>
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-0" id="tax-heading">
                              Tax
                            </h3>
                            <span> (estimated for your country)</span>
                          </td>
                          <td>
                            <span className="calc-text">$0.00</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-0">Total</h3>
                          </td>
                          <td>
                            <span className="calc-text">${getTotalCart()}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Billing /- */}
              </div>
            </div>
          </div>
        </div>
        {/* Cart-Page /- */}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (session) {
    // console.log(session.user.id)
    const response = await axios.get("http://localhost:4000/api/cart/getCartByIdCustomer", { params: { idCustomer: session.user.id }, headers: { Authorization: `Email ${session.user.email}` } })
    // console.log(response)
    return {
      props: {
        cart: response.data,
        user: session.user
      },
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: "/account"
    }
  }
}