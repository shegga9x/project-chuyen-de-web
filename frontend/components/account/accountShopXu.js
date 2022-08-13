import ModalShopXu from "./modal/modalShopXu";
import { useState, useEffect } from 'react';
import instance from '../../helpers/axiosConfig';

export default function AccountShopXu() {

    const [open, setOpen] = useState(false);
    const [xuVip, setXuVip] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await instance().get('http://localhost:4000/api/walletCustomer/getMoneyByIdCustomer');
            if (res) {
                setXuVip(res.data)
            }
        }
        fetchData().catch((err) => { console.log({ err }) });
    }, [])

    const resetAll = () => {
        document.getElementsByClassName('XuNumber')[0].value = '';
        //vnPayProgress
        let list = document.getElementsByClassName('mobile-banking-logo');
        for (let i = 0; i < list.length; i++) {
            list[i].getElementsByTagName('img')[0].style.border = "none";
        }
    }

    const openModal = () => {
        document.body.classList.toggle('modal-visibile');
        const model = document.getElementsByClassName('modal-load')[0];
        model.classList.toggle('visible');
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
        setTimeout(() => {
            document.body.classList.toggle('modal-visibile');
            const model = document.getElementsByClassName('modal-load')[0];
            model.classList.toggle('visible');
            resetAll();
        }, 200)
    }

    return (
        <>
            <div className="my-account-secion" style={{ padding: '0 30px 20px' }}>
                <div className="my-account-section_header" style={{ display: 'flex', padding: '22px 0', borderBottom: '1px solid #efefef' }}>
                    <div className="my-account-section_header-left" style={{ display: 'flex', flex: 1 }}>
                        <img className="Gq4KnO" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png" width={50} height={50} />
                        <p style={{ marginLeft: '8px', marginTop: '11px' }}>ShopVip Xu</p>
                    </div>
                    <div className="my-account-section_header_button">
                        <button onClick={() => { openModal() }} style={{ border: 'none', padding: '8px 16px', color: 'white', backgroundColor: 'red', borderRadius: '2px' }}>
                            <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon icon-plus-sign" style={{ width: '1em', height: '1em', fill: 'white', border: '1px solid red', paddingTop: '3px' }}>
                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                </polygon>
                            </svg>
                            Nạp Thêm Xu Mới
                        </button>
                    </div>
                </div>
                <div className="my-account-section_body" style={{ padding: '70px 0', textAlign: 'center' }}>
                    {
                        xuVip == 0 ? (
                            <p>Bạn chưa có xu nào T.T</p>
                        ) : (
                            <p>Bạn có ${xuVip} trong ví</p>)
                    }
                </div>
            </div>
            <div className="modal-load">
                <ModalShopXu open={open} closeModal={closeModal}></ModalShopXu>
            </div>
        </>
    )
}