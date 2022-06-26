import { useState, useEffect } from "react";
import Head from "next/head";
export default function Test() {

    const [del, setDelete] = useState(false);

    const test = () => {
        const ele = document.getElementById('test');
        ele.style.removeProperty('height');
        ele.style.maxHeight = 100 + "px";
        setDelete(true);
    }

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    ul {
                        list-style-type: none;
                    }
            
                    #test {
                        overflow: hidden;
                        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    ` }} />
            </Head>
            <div className="container" style={{ border: '1px solid red' }}>
                <ul>
                    <li onClick={test}>
                        List A
                        <div id="test" style={{ maxHeight: 0 }}>
                            <ul id="wrapper">
                                <li>List A sub</li>
                                <li>List A sub</li>
                                <li>List A sub</li>
                                <li>List A sub</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        List B
                        <ul>
                            <li>List B sub</li>
                            <li>List B sub</li>
                            <li>List B sub</li>
                            <li>List B sub</li>
                        </ul>
                    </li>
                    <div>
                        {del && <h1>bun</h1>}
                    </div>
                </ul>
            </div>
        </>
    );
}
