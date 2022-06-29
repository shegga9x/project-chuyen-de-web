import Head from "next/head"
import { useEffect, useState } from "react"
import instance from '../../../helpers/axiosConfig';
import axios from "axios";

export default function ModalProfilePhone({ open, closeModal, customer, setCustomer, setFirstRender }) {

    const [phoneNumber, setPhoneNumber] = useState(null);

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popupPhone");
            setTimeout(() => { popup.style.transform = 'translate(-50%, -50%) scale(1.0)' }, 100);
        } else {
            const popup = document.getElementById("popupPhone");
            popup.style.display = 'block';
            popup.style.transform = 'translate(-50%, -50%) scale(0.0)';
        }
    }, [open])


    const sendSMS = async () => {
        const phoneNumber = document.getElementsByClassName('PhoneNumber')[0].value
        const res = await instance().get('http://localhost:4000/api/customer/sendPhoneSMS')
        if (res) {
            const sms = res.data;
            const apiLink = `http://my.zitasms.com/services/send.php?key=c1313d3e986a27f76bf0bf272386f4f16dc9b07c&number=%2B${phoneNumber}&message=${sms}&devices=1593&type=sms&prioritize=1`;
            await axios.get(apiLink).catch(err => { console.log({ err }) })
            setPhoneNumber(phoneNumber);
        }
    }

    const checkSMS = async () => {
        const sms = document.getElementsByClassName('smsNumber')[0].value;
        const res = await instance().get('http://localhost:4000/api/customer/checkPhoneSMS', { params: { sms: sms, phoneNumber: phoneNumber } })
            .catch(err => {
                alert(err.response.data.message);
            })
        if (res) {
            const newCustomer = {
                idCustomer: customer.idCustomer,
                name: customer.name,
                email: customer.email,
                phoneNumber: phoneNumber,
                gender: customer.gender,
                birthday: customer.birthday,
                imgUrl: customer.imgUrl,
                address: customer.address
            }
            setFirstRender(1);
            setCustomer(newCustomer);
            closeModal('phone');
        }
    }

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                #popupPhone {
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
            <div id="popupPhone">
                <div>
                    <div style={{ padding: '1.875rem' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 400, color: 'rgba(0, 0, 0, 0.8)', textTransform: 'capitalize' }}>
                            Thêm Số Điện Thoại
                        </div>
                    </div>
                    <div style={{ padding: '0 1.875rem' }}>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <input className="PhoneNumber" type="text" placeholder="Số Điện Thoại" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                                <button onClick={() => { sendSMS() }} style={{ border: '1px solid rgba(0, 0, 0, 0.5)', backgroundColor: '#fbfbfb', padding: '0 0.625rem' }}>Gửi
                                    Mã xác
                                    minh</button>
                            </div>
                            <div style={{ display: 'flex', marginTop: '30px' }}>
                                <input className="smsNumber" type="text" placeholder="Mã xác minh" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                            </div>
                        </div>
                        <div style={{ margin: '1.375rem 0', justifyContent: 'flex-end', display: 'flex' }}>
                            <button onClick={() => { closeModal('phone') }} style={{ minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', background: 'none', borderRadius: '0.125rem', height: '2.5rem' }}>Trở
                                Lại</button>
                            <button onClick={() => { checkSMS() }} style={{ marginLeft: '0.625rem', minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', backgroundColor: 'red', borderRadius: '0.125rem', height: '2.5rem' }}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}