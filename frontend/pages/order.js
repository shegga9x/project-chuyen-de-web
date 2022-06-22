import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Head from "next/head";
import Layout from "../components/layout";
import Canvas from '../components/order/canvas';
import OrderProgress from '../components/order/orderProgress';
import { getSession } from 'next-auth/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from 'react';
import axios from "axios";
import {
    faHome,
    faTrash,
    faSync,
} from "@fortawesome/free-solid-svg-icons";
import { set } from 'react-hook-form';

export default function Order(props) {

    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState(props.order);
    const [value, setValue] = useState('1');

    const closeModal = () => {
        setOpen(false);
        setTimeout(() => {
            document.body.classList.toggle('modal-visibile');
            const model = document.getElementsByClassName('modal-load')[0];
            model.classList.toggle('visible');
        }, 500)
    }


    const openModal = () => {
        document.body.classList.toggle('modal-visibile');
        const model = document.getElementsByClassName('modal-load')[0];
        model.classList.toggle('visible');
        setOpen(true);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getTotalCart = () => {
        let result = 0;
        order.forEach(ele => {
            result += (ele.product.price)
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
            </Head>
            <Layout >
                <div className='container'>
                    <TabContext value={value} >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
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
                                                <th></th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            <input type="checkbox"></input>
                                                        </td>
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
                                                                <div className="quantity" >
                                                                    <input
                                                                        type="text"
                                                                        className="quantity-text-field"
                                                                        defaultValue="1"
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart()}</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="coupon-continue-checkout u-s-m-b-60">
                                    {/* <div className="coupon-area">
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
                                    </div> */}
                                    <div className="button-area">
                                        <a onClick={openModal} className="checkout">
                                            Xác Nhận Order
                                        </a>
                                    </div>
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
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                return (
                                                    <tr key={i}>
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
                                                                <div className="quantity" >
                                                                    <input
                                                                        type="text"
                                                                        className="quantity-text-field"
                                                                        defaultValue="1"
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart()}</th>
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
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                return (
                                                    <tr key={i}>
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
                                                                <div className="quantity" >
                                                                    <input
                                                                        type="text"
                                                                        className="quantity-text-field"
                                                                        defaultValue="1"
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart()}</th>
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
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((element, i) => {
                                                return (
                                                    <tr key={i}>
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
                                                                <div className="quantity" >
                                                                    <input
                                                                        type="text"
                                                                        className="quantity-text-field"
                                                                        defaultValue="1"
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Tổng tiền: {getTotalCart()}</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="5">
                            <h1>Cac</h1>
                        </TabPanel>
                    </TabContext>
                    <div className="modal-load">
                        <OrderProgress open={open} closeModal={closeModal}></OrderProgress>
                    </div>
                </div>
            </Layout>
        </>
    );

}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (session) {
        const response = await axios.get("http://localhost:4000/api/order/getOrderItemByIdCustomer", { headers: { Authorization: `Email ${session.user.email}` } })
        // console.log(response.data)
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
