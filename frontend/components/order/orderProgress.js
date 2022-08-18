import Head from "next/head";
import Script from 'next/script';
import instance from "../../helpers/axiosConfig";
import { useEffect, useState } from 'react';

export default function OrderProgress({ open, closeModal, listOrder}) {

    const [userName, setUserName] = useState(null);
    const [saveImg, setSaveImg] = useState(false);

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
        } else {
            setUserName(null);
            setSaveImg(false);
            const popup = document.getElementById("popup");
            popup.style.display = "none";
        }
    }, [open])

    const closeModal1 = () => {
        closeModal('orderProgress');
    }

    const continueStep1 = () => {
        const inputText = document.getElementsByClassName('el-input_name')[0];
        if (inputText.value != "" && inputText.value.length >= 6) {
            setUserName(inputText.value);
            document.getElementsByClassName('step2')[0].classList.add('active');
            document.getElementsByClassName('content_step1')[0].style.display = "none"
            document.getElementsByClassName('content_step2')[0].style.display = "block"
        } else {
            document.getElementsByClassName('errorStep1')[0].style.visibility = 'visible';
        }
    }

    const continueStep2 = async () => {
        let img = document.getElementById("image");
        if (saveImg == true) {
            document.getElementsByClassName('step3')[0].classList.add('active');
            document.getElementsByClassName('content_step2')[0].style.display = "none"
            document.getElementsByClassName('content_step3')[0].style.display = "block"
            const res = await instance().post(`https://localhost:4000/api/digitalSignature/signing`,
                { listOrderItem: listOrder, imageBase64: img.src, userName: userName },
                { headers: { 'Content-Type': 'application/json' }, responseType: 'blob' }).catch((err) => { console.log({ err }) });
            if (res) {
                let url = window.URL.createObjectURL(res.data);
                let a = document.createElement('a');
                a.href = url;
                a.download = "xacNhanOrder.pdf";
                a.click();
                document.getElementsByClassName('content_step3_inside')[0].style.display = "block";
            }
        } else {
            document.getElementsByClassName('errorStep2')[0].style.visibility = 'visible';
        }
    }

    // const thanhToan = () => {
    //     closeModal('orderProgress');
    //     openPhoneOTPProgress('phoneOTPProgress');
    // }

    const isSaveImg = () => {
        if (isCanvasBlank() == false) {
            setSaveImg(true);
        }
    }


    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                #popup {
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
        
                .el-form-item {
                    // transition: margin-bottom .3s;
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
        
                .header-tabs {
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
                            <p className="errorStep1" style={{ color: "red", fontSize: "12px", marginTop: "4px", marginBottom: "4px", visibility: "hidden" }}>Tên ít nhất dài 6 ký tự</p>
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
                            <canvas id="mycanvas" style={{ border: '1px solid #e68a00' }} width={250} height={100} />
                            <img id="image" alt="" style={{ display: "none" }} />
                            <div style={{ marginLeft: '10px' }}>
                                <button id="btn2" className="button_submit" style={{ fontSize: '14px', display: 'block', marginTop: '20px' }}>Clear</button>
                                <button onClick={isSaveImg} id="btn3" className="button_submit" style={{ fontSize: '14px', display: 'block', marginTop: '10px' }}>Save</button>
                            </div>
                        </div>
                        <p className="errorStep2" style={{ color: "red", fontSize: "12px", marginTop: "4px", marginBottom: "4px", visibility: "hidden" }}>Ký tên của bạn và save</p>
                        <button onClick={closeModal1} className="button_submit" style={{ float: 'right', marginTop: '10px' }}>
                            Thoát
                        </button>
                        <button onClick={continueStep2} className="button_submit" style={{ float: 'right', marginRight: '5px', marginTop: '10px' }}>
                            Tiếp tục
                        </button>
                    </div>
                </div>
                <div className="content_step3" style={{ display: 'none' }}>
                    <span style={{ fontFamily: 'Muli,Sarabun', fontWeight: 700, fontSize: '14px' }}>Cảm ơn bạn đã hoàn tất thủ tục, Xin hãy đợi ...</span>
                    <div className="content_step3_inside" style={{ display: "none" }}>
                        <div className="el-form">
                            {/* <button onClick={thanhToan} className="button_submit" style={{ float: 'right', marginTop: '10px', width: '100px' }}>
                                Thanh toán
                            </button> */}
                            <button onClick={closeModal1} className="button_submit" style={{ float: 'right', marginTop: '10px', marginRight: '5px', }}>
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    var mycanvas = document.getElementById("mycanvas");
                    var ctx = mycanvas.getContext("2d");
            
                    var previousMouseX = null;
                    var isDrawing = false;
            
            
                    function getMousePosition(mycanvas, evt) {
            
                        let rect = mycanvas.getBoundingClientRect();
            
                        if (evt.clientX !== undefined && evt.clientY !== undefined) {
                            return {
                                x: evt.clientX - rect.left,
                                y: evt.clientY - rect.top
                            };
                        }
                    }
            
                    /* BUTTONS */
                    $("#btn2").on("click", function () {
                        console.log('????');
                        ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
                        //ctx.strokeStyle = "#009933";
                    });
            
                    $("#btn3").on("click", function () {
                        let img = document.getElementById("image");
                        img.src = mycanvas.toDataURL();
                        console.log(img.src);
                    });
            
                        
                    $("#mycanvas").on("mousedown", function (e) {
                        isDrawing = true;
                        let pos = getMousePosition(mycanvas, e);
                        move(pos.x, pos.y);
            
                    });
            
                    $("#mycanvas").on("mousemove", function (e) {
                        if (isDrawing) {
                            let pos = getMousePosition(mycanvas, e);
                            stroke(pos.x, pos.y);
                        }
                    });
            
                    $("#mycanvas").on("mouseup", function () {
                        isDrawing = false;
                    });
            
                    function stroke(mouseX, mouseY) {
                        ctx.globalCompositeOperation = "source-over";
                        ctx.lineJoin = ctx.lineCap = "round";
                        ctx.lineWidth = 3;
                        ctx.beginPath();
                        ctx.moveTo(previousMouseX, previousMouseY);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.closePath();
                        ctx.stroke();
                        move(mouseX, mouseY);
                    }
            
                    function move(mouseX, mouseY) {
                        previousMouseX = mouseX;
                        previousMouseY = mouseY;
                    }

                    function isCanvasBlank() {
                        return !mycanvas.getContext('2d')
                          .getImageData(0, 0, mycanvas.width, mycanvas.height).data
                          .some(channel => channel !== 0);
                    }
                        `,
                }}
            />
        </>
    )
} 