import Head from "next/head";
import { useEffect } from 'react';
export default function OrderProgress({ open, closeModal }) {


    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popup");
            popup.style.opacity = 1;
        } else {
            const popup = document.getElementById("popup");
            popup.style.opacity = 0;
        }
    }, [open])

    const closeModal1 = () => {
        closeModal();
    }

    const continueStep1 = () => {

    }

    const continueStep2 = () => {

    }


    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                #popup {
                    opacity: 0;
                    transition: opacity 0.7s;
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
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                }
        
                .el-form-item {
                    transition: margin-bottom .3s;
                    margin-bottom: 10px;
                }
        
                .el-input .el-input_name {
                    border-radius: 4px;
                    background: #fff;
                    border: 1px solid gainsboro;
                    padding: 2px 0px 2px 6px;
                    font-size: 14px;
        
                }
        
                .el-input .el-input_name:focus {
                    border: 1px solid #e68a00;
                    outline: none;
                    border-radius: 4px;
                    /* background: #fff; */
                }
        
                .el-form .button_submit {
                    font-size: 14px;
                    width: 80px;
                    border: none;
                    border-radius: 5px;
                    color: white;
                    background-color: #e68a00;
                    transition: opacity 1s;
                }
        
                .el-form .button_submit:hover {
                    opacity: 0.7;
                }
        
                .el-form .button_submit:focus {
                    outline: none;
                }
        
                ​ .header-tabs {
                    margin-top: 10px;
                }
        
                .header-tabs ul {
                    display: flex;
                    list-style-type: none;
                    padding: 0;
                }
        
                .header-tabs ul li {
                    position: relative;
                    border: 1px solid red;
                    width: 120px;
                    text-align: center;
                    /* margin-left: 5px; */
                    height: 12px;
                    border-radius: 10px;
                }
        
                .header-tabs>ul>li>span {
                    position: absolute;
                    font-size: 15px;
                    border-radius: 50%;
                    padding: 2px 6px 2px 6px;
                    /* border: 1px solid greenyellow; */
                    background-color: #e68a00;
                }
        
                .header-tabs .active {
                    background-color: #ffb84d;
                }
        
                hr {
                    margin: 4px 0px 0px 0px;
                }
                ` }} />
            </Head>
            <div id="popup">
                <div className="header-tabs">
                    <ul>
                        <li className="step1 active" style={{ width: '60px' }}>
                            <span style={{ right: '-12px', top: '-8px', zIndex: 3 }}>1</span>
                        </li>
                        <li className="step2">
                            <span style={{ right: '-12px', top: '-8px', zIndex: 3 }}>2</span>
                        </li>
                        <li className="step3" style={{ width: '180px' }}>
                            <span style={{ right: '50px', top: '-8px', zIndex: 3 }}>3</span>
                        </li>
                    </ul>
                </div>
                <div className="content_step1">
                    <span style={{ fontFamily: 'Muli,Sarabun', fontWeight: 700, fontSize: '14px' }}>Xin vui lòng cho biết tên của
                        bạn</span>
                    <div className="el-form">
                        <div className="el-form-item">
                            <div className="el-input">
                                <input type="text" className="el-input_name" />
                            </div>
                        </div>
                        <button onClick={closeModal1} className="button_submit" style={{ float: 'right' }}>
                            Thoát
                        </button>
                        <button onClick={continueStep1} className="button_submit" style={{ float: 'right', marginRight: '5px' }}>
                            Tiếp tục
                        </button>
                    </div>
                </div>
                <div className="content_step2" style={{ display: 'none' }}>
                    <span style={{ fontFamily: 'Muli,Sarabun', fontWeight: 700, fontSize: '14px' }}>Xin vui lòng cho biết chữ ký của
                        bạn</span>
                    <div className="el-form">
                        <div style={{ display: 'flex' }}>
                            <canvas style={{ border: '1px solid #e68a00', width: '250px', height: '100px' }} />
                            <div style={{ marginLeft: '10px' }}>
                                {/* <button class="button_submit"
                            style="font-size: 14px;display: block;margin-top: 4px;">Start</button> */}
                                <button className="button_submit" style={{ fontSize: '14px', display: 'block', marginTop: '20px' }}>Clear</button>
                                <button className="button_submit" style={{ fontSize: '14px', display: 'block', marginTop: '10px' }}>Save</button>
                            </div>
                        </div>
                        <button onClick={closeModal1} className="button_submit" style={{ float: 'right', marginTop: '10px' }}>
                            Thoát
                        </button>
                        <button onClick={continueStep2} className="button_submit" style={{ float: 'right', marginRight: '5px', marginTop: '10px' }}>
                            Tiếp tục
                        </button>
                    </div>
                </div>
                <div className="content_step3" style={{ display: 'none' }}>
                    <span style={{ fontFamily: 'Muli,Sarabun', fontWeight: 700, fontSize: '14px' }}>Cảm ơn bạn đã hoàn tất thủ tục, Xin hãy đợi</span>
                    <div style={{ display: "none" }}>
                        <div className="el-form" style={{ textAlign: 'center' }}>
                            <button className="button_submit" style={{ marginTop: '10px', width: '180px' }}>
                                Download file PDF
                            </button>
                        </div>
                        <div className="el-form">
                            <button onClick={closeModal1} className="button_submit" style={{ float: 'right', marginTop: '10px' }}>
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 