import Head from "next/head";
import { useEffect, useState } from 'react';
import instance from "../../helpers/axiosConfig";
import { changeRoute } from "../../helpers/customFunction/changeRoute";
import { useRouter } from 'next/router'

export default function PhoneOTPProgress({ open, closeModal, shippingPriceList }) {

    const router = useRouter()

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popupPhoneOTPProgress");
            popup.style.display = "block";
        } else {
            const popup = document.getElementById("popupPhoneOTPProgress");
            popup.style.display = "none";
        }
    }, [open])


    const sendSMS = async () => {
        // const phoneNumber = document.getElementsByClassName('PhoneNumber')[0].value
        const res1 = await instance().get('http://localhost:4000/api/customer/getCurrentCustomer')
        if (res1) {
            const phoneNumber = res1.data.phoneNumber;
            const res = await instance().get('http://localhost:4000/api/customer/sendPhoneSMS')
            if (res) {
                const sms = res.data;
                const res2 = await instance().get('http://localhost:4000/api/sms/sendPhoneSMS', { params: { phoneNumber: phoneNumber, sms: sms } });
                if (res2) {
                    alert('đã send thành công');
                }
            }
        }
    }

    const checkSMS = async () => {
        const sms = document.getElementsByClassName('smsNumber')[0].value;
        const res = await instance().get('http://localhost:4000/api/customer/onCompleteOrderPayment', { params: { sms: sms } })
            .catch(err => {
                alert(err.response.data.message);
            })
        if (res) {
            if (shippingPriceList != null) {
                const req = [];
                for (const [key, value] of shippingPriceList) {
                    console.log(key, value);
                    req.push(key + "-" + value);
                }
                const res1 = await instance().post(`http://localhost:4000/api/order/addCartItemToOrder`, req)
                    .catch((err) => {
                        alert(err.response.data.message)
                        if (err.response.data.message == "Khách hàng không đủ tiền mua hàng, vui lòng nạp thêm") {
                            changeRoute('/account/profile?keyword=shopXu', router)
                        }
                    })
                if (res1) {
                    changeRoute("/order", router)
                }
            }
        }
    }


    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    #popupPhoneOTPProgress {
                        background-color:white;
                        z-index: 1001;
                        border-radius: 3px;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                        /* border: 1px solid red; */
                        padding: 16px;
                        // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                    }
                ` }} />
            </Head>
            <div id="popupPhoneOTPProgress">
                <div>
                    <div style={{ padding: '1.875rem' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 400, color: 'rgba(0, 0, 0, 0.8)', textTransform: 'capitalize' }}>
                            Xác Minh Số Điện Thoại
                        </div>
                    </div>
                    <div style={{ padding: '0 1.875rem' }}>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <input className="smsNumber" type="text" placeholder="Mã xác minh" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                                <button onClick={() => { sendSMS() }} style={{ border: '1px solid rgba(0, 0, 0, 0.5)', backgroundColor: '#fbfbfb', padding: '0 0.625rem' }}>Gửi
                                    Mã xác
                                    minh</button>
                            </div>
                            {/* <div style={{ display: 'flex', marginTop: '30px' }}>
                                <input className="smsNumber" type="text" placeholder="Mã xác minh" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                            </div> */}
                        </div>
                        <div style={{ margin: '1.375rem 0', justifyContent: 'flex-end', display: 'flex' }}>
                            <button onClick={() => { closeModal() }} style={{ minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', background: 'none', borderRadius: '0.125rem', height: '2.5rem' }}>Thoát</button>
                            <button onClick={() => { checkSMS() }} style={{ marginLeft: '0.625rem', minWidth: '8.75rem', outline: 'none', padding: '0 0.625rem', border: 'none', backgroundColor: 'red', borderRadius: '0.125rem', height: '2.5rem' }}>Xác minh</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}