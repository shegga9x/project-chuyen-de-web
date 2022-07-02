import Head from "next/head";
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import Layout from "../components/saler/layout";

export default function Saler() {
  const useStyles = makeStyles({
    customStyleOnTab: {
      fontSize: '12px',
      fontWeight: '500',
    },
    activeTab: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#ee4d2d'
    }
  })
  const classes = useStyles()
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Head> <title> Saler </title> </Head>
      <Layout shop>
        {
          <>
            <div className="page-content">
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
                </Box>
              </div>
            </div>
          </>
        }
      </Layout>
    </>
  );

}

