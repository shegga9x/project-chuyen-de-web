// import axios from "axios";
import Head from "next/head";
import Script from 'next/script';
import instance from "../../helpers/axiosConfig";
export default function Canvas() {

    const bt4nOnClick = async () => {
        let img = document.getElementById("image");
        const res = await instance.post(`http://localhost:4000/api/digitalSignature/signing`, img.src, { headers: { 'Content-Type': 'text/plain' }, responseType: 'blob' }).catch((err) => { console.log({ err }) });
        if (res) {
            let url = window.URL.createObjectURL(res.data);
            let a = document.createElement('a');
            a.href = url;
            a.download = "test.pdf";
            a.click();
        }
    }

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: "\ncanvas {\nborder: 1px solid #000;\n}\n" }} />
            </Head>
            <input type="button" id="btn1" defaultValue="Solid" />
            <input type="button" id="btn2" defaultValue="Clear" />
            <input type="button" id="btn3" defaultValue="Save" />
            <input type="button" id="btn4" defaultValue="Submit" onClick={() => { bt4nOnClick() }} /><br />
            <canvas id="canvas" width={500} height={500} />
            <img id="image" alt="" />
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    let canvas = document.getElementById("canvas");
                    let ctx = canvas.getContext("2d");
            
                    let previousMouseX = null;
                    let isDrawing = false;
            
            
                    function getMousePosition(canvas, evt) {
            
                        let rect = canvas.getBoundingClientRect();
            
                        if (evt.clientX !== undefined && evt.clientY !== undefined) {
                            return {
                                x: evt.clientX - rect.left,
                                y: evt.clientY - rect.top
                            };
                        }
                    }
            
                    /* BUTTONS */
                    $("#btn1").on("click", function () {
                        ctx.globalAlpha = "1";
                    });
            
                    $("#btn2").on("click", function () {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        //ctx.strokeStyle = "#009933";
                    });
            
                    $("#btn3").on("click", function () {
                        let img = document.getElementById("image");
                        img.src = canvas.toDataURL();
                        console.log(img.src);
                    });
            
                        
                    $("#canvas").on("mousedown", function (e) {
                        isDrawing = true;
                        let pos = getMousePosition(canvas, e);
                        move(pos.x, pos.y);
            
                    });
            
                    $("#canvas").on("mousemove", function (e) {
                        if (isDrawing) {
                            let pos = getMousePosition(canvas, e);
                            stroke(pos.x, pos.y);
                        }
                    });
            
                    $("#canvas").on("mouseup", function () {
                        isDrawing = false;
                    });
            
                    function stroke(mouseX, mouseY) {
                        ctx.globalCompositeOperation = "source-over";
                        ctx.lineJoin = ctx.lineCap = "round";
                        ctx.lineWidth = 10;
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
                        `,
                }}
            />
        </>
    )
}