import Layout from "../components/layout";
import Canvas from "../components/canvas";
export default function canvas() {

    return (
        <>
            <Layout>
                <div style={{ display: "block" }}>
                    <Canvas></Canvas>
                </div>
            </Layout>
        </>
    )
}