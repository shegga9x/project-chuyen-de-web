import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from 'react-modal';
import ScaleLoader from "react-spinners/ScaleLoader.js";
import InstanceAxios from "../../../helpers/axiosConfig.js";
import customStyles from '../customCSS/customCss1.css.js'
import CustomerDetailModal from "./customerDetailModal.js";

Modal.setAppElement('body');
export default function OrderDetailModal({ open, closeModal, listOrder, dataChange }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [customer, setCustomer] = useState(null);
    const [isLoading, setIsLoading] = useState(-1);
    function openModal(customer) {
        setCustomer(customer)
        setModalIsOpen(true);
    }
    function closeModal1() {
        setModalIsOpen(false);
    }
    const handleData = async (order, status) => {
        order.status = status;
        setIsLoading(order.idOrderItem)
        await InstanceAxios().post(`https://localhost:4000/api/saler/orderSalerUpdateStatus`, order)
        setIsLoading(-1)
        dataChange(1)
    }
    return (
        <div >
            <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}  >
                <div style={{ width: "100%", maxHeight: "500px", overflow: 'auto' }}>
                    <table className="table-03"  >
                        <tr>
                            <th>Loại</th>
                            <th>Số Lượng</th>
                            <th>Người Mua</th>
                            {(listOrder.itemDTOs[0].status != 5 && listOrder.itemDTOs[0].status != 6) && (<th>Thao Tác</th>)}
                            {(listOrder.itemDTOs[0].status == 5 || listOrder.itemDTOs[0].status == 6) && (<th>Lý do</th>)}

                        </tr>
                        {listOrder.itemDTOs.map(function (order) {
                            const product = order.productDTO;
                            const customer = order.customerDTO;
                            return (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{order.quantity}</td>
                                    <td><a onClick={() => openModal(customer)}>{customer.name}  </a></td>
                                    <td>
                                        {isLoading == order.idOrderItem && (
                                            <ScaleLoader color={"#ee4d2d"} />)}
                                        {isLoading != order.idOrderItem && order.status == 1 && (
                                            <button className=" btn-outline-secondary " onClick={() => handleData(order, 2)}>
                                                Chờ xác nhận <i className="F-icon"  > <FontAwesomeIcon icon={faCheck} /> </i>
                                            </button>
                                        )}
                                        {isLoading != order.idOrderItem && order.status == 2 && (
                                            <button className=" btn-outline-secondary " onClick={() => handleData(order, 1)}>
                                                Hủy xác nhận <i className="F-icon"  > <FontAwesomeIcon icon={faCheck} /> </i>
                                            </button>
                                        )}
                                        {isLoading != order.idOrderItem && order.status != 5 && (
                                            <button className=" btn-outline-secondary " onClick={() => handleData(order, 5)}>
                                                Hủy Đơn Hàng <i className="F-icon"  > <FontAwesomeIcon icon={faTrash} /> </i>
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}

                    </table>
                </div>
                {customer && (
                    <CustomerDetailModal open={modalIsOpen} closeModal={closeModal1} customer={customer} ></CustomerDetailModal>
                )}
            </Modal>
        </div >
    );
} 