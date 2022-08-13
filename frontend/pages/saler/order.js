import Head from "next/head";
import { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import OrderView from "../../components/saler/order/orderView";
import InstanceAxios from "../../helpers/axiosConfig";
import { useRouter } from 'next/router'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useSession } from "next-auth/client";
import customStyles from '../../components/saler/customCSS/customCss1.css'
import Layout from "../../components/saler/layout";
import { changeRoute } from "../../helpers/customFunction/changeRoute";


export default function Order() {
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
    const handleChange = (event, newValue) => {
        event.preventDefault();
        router.push({
            pathname: 'order',
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
            const size = router.query.size == null ? 6 : router.query.size;
            const status = router.query.status == null || router.query.status == 0 ? "" : `&status=${router.query.status}`;
            const sorter = router.query.sorter == null ? "" : `&sorter=${router.query.sorter}`;
            InstanceAxios().get(`https://localhost:4000/api/saler/orderSalerList?page=${page - 1}&size=${size}${status}${sorter}`)
                .then((data) => {
                    const map = new Map(Object.entries(data.data.map));
                    setData(map);
                })
                .catch((err) => {
                    alert('Chưa cập nhập profile');
                    changeRoute('/saler/profile', router);
                })
        }
    }, [loading, router.asPath, router.isReady, update])
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
                                        <Tabs TabIndicatorProps={{ style: { backgroundColor: "#ee4d2d" } }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label={<span className={value === 0 ? classes.activeTab : classes.customStyleOnTab}>Tất cả</span>} />
                                            <Tab label={<span className={value === 1 ? classes.activeTab : classes.customStyleOnTab}>Chờ xác nhận</span>} />
                                            <Tab label={<span className={value === 2 ? classes.activeTab : classes.customStyleOnTab}>Chờ lấy hàng</span>} />
                                            <Tab label={<span className={value === 3 ? classes.activeTab : classes.customStyleOnTab}>Đang giao</span>} />
                                            <Tab label={<span className={value === 4 ? classes.activeTab : classes.customStyleOnTab}>Đã giao</span>} />
                                            <Tab label={<span className={value === 5 ? classes.activeTab : classes.customStyleOnTab}>Đơn hủy</span>} />
                                            <Tab label={<span className={value === 6 ? classes.activeTab : classes.customStyleOnTab}>Trả hàng/Hoàn tiền</span>} />
                                        </Tabs>
                                    </Box>
                                    {(!data) && <ScaleLoader color={"#ee4d2d"} cssOverride={customStyles.ScaleLoader} />}
                                    {data && <OrderView value={value} index={value} data={data} tabChange={handleChange} dataChange={setUpdate} > </OrderView>}
                                </Box>
                            </div>
                        </div>
                    </>
                }
            </Layout>
        </>
    );
}


