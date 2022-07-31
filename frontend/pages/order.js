import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Head from "next/head";
import Layout from "../components/layout";
import OrderProgress from '../components/order/orderProgress';
import DownToolProgress from '../components/order/downToolProgress';
import VerificationProgress from '../components/order/verificationProgress';
// import PhoneOTPProgress from '../components/order/phoneOTPProgress';
import { getSession } from 'next-auth/client';
import { useState, useEffect } from 'react';
import instance from "../helpers/axiosConfig";

export default function Order(props) {

    const [listOrder, setListOrder] = useState([]);
    const [openOrderProgress, setOpenOrderProgress] = useState(false);
    const [openDownToolProgress, setOpenDownToolProgress] = useState(false);
    const [openVerificationProgress, setOpenVerificationProgress] = useState(false);
    // const [openPhoneOTPProgress, setOpenPhoneOTPProgress] = useState(false);
    const [order, setOrder] = useState(props.order);
    const [value, setValue] = useState('1');


    useEffect(() => {
        let list = order.filter(ele => ele.status == 1);
        setListOrder(list);
    }, [])


    const resetAll = () => {
        document.getElementsByClassName('el-input_name')[0].value = "";
        ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
        document.getElementsByClassName('step2')[0].classList.remove('active');
        document.getElementsByClassName('step3')[0].classList.remove('active');
        document.getElementsByClassName('content_step1')[0].style.display = "block"
        document.getElementsByClassName('content_step2')[0].style.display = "none"
        document.getElementsByClassName('content_step3')[0].style.display = "none"
        document.getElementsByClassName('content_step3_inside')[0].style.display = "none"
        document.getElementsByClassName('errorStep1')[0].style.visibility = 'hidden';
        document.getElementsByClassName('errorStep2')[0].style.visibility = 'hidden';
        //Phone OTP Progress
        // document.getElementsByClassName('PhoneNumber')[0].value = "";
        // document.getElementsByClassName('smsNumber')[0].value = "";

    }

    const closeModal = (modal) => {
        if (modal == 'orderProgress') {
            setOpenOrderProgress(false);
        } else if (modal == 'downToolProgress') {
            setOpenDownToolProgress(false);
        } else if (modal == 'verificationProgress') {
            setOpenVerificationProgress(false);
        } 
        document.body.classList.toggle('modal-visibile');
        const model = document.getElementsByClassName('modal-load')[0];
        model.classList.toggle('visible');
        resetAll();
    }

    const openModal = (modal) => {
        document.body.classList.toggle('modal-visibile');
        const model = document.getElementsByClassName('modal-load')[0];
        model.classList.toggle('visible');
        if (modal == 'orderProgress') {
            setOpenOrderProgress(true);
        } else if (modal == 'downToolProgress') {
            setOpenDownToolProgress(true);
        } else if (modal == 'verificationProgress') {
            setOpenVerificationProgress(true);
        }
    }

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    const getTotalCart = (status) => {
        let result = 0;
        order.forEach(ele => {
            if (ele.status == status) {
                result = result + (ele.product.price * ele.quantity) + ele.shippingPrice
            }
        })
        return result.toFixed(2);
    }

    return (
        <>
            <Head>
                <title>
                    Groover - Online Shopping for Electronics, Apparel, Computers, Books,
                    DVDs & more
                </title>
                <style dangerouslySetInnerHTML={{
                    __html: `
                a {
                    color:black;
                }
                ` }} />
            </Head>
            <Layout >
                <div className='container'>
                    <TabContext value={value} >
                        <Box sx={{ borderBottom: 1 }}>
                            <TabList value={value}
                                onChange={handleChange}
                                textColor="inherit"
                                indicatorColor="secondary"
                                aria-label="inherit tabs example"
                                centered>
                                <Tab label="Chờ xác nhận" value="1" />
                                <Tab label="Chờ lấy hàng" value="2" />
                                <Tab label="Đang giao" value="3" />
                                <Tab label="Đã giao" value="4" />
                                <Tab label="Đã hủy" value="5" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div className='container' >
                                <div className="table-wrapper u-s-m-b-60">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Ship</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                if (element.status == 1) {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="cart-anchor-image">
                                                                    <a href="single-product.html">
                                                                        <img
                                                                            src={element.product.imgUrl}
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
                                                                <div className="cart-price">{element.shippingPrice}</div>
                                                            </td>
                                                            <td>
                                                                <div className="cart-quantity">
                                                                    <div className="quantity" >
                                                                        <input
                                                                            type="text"
                                                                            className="quantity-text-field"
                                                                            defaultValue={element.quantity}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart(1)}</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div className='container' >
                                <div className="table-wrapper u-s-m-b-60">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Ship</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                if (element.status == 2) {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="cart-anchor-image">
                                                                    <a href="single-product.html">
                                                                        <img
                                                                            src={element.product.imgUrl}
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
                                                                <div className="cart-price">{element.shippingPrice}</div>
                                                            </td>
                                                            <td>
                                                                <div className="cart-quantity">
                                                                    <div className="quantity" >
                                                                        <input
                                                                            type="text"
                                                                            className="quantity-text-field"
                                                                            defaultValue={element.quantity}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart(2)}</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div className='container' >
                                <div className="table-wrapper u-s-m-b-60">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Ship</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                if (element.status == 3) {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="cart-anchor-image">
                                                                    <a href="single-product.html">
                                                                        <img
                                                                            src={element.product.imgUrl}
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
                                                                <div className="cart-price">{element.shippingPrice}</div>
                                                            </td>
                                                            <td>
                                                                <div className="cart-quantity">
                                                                    <div className="quantity" >
                                                                        <input
                                                                            type="text"
                                                                            className="quantity-text-field"
                                                                            defaultValue={element.quantity}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart(3)}</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="4">
                            <div className='container' >
                                <div className="table-wrapper u-s-m-b-60">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Ship</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                if (element.status == 4) {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="cart-anchor-image">
                                                                    <a href="single-product.html">
                                                                        <img
                                                                            src={element.product.imgUrl}
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
                                                                <div className="cart-price">{element.shippingPrice}</div>
                                                            </td>
                                                            <td>
                                                                <div className="cart-quantity">
                                                                    <div className="quantity" >
                                                                        <input
                                                                            type="text"
                                                                            className="quantity-text-field"
                                                                            defaultValue={element.quantity}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart(4)}</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="5">
                            <div className='container' >
                                <div className="table-wrapper u-s-m-b-60">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Ship</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                if (element.status == 5) {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="cart-anchor-image">
                                                                    <a href="single-product.html">
                                                                        <img
                                                                            src={element.product.imgUrl}
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
                                                                <div className="cart-price">{element.shippingPrice}</div>
                                                            </td>
                                                            <td>
                                                                <div className="cart-quantity">
                                                                    <div className="quantity" >
                                                                        <input
                                                                            type="text"
                                                                            className="quantity-text-field"
                                                                            defaultValue={element.quantity}
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart(5)}</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                    </TabContext>
                    <div className="coupon-continue-checkout u-s-m-b-60">
                        <div className="button-area">
                            <a onClick={() => { openModal('downToolProgress') }} className="checkout">
                                Tải tool
                            </a>
                            <a onClick={() => { openModal('orderProgress') }} className="checkout">
                                Xác Nhận Order
                            </a>
                            <a onClick={() => { openModal('verificationProgress') }} className="checkout">
                                Verification
                            </a>
                        </div>
                    </div>
                    <div className="modal-load">
                        <OrderProgress open={openOrderProgress} closeModal={closeModal} listOrder={listOrder}></OrderProgress>
                        <DownToolProgress open={openDownToolProgress} closeModal={closeModal}></DownToolProgress>
                        <VerificationProgress open={openVerificationProgress} closeModal={closeModal}></VerificationProgress>
                        {/* <PhoneOTPProgress open={openPhoneOTPProgress} closeModal={closeModal}></PhoneOTPProgress> */}
                    </div>
                </div>
            </Layout>
        </>
    );

}

export async function getServerSideProps(context) {
    console.log(context.locale);
    const session = await getSession(context);
    if (session) {
        const response = await instance(context).get("http://localhost:4000/api/order/getOrderItemByIdCustomer")
        console.log(response.data);
        return {
            props: {
                order: response.data,
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
