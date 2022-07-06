import Head from "next/head";
import { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import ProductView from "../../components/saler/product/productView";
import Layout from "../../components/saler/layout";
import InstanceAxios from "../../helpers/axiosConfig";
import { useRouter } from 'next/router'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useSession } from "next-auth/client";
import customStyles from '../../components/saler/customCSS/customCss1.css'
import ProductAddModal from "../../components/saler/modal/productAddModal";


export default function Product() {
    const useStyles = makeStyles({
        customStyleOnTab: {
            fontSize: '12px',
            fontWeight: '500',
        },
        activeTab: {
            fontSize: '14px',
            fontWeight: '500',
            color: '#ee4d2d'
        },
    })
    const classes = useStyles()
    const router = useRouter()
    const [value, setValue] = useState(0);
    const [session, loading] = useSession();
    const [data, setData] = useState(null)
    const [update, setUpdate] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        router.push({
            pathname: 'product',
            query: {
                status: newValue,
            }
        })
        setValue(newValue);
    };
    useEffect(() => {
        if (!router.isReady) return;
        if (session) {
            setData(null)
            setUpdate(null)
            const page = router.query.page == null ? 1 : router.query.page;
            const size = router.query.size == null ? 99 : router.query.size;
            const status = router.query.status == null || router.query.status == 0 ? "" : `&status=${router.query.status}`;
            const sorter = router.query.sorter == null ? "" : `&sorter=${router.query.sorter}`;
            InstanceAxios().get(`http://localhost:4000/api/saler/productSalerList?page=${page - 1}&size=${size}${status}${sorter}`)
                .then((data) => { setData(data.data.page); })
        }
    }, [loading, router.asPath, router.isReady, update])
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <>
            <Head> <title> Saler Order </title> </Head>
            <Layout shop>
                {
                    <>
                        <div className="page-content" id="boxOK">
                            <div className="mcw" >
                                <Box sx={{ width: '120%' }}>
                                    <Box sx={{ borderColor: 'divider', borderLeftWidth: '3' }}>
                                        <button onClick={() => openModal()} id="addButton">Thêm Sản Phẩm Mới</button>
                                        <Tabs TabIndicatorProps={{ style: { backgroundColor: "#ee4d2d" } }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label={<span className={value === 0 ? classes.activeTab : classes.customStyleOnTab}>Tất cả</span>} />
                                            <Tab label={<span className={value === 1 ? classes.activeTab : classes.customStyleOnTab}>Đang Hoạt Động</span>} />
                                            <Tab label={<span className={value === 2 ? classes.activeTab : classes.customStyleOnTab}>Hết Hàng</span>} />
                                            <Tab label={<span className={value === 3 ? classes.activeTab : classes.customStyleOnTab}>Chờ Duyệt</span>} />
                                            <Tab label={<span className={value === 4 ? classes.activeTab : classes.customStyleOnTab}>Vi Phạm</span>} />
                                        </Tabs>

                                    </Box>

                                    {(!data) && <ScaleLoader color={"#ee4d2d"} cssOverride={customStyles.ScaleLoader} />}
                                    {data && <ProductView value={value} index={value} data={data} tabChange={handleChange} dataChange={setUpdate} > </ProductView>}
                                </Box>
                            </div>
                        </div>
                        <ProductAddModal open={modalIsOpen} closeModal={closeModal}></ProductAddModal>
                    </>
                }
            </Layout>
        </>
    );
}


