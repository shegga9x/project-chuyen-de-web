import Head from "next/head"
import { useEffect, useState } from "react"
import axios from "axios";

export default function ModalShopXu({ open, closeModal }) {

    const [bankCode, setBankCode] = useState(null);

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popup");
            setTimeout(() => { popup.style.transform = 'translate(-50%, -50%) scale(1.0)' }, 100);
        } else {
            setBankCode(null);
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

    const napXu = async () => {
        const XuNumber = document.getElementsByClassName('XuNumber')[0];
        if (XuNumber.value != '') {
            if (bankCode != null) {
                const total = XuNumber.value;
                const res = await axios.get(`https://localhost:4000/api/vnPay/createLink`, { params: { amount: total, bankCode: bankCode } })
                if (res) {
                    let a = document.createElement('a');
                    a.href = res.data;
                    a.click();
                }
            } else {
                alert("Vui lòng chọn ngân hàng thanh toán");
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

                .col-md-12 .group-mobile-banking-logo .col-xs-4 {
                    width: 14.285%;
                }

                .mobile-banking-logo img {
                    max-width: 100%;
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
                            <div style={{ display: 'flex', marginBottom: '15px' }}>
                                <input className="XuNumber" type="text" onChange={(event) => { onlyNumberKey(event) }} placeholder="Số Xu Nạp" style={{ flex: 1, padding: '0.625rem', outline: 'none', border: '1px solid rgba(0, 0, 0, 0.14)', height: '2.5rem' }} />
                            </div>
                        </div>
                        <div className="col-md-12" style={{ width: "500px" }}>
                            <div className="box box-form box-mobile-banking-logo">
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
                                                <img id="BIDV" src="https://sandbox.vnpayment.vn/paymentv2/images/img/logos/bank/big/bidv.svg" alt="BIDV Smart Banking" title="BIDV Smart Banking" />
                                            </a>
                                        </div>
                                        <div className="col-xs-4">
                                            <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                                <img id="NCB" src="https://sandbox.vnpayment.vn/paymentv2/images/img/logos/bank/big/ncb.svg" alt="NCB" title="VietinBank IPay" />
                                            </a>
                                        </div>
                                        <div className="col-xs-4">
                                            <a onClick={(event) => { onChooseBankCode(event) }} className="mobile-banking-logo mobile-banking-logo-short" role="button">
                                                <img src="https://pay.vnpay.vn/images/bank/qr-vcbpay.png" alt="VietcomBank Pay" title="VietcomBank Pay" />
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
                                                <img src="https://pay.vnpay.vn/images/bank/qr-vimass.png" alt="VIMASS E-wallet" title="VIMASS E-wallet" />
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
                                    </div>
                                </div>
                                {/* <div style={{ textAlign: "right" }}>
                                    <button onClick={() => { closeModal('vnPayProgress') }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered', marginRight: "10px" }}>Thoát</button>
                                    <button onClick={() => { onSubmit() }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered' }}>Thanh toán</button>
                                </div> */}
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