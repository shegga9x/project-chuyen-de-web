import Modal from 'react-modal';
import customStyles from '../customCSS/customCss1.css.js'

Modal.setAppElement('body');
export default function CustomerDetailModal({ open, closeModal, customer }) {
    return (
        <div >
            <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}  >
                <table className="table-03">
                    <tr>
                        <th>Tên</th> <td>{customer.name}</td>
                    </tr>
                    <tr>
                        <th>Giới Tính</th> <td>{customer.gender}</td>
                    </tr>
                    <tr>
                        <th>Số Điện Thoại</th> <td>{customer.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>Địa chỉ </th> <td>{customer.address}</td>
                    </tr>
                </table>
            </Modal>
        </div >
    );
} 