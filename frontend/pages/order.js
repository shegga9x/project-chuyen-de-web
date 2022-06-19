import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Head from "next/head";
import Layout from "../components/layout";
import { getSession } from 'next-auth/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from 'react';
import axios from "axios";
import {
    faHome,
    faTrash,
    faSync,
} from "@fortawesome/free-solid-svg-icons";

export default function Order(props) {

    const [order, setOrder] = useState(props.order);
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Head>
                <title>
                    Groover - Online Shopping for Electronics, Apparel, Computers, Books,
                    DVDs & more
                </title>
            </Head>
            <Layout >
                <Box sx={{ width: '100%', typography: 'body1' }} >
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
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                
                                            }
                                            <tr>
                                                <td>
                                                    <div className="cart-anchor-image">
                                                        <a href="single-product.html">
                                                            <img
                                                                src="/static/images/product/product@1x.jpg"
                                                                alt="Product"
                                                            />
                                                            <h6>asdsdfaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffaaaaaafasdf</h6>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cart-price">asdfasdf</div>
                                                </td>
                                                <td>
                                                    <div className="cart-quantity">
                                                        <div className="quantity">
                                                            <input
                                                                type="text"
                                                                className="quantity-text-field"
                                                                defaultValue="1"
                                                            />
                                                            <a className="plus-a" data-max={1000}>
                                                                +
                                                            </a>
                                                            <a className="minus-a" data-min={1} >
                                                                -
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Tổng tiền: 1.695.000</th>
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
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="cart-anchor-image">
                                                        <a href="single-product.html">
                                                            <img
                                                                src="/static/images/product/product@1x.jpg"
                                                                alt="Product"
                                                            />
                                                            <h6>asdsdfaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffaaaaaafasdf</h6>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cart-price">asdfasdf</div>
                                                </td>
                                                <td>
                                                    <div className="cart-quantity">
                                                        <div className="quantity">
                                                            <input
                                                                type="text"
                                                                className="quantity-text-field"
                                                                defaultValue="1"
                                                            />
                                                            <a className="plus-a" data-max={1000}>
                                                                +
                                                            </a>
                                                            <a className="minus-a" data-min={1} >
                                                                -
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
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
                                            <tr>
                                                <td>
                                                    <div className="cart-anchor-image">
                                                        <a href="single-product.html">
                                                            <img
                                                                src="/static/images/product/product@1x.jpg"
                                                                alt="Product"
                                                            />
                                                            <h6>asdsdfaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffaaaaaafasdf</h6>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cart-price">asdfasdf</div>
                                                </td>
                                                <td>
                                                    <div className="cart-quantity">
                                                        <div className="quantity">
                                                            <input
                                                                type="text"
                                                                className="quantity-text-field"
                                                                defaultValue="1"
                                                            />
                                                            <a className="plus-a" data-max={1000}>
                                                                +
                                                            </a>
                                                            <a className="minus-a" data-min={1} >
                                                                -
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
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
                                            <tr>
                                                <td>
                                                    <div className="cart-anchor-image">
                                                        <a href="single-product.html">
                                                            <img
                                                                src="/static/images/product/product@1x.jpg"
                                                                alt="Product"
                                                            />
                                                            <h6>asdsdfaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffaaaaaafasdf</h6>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cart-price">asdfasdf</div>
                                                </td>
                                                <td>
                                                    <div className="cart-quantity">
                                                        <div className="quantity">
                                                            <input
                                                                type="text"
                                                                className="quantity-text-field"
                                                                defaultValue="1"
                                                            />
                                                            <a className="plus-a" data-max={1000}>
                                                                +
                                                            </a>
                                                            <a className="minus-a" data-min={1} >
                                                                -
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
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
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="cart-anchor-image">
                                                        <a href="single-product.html">
                                                            <img
                                                                src="/static/images/product/product@1x.jpg"
                                                                alt="Product"
                                                            />
                                                            <h6>asdsdfaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffaaaaaafasdf</h6>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cart-price">asdfasdf</div>
                                                </td>
                                                <td>
                                                    <div className="cart-quantity">
                                                        <div className="quantity">
                                                            <input
                                                                type="text"
                                                                className="quantity-text-field"
                                                                defaultValue="1"
                                                            />
                                                            <a className="plus-a" data-max={1000}>
                                                                +
                                                            </a>
                                                            <a className="minus-a" data-min={1} >
                                                                -
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Layout>
        </>
    );

}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (session) {
        const response = await axios.get("http://localhost:4000/api/order/getOrderItemByIdCustomer", { headers: { Authorization: `Email ${session.user.email}` } })
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
