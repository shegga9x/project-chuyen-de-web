import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from 'react-modal';
import customStyles from '../customCSS/customCss1.css.js'

Modal.setAppElement('body');
export default function ProductDetailModal({ open, closeModal, listProduct, dataChange }) {
    const [isLoading, setIsLoading] = useState(-1);
    const handleData = async (order, status) => {
    }
    return (
        <div >
            <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}  >
                <div style={{ width: "100%", maxHeight: "500px", overflow: 'auto' }}>
                    <table className="table-03"  >
                        <tr>
                            <th>Loại</th>
                            <th>Số Lượng</th>
                            <th>Giá</th>
                            <th>Thao Tác</th>

                        </tr>
                        {listProduct.map(function (product) {
                            return (<tr>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}  </td>
                                <td>
                                    <button className=" btn-outline-secondary " >
                                        Chỉnh Sửa <i className="F-icon"  > <FontAwesomeIcon icon={faCheck} /> </i>
                                    </button>
                                </td>
                            </tr>
                            )
                        })}

                    </table>
                </div>

            </Modal>
        </div >
    );
} 