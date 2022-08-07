import { faEdit, faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import OrderDetailModal from "../modal/orderDetailModal.js";

Modal.setAppElement('body');

export default function OrderView({ value, index, data, tabChange, dataChange }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [update, setUpdate] = useState(null)
    const [orderSelected, setOrderSelected] = useState(null);
    function openModal(order) {
        setOrderSelected(order)
        setModalIsOpen(true);
    }
    function closeModal() {
        dataChange(update);
        setModalIsOpen(false);
        setUpdate(null)
    }
    function statusToText(status) {
        switch (parseInt(status)) {
            case 1:
                return "Chờ Xác Nhận"
            case 2:
                return "Chờ Lấy Hàng"
            case 3:
                return "Đang Giao"
            case 4:
                return "Đã Giao"
            case 5:
                return "Đơn Hủy"
            case 6:
                return "Trả Hàng"
            default:
                break;
        }
    }
    function cancelOrder(status) {
        // await InstanceAxios().post(`https://sqlshop123.herokuapp.com/api/saler/orderSalerUpdateStatus`, order)

    }
    return (
        <div >
            {value === index && data && (
                <Box >
                    <div className="cv" >
                        <div className="inbox">
                            <div className="inbox-bx container-fluid">
                                <div className="row">
                                    <div className="col-md-10">
                                        <table className="table table-stripped" id="cssTable">
                                            <tbody>
                                                <tr>
                                                    <th>Sản Phẩm</th>
                                                    <th>Tổng đơn hàng</th>
                                                    <th>Trạng Thái</th>
                                                    <th>Thao tác</th>
                                                </tr>

                                                {Array.from(data.entries()).map((entry) => {
                                                    const [key, value] = entry;
                                                    const singleProductPage = value.singleProductPageDTO;
                                                    console.log(entry);
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div className="cart-anchor-image" style={{ display: "inline-block" }}>
                                                                    <a href="">
                                                                        <img src="/static/images/product/product@1x.jpg" alt="Product" />
                                                                        <h6>{singleProductPage.name}</h6>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td >{value.count}</td>
                                                            <td><a onClick={(e) => tabChange(e, parseInt(key.split("-")[1]))}>{statusToText(key.split("-")[1])}</a></td>
                                                            <td>
                                                                <button className=" btn-outline-secondary "  >
                                                                    <i className="F-icon" > <FontAwesomeIcon icon={faSync} /> </i>
                                                                </button>
                                                                <button className=" btn-outline-secondary " onClick={() => openModal(value)} >
                                                                    <i className="F-icon"  > <FontAwesomeIcon icon={faEdit} /> </i>
                                                                </button>
                                                                <button className=" btn-outline-secondary " >
                                                                    <i className="F-icon"  > <FontAwesomeIcon icon={faTrash} /> </i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {orderSelected && (
                        <OrderDetailModal open={modalIsOpen} closeModal={closeModal} listOrder={orderSelected} dataChange={setUpdate} ></OrderDetailModal>
                    )}
                </Box>

            )
            }
        </div >
    );
} 