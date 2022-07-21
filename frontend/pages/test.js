import Head from "next/head";

export default function test() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .col-md-12 .group-mobile-banking-logo .col-xs-4 {
                        width: 14.285%;
                    }
                    .mobile-banking-logo img {
                        max-width: 100%;
                    }
                ` }} />
            </Head>
            <div className="col-md-12">
                <div className="box box-form box-mobile-banking-logo">
                    <div className="title-bottom">
                        <h2 className>
                            Sử dụng Ứng dụng hỗ trợ <span className="inline-block"><span className="vnpay--red">VN</span><span className="vnpay--blue">PAY</span><sup className="vnpay--red">QR</sup></span>
                        </h2>
                        <div className="icon-title" />
                    </div>
                    <div className="group-mobile-banking-logo">
                        <div className="row">
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vietcombank.png" alt="VCB Mobile-B@anking" title="VCB Mobile-B@anking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-agribank.png" alt="Agribank E-Mobile Banking" title="Agribank E-Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-bidv.png" alt="BIDV Smart Banking" title="BIDV Smart Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-ipay.png" alt="VietinBank IPay" title="VietinBank IPay" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vnpayewallet.png" alt="VNPAY E-Wallet" title="VNPAY E-Wallet" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vcbpay.png" alt="VietcomBank Pay" title="VietcomBank Pay" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-scb.png" alt="SCB Mobile Banking" title="SCB Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-abbank.png" alt="ABBANK Mobile Banking" title="ABBANK Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-seabank.png" alt="Seabank SmartBanking" title="Seabank SmartBanking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-ivb.png" alt="IVB Mobile Banking" title="IVB Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vietbank.png" alt="Vietbank Digital" title="Vietbank Digital" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-eximbank.png" alt="Eximbank Mobile Banking" title="Eximbank Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-ojb.png" alt="OceanBank Mobile Banking" title="OceanBank Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-nab.png" alt="NamABank Mobile Banking" title="NamABank Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-baovietbank.png" alt="BAOVIET Smart" title="BAOVIET Smart" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-hdbank.png" alt="HDBank Mobile Banking" title="HDBank Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-saigonbank.png" alt="SAIGONBANK SmartBanking" title="SAIGONBANK SmartBanking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-kienlongbank.png" alt="Kienlongbank Mobile Banking" title="Kienlongbank Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-bidc.png" alt="BIDC Mobile Banking" title="BIDC Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vietabank.png" alt="VietABank Mobile Banking" title="VietABank Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-msb.png" alt="MSB mBank" title="MSB mBank" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-shb.png" alt="SHB Mobile Banking" title="SHB Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vib.png" alt="VIB Mobile Banking" title="VIB Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-tpbank.png" alt="TPBANK QuickPay" title="TPBANK QuickPay" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-mbbank.png" alt="MBBANK Mobile Banking" title="MBBANK Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-bacabank.png" alt="BacABank Mobile Banking" title="BacABank Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-acb.png" alt="ACB Mobile Banking" title="ACB Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-ocb.png" alt="OCB Mobile Banking" title="OCB Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-woori.png" alt="WOORIBANK Mobile Banking" title="WOORIBANK Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-pvcombank.png" alt="PVCOMBANK Mobile Banking" title="PVCOMBANK Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vietcap.png" alt="VietCapital Mobile Banking" title="VietCapital Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-shinhanbank.png" alt="Shinhan Bank Vietnam SOL" title="Shinhan Bank Vietnam SOL" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-coopbank.png" alt="CoopBank" title="CoopBank" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vbsp.png" alt="VBSP Mobile Banking" title="VBSP Mobile Banking" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vidbank.png" alt="Public Bank Vietnam" title="Public Bank Vietnam" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vnptpay.png" alt="VNPTPAY E-wallet" title="VNPTPAY E-wallet" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vinid.png" alt="VINID E-wallet" title="VINID E-wallet" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-galaxypay.png" alt="GALAXYPAY E-wallet" title="GALAXYPAY E-wallet" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-vimass.png" alt="VIMASS E-wallet" title="VIMASS E-wallet" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-viting.png" alt="Ví Ting" title="Ví Ting" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-1pay.png" alt="TrueMoney E-wallet" title="TrueMoney E-wallet" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-viviet.png" alt="Ví Việt" title="Ví Việt" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://pay.vnpay.vn/images/bank/qr-yolo.png" alt="Vi dien tu YOLO" title="Vi dien tu YOLO" />
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a className="mobile-banking-logo mobile-banking-logo-short" href="#" data-toggle="modal" data-target="#modal-guide" role="button">
                                    <img src="https://sandbox.vnpayment.vn/paymentv2/images/bank/qr-vtcpay.png" alt="Ví điện tử VTCPay" title="Ví điện tử VTCPay" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

