import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTrash, faSync, } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import { getSession } from 'next-auth/client';
import instance from '../helpers/axiosConfig';
import axios from "axios";
import { useState, useEffect } from 'react';
import { changeRoute } from "../helpers/customFunction/changeRoute";
import { useRouter } from "next/router";
import PhoneOTPProgress from "../components/cart/phoneOTPProgress";
import useTrans from "../helpers/customHook/useTrans";

export default function Cart(props) {

  const trans = useTrans();
  const router = useRouter();
  const [cart, setCart] = useState(props.cart);
  const [shippingTypeList, setShippingTypeList] = useState([]);
  const [shippingPriceList, setShippingPriceList] = useState(null);
  const [openPhoneOTPProgress, setOpenPhoneOTPProgress] = useState(false);


  const resetAll = () => {
    //Phone OTP Progress
    // document.getElementsByClassName('PhoneNumber')[0].value = "";
    document.getElementsByClassName('smsNumber')[0].value = "";
  }

  const closeModal = () => {
    setOpenPhoneOTPProgress(false);
    document.body.classList.toggle('modal-visibile');
    const model = document.getElementsByClassName('modal-load')[0];
    model.classList.toggle('visible');
    resetAll();
  }

  const openModal = () => {
    document.body.classList.toggle('modal-visibile');
    const model = document.getElementsByClassName('modal-load')[0];
    model.classList.toggle('visible');
    setOpenPhoneOTPProgress(true);
  }

  const getTotalCart = () => {
    if (shippingPriceList != null) {
      let result = 0;
      cart.forEach(ele => {
        result = result + (ele.product.price * ele.quantity) + parseInt(shippingPriceList.get(ele.product.idProduct + "").split("-")[0]);
      })
      return result.toFixed(2);
    }
    return 0;
  }

  const onlyNumberKey = (evt) => {
    const filteredInput1 = evt.target.value.replace(/(^0)/, "");
    const filteredInput2 = filteredInput1.replace(/[^0-9]+/g, "");
    evt.target.value = filteredInput2;
    // evt.target.value.replace(/[^0-9]+/g, "");
  }

  const changeQuantityCart = async (event, currentQuantity, product) => {
    const target = event.target;
    if (target.value == "" || target.value == currentQuantity) {
      target.value = currentQuantity;
    } else {
      disableClick(product.idProduct);

      const res = await instance().post(`http://localhost:4000/api/cart/updateProduct`, { product, quantity: target.value })
        .catch((err) => {
          console.log(err);
          removeDisableClick(product.idProduct);
          if (err.message != "Network Error") {
            target.value = currentQuantity;
            alert(err.response.data.message);
          }
        });
      if (res) {
        const response = await instance().get("http://localhost:4000/api/cart/getCartByIdCustomer", { params: { idCustomer: props.user.id } });
        if (response) {
          removeDisableClick(product.idProduct);
          setCart(response.data);

          const ghnServiceTypeRequests = [];
          shippingTypeList.forEach(element => {
            ghnServiceTypeRequests.push({ shopDTO: element.shopDTO, ghnServiceModels: element.ghnServiceModels[0] })
          });
          const data = JSON.parse(JSON.stringify(response.data))
          data.forEach(function (cartItem) { delete cartItem.product.imgUrl });
          const calFeeRequest = { cartItemDTOsItemResponses: data, ghnServiceTypeRequests: ghnServiceTypeRequests };
          const responseShipServiceFee = await instance().post("http://localhost:4000/api/ghn/calculateFee", calFeeRequest)
          const map = new Map(Object.entries(responseShipServiceFee.data));
          setShippingPriceList(map)
        }
      }
    }
  }

  const addToCart = async (quantity, currentQuantity, product) => {
    const target = document.getElementById(`product-id-${product.idProduct}`);
    disableClick(product.idProduct);
    const res = await instance().post(`http://localhost:4000/api/cart/addToCart`, { product, quantity: quantity })
      .catch((err) => {
        removeDisableClick(product.idProduct);
        if (err.message != "Network Error") {
          target.value = currentQuantity;
          alert(err.response.data.message);
        }
      });
    if (res) {
      const response = await instance().get("http://localhost:4000/api/cart/getCartByIdCustomer", { params: { idCustomer: props.user.id } });
      if (response) {
        removeDisableClick(product.idProduct);
        setCart(response.data);

        const ghnServiceTypeRequests = [];
        shippingTypeList.forEach(element => {
          ghnServiceTypeRequests.push({ shopDTO: element.shopDTO, ghnServiceModels: element.ghnServiceModels[0] })
        });
        const data = JSON.parse(JSON.stringify(response.data))
        data.forEach(function (cartItem) { delete cartItem.product.imgUrl });
        const calFeeRequest = { cartItemDTOsItemResponses: data, ghnServiceTypeRequests: ghnServiceTypeRequests };
        const responseShipServiceFee = await instance().post("http://localhost:4000/api/ghn/calculateFee", calFeeRequest)
        const map = new Map(Object.entries(responseShipServiceFee.data));
        setShippingPriceList(map)
      }
    }
  }

  const deletCart = async (quantity, product) => {
    const res = await instance().post(`http://localhost:4000/api/cart/deleteCartItem`, product).catch(() => { alert("không thể delete product") });
    if (res) {
      const response = await instance().get("http://localhost:4000/api/cart/getCartByIdCustomer", { params: { idCustomer: props.user.id } });
      if (response) {
        setCart(response.data);
      }
    }
  }


  const addCartItemToOrder = async () => {
    const req = [];
    for (const [key, value] of shippingPriceList) {
      req.push(key + "-" + value);
    }

    //check thang nay co sdt truoc roi moi remove
    const res1 = await instance().get(`http://localhost:4000/api/customer/checkPhoneExistCustomer`)
      .catch((err) => {
        alert(err.response.data.message);
      })
    if (res1) {
      openModal();
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
  useEffect(() => {
    async function fetchMyAPI() {

      const data = JSON.parse(JSON.stringify(cart))
      data.forEach(function (cartItem) { delete cartItem.product.imgUrl });
      const responseShipServiceType = await instance().post("http://localhost:4000/api/ghn/getServiceType", data)
      const listShipServiceType = [];
      const ghnServiceTypeRequests = [];

      responseShipServiceType.data.forEach(element => {
        listShipServiceType.push(element);
      });
      listShipServiceType.forEach(element => {
        ghnServiceTypeRequests.push({ shopDTO: element.shopDTO, ghnServiceModels: element.ghnServiceModels[0] })
      });
      setShippingTypeList(listShipServiceType)

      const calFeeRequest = { cartItemDTOsItemResponses: data, ghnServiceTypeRequests: ghnServiceTypeRequests };
      const responseShipServiceFee = await instance().post("http://localhost:4000/api/ghn/calculateFee", calFeeRequest)
      const map = new Map(Object.entries(responseShipServiceFee.data));
      setShippingPriceList(map)
    }
    fetchMyAPI()
  }, [])
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
              <h2>{trans.header.cart}</h2>
              <ul className="bread-crumb">
                <li className="has-separator">
                  <i>
                    <FontAwesomeIcon icon={faHome} />
                  </i>
                  <a href="home.html">{trans.header.home}</a>
                </li>
                <li className="is-marked">
                  <a href="cart.html">{trans.header.cart}</a>
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
                          <th>{trans.cart.product}</th>
                          <th>{trans.cart.quantity}</th>
                          <th>{trans.cart.price}</th>
                          <th>{trans.cart.ship}</th>
                          <th>{trans.cart.total}</th>
                          <th>Action</th>
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
                                      src={element.product.imgUrl}
                                      // src="/static/images/product/product@1x.jpg"
                                      alt="Product"
                                    />
                                    <h6>{element.product.name}</h6>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="cart-quantity">
                                  <div className="quantity" id={element.product.idProduct}>
                                    <input
                                      onBlur={(event) => { changeQuantityCart(event, element.quantity, element.product) }}
                                      onChange={(event) => { onlyNumberKey(event) }}
                                      type="text"
                                      className="quantity-text-field"
                                      defaultValue={element.quantity}
                                      id={`product-id-${element.product.idProduct}`}
                                    />
                                    <a className="plus-a" data-max={1000} onClick={() => { addToCart(1, element.quantity, element.product) }}>
                                      +
                                    </a>
                                    <a className="minus-a" data-min={1} onClick={() => { addToCart(-1, element.quantity, element.product) }}>
                                      -
                                    </a>
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="cart-price">{element.product.price}</div>
                              </td>
                              <td>
                                <div className="cart-price">
                                  {
                                    shippingPriceList && shippingPriceList.get(element.product.idProduct + "").split("-")[0]
                                  }
                                </div>
                              </td>
                              <td>
                                {shippingPriceList &&
                                  <div className="cart-price">{((element.product.price * element.quantity) + parseInt(shippingPriceList.get(element.product.idProduct + "").split("-")[0]))}</div>
                                }
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
                        {trans.cart.continue}
                      </a>
                      <a onClick={() => { addCartItemToOrder() }} className="checkout">
                        {trans.cart.checkout}
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
                          <th colSpan={2}>{trans.cart.cartTotal}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-0">Subtotal</h3>
                          </td>
                          <td>
                            <span className="calc-text">${getTotalCart()}</span>
                          </td>
                        </tr> */}
                        <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-8">{trans.cart.shippingType}</h3>
                            {shippingTypeList.map(function (element) {
                              return (
                                <>
                                  <a data-toggle="collapse" href={"#shop" + element.shopDTO.idShop} className="calc-anchor u-s-m-b-4" >
                                    {element.shopDTO.name}
                                  </a>
                                  <div></div>
                                  <div className="collapse" id={"shop" + element.shopDTO.idShop}>
                                    <div className="select-country-wrapper u-s-m-b-8">
                                      <div className="select-box-wrapper">
                                        <label
                                          className="sr-only"
                                          htmlFor="select-country"
                                        >
                                          Chọn kiểu giao hàng
                                        </label>
                                        <select className="select-box" id="select-country" defaultValue={'default'} >

                                          {element.ghnServiceModels.map(function (element) {
                                            return (<>
                                              < option value="">
                                                {element.short_name}
                                              </option>
                                            </>)
                                          })}
                                        </select>
                                      </div>
                                    </div>
                                  </div></>
                              )
                            })}
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-0" id="tax-heading">
                              {trans.cart.tax}
                            </h3>
                            <span> {trans.cart.title}</span>
                          </td>
                          <td>
                            <span className="calc-text">$0.00</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h3 className="calc-h3 u-s-m-b-0">{trans.cart.total}</h3>
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
        <div className="modal-load">
          <PhoneOTPProgress open={openPhoneOTPProgress} closeModal={closeModal} shippingPriceList={shippingPriceList}></PhoneOTPProgress>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    // console.log(session.user.id)
    const responseCart = await axios.get("http://localhost:4000/api/cart/getCartByIdCustomer",
      { params: { idCustomer: session.user.id }, headers: { Authorization: `Bearer ${session.user.jwt}` } })

    return {
      props: {
        cart: responseCart.data,
        user: session.user
      }
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: "/account"
    }
  }
}