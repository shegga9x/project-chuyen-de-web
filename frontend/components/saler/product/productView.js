import { faEdit, faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import { useState } from "react";
import Modal from 'react-modal';
import ProductDetailModal from "../modal/productDetailModal";

Modal.setAppElement('body');

export default function ProductView({ value, index, data, tabChange }) {
    const [listProduct, setListProduct] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal(listProductO) {
        if (!listProductO) alert("San pham nay ko dung")
        setListProduct(listProductO)
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    function statusToText(status) {
        switch (parseInt(status)) {
            case 1:
                return "Đang Hoạt Động"
            case 2:
                return "Hết Hàng"
            case 3:
                return "Chờ Duyệt"
            case 4:
                return "Vi Phạm"
            default:
                break;
        }
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
                                                    <th >Trạng Thái</th>
                                                    <th >Thao tác</th>
                                                </tr>
                                                {data.map(function (pageSingleProduct) {
                                                    return (
                                                        <tr>
                                                            <td >
                                                                <div className="cart-anchor-image" style={{ maxWidth: "600px" }} >
                                                                    <a >
                                                                        <img className="img-fluid" src={(pageSingleProduct.imgURL == "" || pageSingleProduct.imgURL == null ?
                                                                            "/static/images/product/" + "product@1x.jpg" : pageSingleProduct.imgURL)} alt="Product" />
                                                                        <h6>{pageSingleProduct.name}</h6>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td >1</td>
                                                            <td><a onClick={(e) => tabChange(e, pageSingleProduct.status)}>{statusToText(pageSingleProduct.status)}</a></td>
                                                            <td>
                                                                <button className=" btn-outline-secondary "  >
                                                                    <i className="F-icon" > <FontAwesomeIcon icon={faSync} /> </i>
                                                                </button>
                                                                <button className=" btn-outline-secondary " onClick={() => openModal(pageSingleProduct.productDTOs)}>
                                                                    <i className="F-icon"  > <FontAwesomeIcon icon={faEdit} /> </i>
                                                                </button>
                                                                <button className=" btn-outline-secondary " >
                                                                    <i className="F-icon"  > <FontAwesomeIcon icon={faTrash} /> </i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {listProduct && (<ProductDetailModal open={modalIsOpen} closeModal={closeModal} listProduct={listProduct}  ></ProductDetailModal>)}

                </Box>

            )
            }
        </div >
    );
} 