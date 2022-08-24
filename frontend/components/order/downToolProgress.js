import Head from "next/head";
import instance from "../../helpers/axiosConfig";
import { useEffect, useState } from 'react';

export default function DownToolProgress({ open, closeModal }) {

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popupDownTool");
            popup.style.display = "block";
        } else {
            const popup = document.getElementById("popupDownTool");
            popup.style.display = "none";
        }
    }, [open])

    const downTool = async () => {
        const checkbox = document.getElementById('checkboxDownTool');
        if (checkbox.checked == true) {
            document.getElementById('downToolProgress_body_begin').style.display = "none";
            document.getElementById('downToolProgress_body_progress').style.display = "block";
            const res = await instance().get(`https://sqlshop123.herokuapp.com/api/digitalSignature/generateKeyPair`,
                { headers: { 'Content-Type': 'application/json' }, responseType: 'blob' }).catch((err) => { console.log({ err }) });
            if (res) {
                let url = window.URL.createObjectURL(res.data);
                let a = document.createElement('a');
                a.href = url;
                a.download = "keyPri.key";
                a.click();
                document.getElementById('button_div_progress').style.display = 'block';

                //
                a.href = 'https://drive.google.com/file/d/15aVOk7Cmrkwfi_ZuSNHOYqwmYLNj3YLk/view?usp=sharing';
                a.target = "_blank";
                a.click();
            }
        } else {
            alert('Bạn chưa đồng ý điều khoản và dịch vụ')
        }
    }

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                #popupDownTool {
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
            <div id="popupDownTool">
                <div id="downToolProgress_body_begin" style={{ fontSize: "14px" }}>
                    <p>Bạn có tin tưởng và đồng ý tải tool này không</p>
                    <input id="checkboxDownTool" type="checkbox" value="checkbox"></input>
                    <label style={{ paddingLeft: "4px" }}> Tôi tin tưởng và đồng ý tải tool</label>
                    <div id="button_div_begin" style={{ textAlign: "right" }}>
                        <button onClick={() => { closeModal('downToolProgress') }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered', marginRight: "10px" }}>Trở lại</button>
                        <button onClick={() => { downTool() }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered' }}>Tải tool</button>
                    </div>
                </div>
                <div id="downToolProgress_body_progress" style={{ display: "none", fontSize: "14px" }}>
                    <p>Đang trong quá trình lấy link tải tool.Xin hãy đợi ...</p>
                    <div id="button_div_progress" style={{ textAlign: "right", display: "none" }}>
                        <button onClick={() => { closeModal('downToolProgress') }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered' }}>Thoát</button>
                    </div>
                </div>
            </div>
        </>
    )
}