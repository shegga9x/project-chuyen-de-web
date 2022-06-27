import Head from "next/head"
import { useEffect } from "react"
import instance from '../../helpers/axiosConfig';

export default function ModalShopXu({ open, closeModal, setXuVip }) {

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popup");
            setTimeout(() => { popup.style.transform = 'translate(-50%, -50%) scale(1.0)' }, 100);
        } else {
            const popup = document.getElementById("popup");
            popup.style.display = 'block';
            popup.style.transform = 'translate(-50%, -50%) scale(0.0)';
        }
    }, [open])

    const onlyNumberKey = (evt) => {
        const filteredInput1 = evt.target.value.replace(/(^0)/, "");
        const filteredInput2 = filteredInput1.replace(/[^0-9]+/g, "").slice(0, 9);
        evt.target.value = filteredInput2;
    }

    const napXu = async () => {
        const XuNumber = document.getElementsByClassName('XuNumber')[0];
        if (XuNumber.value != '') {
            const res = await instance().get('http://localhost:4000/api/walletCustomer/addMoneyToCustomerWallet', { params: { money: XuNumber.value } });
            if (res) {
                setXuVip(res.data);
                closeModal();
            }
        } else {
            alert('Bạn để trống trường nạp Xu');
        }
    }

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                #popup {
                    transition: transform 0.2s linear;
                    transform-origin: center center;
                    background-color:white;
                    z-index: 1001;
                    border-radius: 3px;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    padding: 16px;
                }
                `}} />
            </Head>
            <div id="popup">
                <div>
                    <div style={{ padding: '1.875rem' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 400, color: 'rgba(0, 0, 0, 0.8)', textTransform: 'capitalize' }}>
                            Thêm Xu ShopVip
                        </div>
                    </div>
                    <div style={{ padding: '0 1.875rem' }}>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <input className="XuNumber" type="text" onChange={(event) => { onlyNumberKey(event) }} placeholder="Số Xu Nạp" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                                <button style={{ border: '1px solid rgba(0, 0, 0, 0.5)', backgroundColor: '#fbfbfb', padding: '0 0.625rem' }}>Gửi
                                    Mã xác
                                    minh</button>
                            </div>
                            <div style={{ display: 'flex', marginTop: '30px' }}>
                                <input className="CodeNumber" type="text" placeholder="Mã xác minh" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                            </div>
                        </div>
                        <div style={{ margin: '1.375rem 0', justifyContent: 'flex-end', display: 'flex' }}>
                            <button onClick={closeModal} style={{ minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', background: 'none', borderRadius: '0.125rem', height: '2.5rem' }}>Trở
                                Lại</button>
                            <button onClick={napXu} style={{ marginLeft: '0.625rem', minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', backgroundColor: 'red', borderRadius: '0.125rem', height: '2.5rem' }}>Nạp Xu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}