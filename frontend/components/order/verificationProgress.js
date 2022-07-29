import Head from "next/head";
import instance from "../../helpers/axiosConfig";
import { useEffect, useState } from 'react';

export default function VerificationProgress({ open, closeModal }) {

    const [base64FileData, setBase64FileData] = useState(null);
    const [base64FileEncry, setBase64FileEncry] = useState(null);

    useEffect(() => {
        if (open) {
            const popup = document.getElementById("popupVerificationProgress");
            popup.style.display = "block";
        } else {
            setBase64FileData(null);
            setBase64FileEncry(null);
            const popup = document.getElementById("popupVerificationProgress");
            popup.style.display = "none";
        }
    }, [open])

    const readFileData = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            document.getElementById('verificationProgress_fileData_status').style.visibility = 'visible'
            document.getElementById('verificationProgress_fileData_status').innerText = 'Uploading...'
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0])
            reader.onload = function (e) {
                setBase64FileData(e.target.result.split(",")[1]);
                document.getElementById('verificationProgress_fileData_status').innerText = 'done'
            }
        }
    }

    const readFileEncry = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            document.getElementById('verificationProgress_fileEncry_status').style.visibility = 'visible'
            document.getElementById('verificationProgress_fileEncry_status').innerText = 'Uploading...'
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0])
            reader.onload = function (e) {
                setBase64FileEncry(e.target.result.split(",")[1])
                document.getElementById('verificationProgress_fileEncry_status').innerText = 'done'
            }
        }
    }

    const onXacMinh = async () => {
        const hash = document.getElementById('hash').value;
        const decry = document.getElementById('decry').value;
        const mode = document.getElementById('mode').value;
        const padding = document.getElementById('padding').value;
        console.log(base64FileEncry);
        const digitalSignatureRequest2 = { hash: hash, decry: decry, mode: mode, padding: padding, base64FileData: base64FileData, base64FileEncry: base64FileEncry };
        document.getElementById('xm').style.visibility = 'visible';
        document.getElementById('xmtb').style.display = 'none';
        document.getElementById('xmtc').style.display = 'none';
        document.getElementById('dxm').style.display = 'block';
        const req = await instance().post(`http://localhost:4000/api/digitalSignature/verifying2`, { ...digitalSignatureRequest2 })
            .catch((err) => {
                document.getElementById('dxm').style.display = 'none';
                document.getElementById('xmtb').style.display = 'block';
            })
        if (req) {
            document.getElementById('dxm').style.display = 'none';
            document.getElementById('xmtc').style.display = 'block';
        }
    }

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                #popupVerificationProgress {
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

                p {
                    margin: 0;
                    min-width: 150px;
                }

                button {
                    outline: none; 
                    border: none
                }

                button:focus {
                    outline: none; 
                }

                .verificationProgress_body_ele {
                    margin-bottom: 10px;
                }
                ` }} />
            </Head>
            <div id="popupVerificationProgress">
                <div className="verificationProgress_body" style={{ fontSize: "14px" }}>
                    <div className="verificationProgress_body_ele" style={{ display: "flex" }}>
                        <p>Hashing</p>
                        <select id="hash" defaultValue={"Blake2b-160"} style={{ minWidth: "258px", zIndex: "1" }}>
                            <option value={'Blake2b-160'}>Blake2b-160</option>
                            <option value={"Blake2b-256"}>Blake2b-256</option>
                            <option value={"Blake2b-384"}>Blake2b-384</option>
                            <option value={"Blake2b-512"}>Blake2b-512</option>
                            <option value={"DSTU7564-256"}>DSTU7564-256</option>
                            <option value={"GOST3411-2012-256"}>GOST3411-2012-256</option>
                            <option value={"Haraka-512"}>Haraka-512</option>
                            <option value={"Keccak-512"}>Keccak-512</option>
                            <option value={"MD5"}>MD5</option>
                            <option value={"RipeMD256"}>RipeMD256</option>
                            <option value={"SHA1"}>SHA1</option>
                            <option value={"SHA-256"}>SHA-256</option>
                            <option value={"SHA3-384"}>SHA3-384</option>
                            <option value={"Skein-512-*"}>Skein-512-*</option>
                            <option value={"SM3"}>SM3</option>
                            <option value={"Tiger"}>Tiger</option>
                            <option value={"Whirlpool"}>Whirlpool</option>
                        </select>
                    </div>
                    <div className="verificationProgress_body_ele" style={{ display: "flex" }}>
                        <p>DecryAlgorithm</p>
                        <select id="decry" defaultValue={"RSA"} style={{ minWidth: "258px", zIndex: "1" }}>
                            <option value={'RSA'}>RSA</option>
                        </select>
                    </div>
                    <div className="verificationProgress_body_ele" style={{ display: "flex" }}>
                        <p>Mode</p>
                        <select id="mode" defaultValue={"ECB"} style={{ minWidth: "258px", zIndex: "1" }}>
                            <option value={"NONE"}>NONE</option>
                            <option value={"ECB"}>ECB</option>
                        </select>
                    </div>
                    <div className="verificationProgress_body_ele" style={{ display: "flex" }}>
                        <p>Padding</p>
                        <select id="padding" style={{ minWidth: "258px" }} defaultValue={"PKCS1Padding"}>
                            <option value={"NoPadding"}>NoPadding</option>
                            <option value={"PKCS1Padding"}>PKCS1Padding</option>
                            <option value={"OAEPWithMD5AndMGF1Padding"}>OAEPWithMD5AndMGF1Padding</option>
                            <option value={"OAEPWithSHA1AndMGF1Padding"}>OAEPWithSHA1AndMGF1Padding</option>
                            <option value={"OAEPWithSHA224AndMGF1Padding"}>OAEPWithSHA224AndMGF1Padding</option>
                            <option value={"ISO9796-1Padding"}>ISO9796-1Padding</option>
                        </select>
                    </div>
                    <div className="verificationProgress_body_ele" style={{ display: "flex" }}>
                        <p>File data</p>
                        <input onChange={(event) => { readFileData(event) }} id="verificationProgress_fileData" type="file" style={{ display: "none" }}></input>
                        <button onClick={() => { document.getElementById('verificationProgress_fileData').click() }}>Choose File</button>
                        <p id="verificationProgress_fileData_status" style={{ paddingLeft: "10px", paddingTop: "2px", visibility: "hidden" }}>Uploading...</p>
                    </div>
                    <div className="verificationProgress_body_ele" style={{ display: "flex" }}>
                        <p>File encry</p>
                        <input onChange={(event) => { readFileEncry(event) }} id="verificationProgress_fileEncry" type="file" style={{ display: "none" }}></input>
                        <button onClick={() => { document.getElementById('verificationProgress_fileEncry').click() }}>Choose File</button>
                        <p id="verificationProgress_fileEncry_status" style={{ paddingLeft: "10px", paddingTop: "2px", visibility: "hidden" }}>Uploading...</p>
                    </div>
                    <div id="xm" className="verificationProgress_body_ele" style={{ display: "flex", textAlign: "center", visibility: "hidden" }}>
                        <p id="dxm" style={{ width: "100%" }}>Đang xác minh...</p>
                        <p id="xmtc" style={{ width: "100%", display: "none" }}>Xác minh thành công <a style={{ color: "blue", textDecoration: "underline" }}>chi tiết</a></p>
                        <p id="xmtb" style={{ width: "100%", display: "none" }}>Xác minh thất bại</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <button onClick={() => { closeModal('verificationProgress') }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered', marginRight: "10px" }}>Thoát</button>
                        <button onClick={() => { onXacMinh() }} style={{ outline: 'none', border: 'none', backgroundColor: 'orangered' }}>Xác minh</button>
                    </div>
                </div>
            </div>
        </>
    )
}