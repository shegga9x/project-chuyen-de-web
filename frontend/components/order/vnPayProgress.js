import Head from "next/head";
import { useEffect, useState } from 'react';

export default function VNPayProgress({ open, closeModal, listOrder }) {

    const [bankCode, setBankCode] = useState(null);

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popupVnPayProgress");
            popup.style.display = "block";
        } else {
            const popup = document.getElementById("popupVnPayProgress");
            popup.style.display = "none";
        }
    }, [open])

    const onChooseBankCode = (event) => {
        const target = event.target;

        // reset all border
        let list = document.getElementsByClassName('mobile-banking-logo');
        for (let i = 0; i < list.length; i++) {
            list[i].getElementsByTagName('img')[0].style.border = "none";
        }

        target.style.border = "1px solid red";

        if (target.id != "") {
            setBankCode(target.id);
        }
    }

    const total = () => {

    }

    const onSubmit = () => {
        if (bankCode != null) {
            console.log(listOrder);
        } else {
            alert("Vui lòng chọn ngân hàng thanh toán");
        }
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                <style dangerouslySetInnerHTML={{
                    __html: `
                    #popupVnPayProgress {
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

                    .col-md-12 .group-mobile-banking-logo .col-xs-4 {
                        width: 14.285%;
                    }

                    .mobile-banking-logo img {
                        max-width: 100%;
                    }
                ` }} />
            </Head>
            <div id="popupVnPayProgress">
                <div className="col-md-12" style={{ width: "500px" }}>
                    <div className="box box-form box-mobile-banking-logo">
                        <div>
                            <p style={{ fontSize: "14px" }}>
                                Vui lòng chọn ngân hàng thanh toán
                            </p>
                            <div className="icon-title" />
                        </div>
                        <div className="group-mobile-banking-logo">
                            <div className="row">
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img id="VIETCOMBANK" src="https://pay.vnpay.vn/images/bank/qr-vietcombank.png" alt="VCB Mobile-B@anking" title="VCB Mobile-B@anking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img id="AGRIBANK" src="https://pay.vnpay.vn/images/bank/qr-agribank.png" alt="Agribank E-Mobile Banking" title="Agribank E-Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img id="BIDV" src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-bidv.png" alt="BIDV Smart Banking" title="BIDV Smart Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img id="NCB" src="https://sandbox.vnpayment.vn/paymentv2/images/bank/ncb_logo.png" alt="NCB" title="VietinBank IPay" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img id="VISA" src="https://sandbox.vnpayment.vn/paymentv2/images/bank/visa_logo.png" alt="VISA" title="VNPAY E-Wallet" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vcbpay.png" alt="VietcomBank Pay" title="VietcomBank Pay" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-scb.png" alt="SCB Mobile Banking" title="SCB Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-abbank.png" alt="ABBANK Mobile Banking" title="ABBANK Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-seabank.png" alt="Seabank SmartBanking" title="Seabank SmartBanking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-ivb.png" alt="IVB Mobile Banking" title="IVB Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vietbank.png" alt="Vietbank Digital" title="Vietbank Digital" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-eximbank.png" alt="Eximbank Mobile Banking" title="Eximbank Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-ojb.png" alt="OceanBank Mobile Banking" title="OceanBank Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-nab.png" alt="NamABank Mobile Banking" title="NamABank Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-baovietbank.png" alt="BAOVIET Smart" title="BAOVIET Smart" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-hdbank.png" alt="HDBank Mobile Banking" title="HDBank Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-saigonbank.png" alt="SAIGONBANK SmartBanking" title="SAIGONBANK SmartBanking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-kienlongbank.png" alt="Kienlongbank Mobile Banking" title="Kienlongbank Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-bidc.png" alt="BIDC Mobile Banking" title="BIDC Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vietabank.png" alt="VietABank Mobile Banking" title="VietABank Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-msb.png" alt="MSB mBank" title="MSB mBank" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-shb.png" alt="SHB Mobile Banking" title="SHB Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vib.png" alt="VIB Mobile Banking" title="VIB Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-tpbank.png" alt="TPBANK QuickPay" title="TPBANK QuickPay" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-mbbank.png" alt="MBBANK Mobile Banking" title="MBBANK Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-bacabank.png" alt="BacABank Mobile Banking" title="BacABank Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-acb.png" alt="ACB Mobile Banking" title="ACB Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-ocb.png" alt="OCB Mobile Banking" title="OCB Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-woori.png" alt="WOORIBANK Mobile Banking" title="WOORIBANK Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-pvcombank.png" alt="PVCOMBANK Mobile Banking" title="PVCOMBANK Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vietcap.png" alt="VietCapital Mobile Banking" title="VietCapital Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-shinhanbank.png" alt="Shinhan Bank Vietnam SOL" title="Shinhan Bank Vietnam SOL" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-coopbank.png" alt="CoopBank" title="CoopBank" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vbsp.png" alt="VBSP Mobile Banking" title="VBSP Mobile Banking" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vidbank.png" alt="Public Bank Vietnam" title="Public Bank Vietnam" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vnptpay.png" alt="VNPTPAY E-wallet" title="VNPTPAY E-wallet" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vinid.png" alt="VINID E-wallet" title="VINID E-wallet" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-galaxypay.png" alt="GALAXYPAY E-wallet" title="GALAXYPAY E-wallet" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-vimass.png" alt="VIMASS E-wallet" title="VIMASS E-wallet" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-viting.png" alt="Ví Ting" title="Ví Ting" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-1pay.png" alt="TrueMoney E-wallet" title="TrueMoney E-wallet" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-viviet.png" alt="Ví Việt" title="Ví Việt" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://pay.vnpay.vn/images/bank/qr-yolo.png" alt="Vi dien tu YOLO" title="Vi dien tu YOLO" />
                                    </a>
                                </div>
                                <div className="col-xs-4">
                                    <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                        <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vtcpay.png" alt="Ví điện tử VTCPay" title="Ví điện tử VTCPay" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <button onClick={() => { closeModal('vnPayProgress') }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered', marginRight: "10px" }}>Thoát</button>
                            <button onClick={() => { onSubmit() }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered' }}>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}