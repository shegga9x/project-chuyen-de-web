import Head from "next/head"
import { useEffect, useState } from "react"
import instance from '../../../helpers/axiosConfig';

export default function ModalProfileEmail({ open, closeModal, customer, setCustomer, setFirstRender }) {

    const [email, setEmail] = useState(null);

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popupEmail");
            setTimeout(() => { popup.style.transform = 'translate(-50%, -50%) scale(1.0)' }, 100);
        } else {
            const popup = document.getElementById("popupEmail");
            popup.style.display = 'block';
            popup.style.transform = 'translate(-50%, -50%) scale(0.0)';
        }
    }, [open])

    const sendSMS = async () => {
        const email = document.getElementsByClassName('Email')[0].value;
        const res = await instance().get('https://sqlshop123.herokuapp.com/api/customer/sendGmailSMS', { params: { email: email } });
        if (res) {
            alert('email are ready send, please check');
            setEmail(email);
        }
    }

    const checkSMS = async () => {
        const sms = document.getElementsByClassName('SMSEmailNumber')[0].value;
        const res = await instance().get('https://sqlshop123.herokuapp.com/api/customer/checkGmailSMS', { params: { sms: sms, email: email } })
            .catch(err => {
                alert(err.response.data.message);
            })
        if (res) {
            const newCustomer = {
                idCustomer: customer.idCustomer,
                name: customer.name,
                email: email,
                phoneNumber: customer.phoneNumber,
                gender: customer.gender,
                birthday: customer.birthday,
                imgUrl: customer.imgUrl,
                address: customer.address
            }
            setFirstRender(1);
            setCustomer(newCustomer);
            closeModal('email');
        }
    }

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                #popupEmail {
                    transition: transform 0.2s linear;
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
            <div id="popupEmail">
                <div>
                    <div style={{ padding: '1.875rem' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 400, color: 'rgba(0, 0, 0, 0.8)', textTransform: 'capitalize' }}>
                            Thêm Tài Khoản Email
                        </div>
                    </div>
                    <div style={{ padding: '0 1.875rem' }}>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <input className="Email" type="text" placeholder="Email" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                                <button onClick={() => { sendSMS() }} style={{ border: '1px solid rgba(0, 0, 0, 0.5)', backgroundColor: '#fbfbfb', padding: '0 0.625rem' }}>Gửi
                                    Mã xác
                                    minh</button>
                            </div>
                            <div style={{ display: 'flex', marginTop: '30px' }}>
                                <input className="SMSEmailNumber" type="text" placeholder="Mã xác minh" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                            </div>
                        </div>
                        <div style={{ margin: '1.375rem 0', justifyContent: 'flex-end', display: 'flex' }}>
                            <button onClick={() => { closeModal('email') }} style={{ minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', background: 'none', borderRadius: '0.125rem', height: '2.5rem' }}>Trở
                                Lại</button>
                            <button onClick={() => { checkSMS() }} style={{ marginLeft: '0.625rem', minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', backgroundColor: 'red', borderRadius: '0.125rem', height: '2.5rem' }}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}