import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import LayoutAdmin from "../../components/layoutAdmin";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import BrowseProductsTable from "../../components/admin/browse-products/browse-products-table";
import instance from "../../helpers/axiosConfig";
import { getSession } from 'next-auth/client';
import ScaleLoader from "react-spinners/ScaleLoader";

const customCss = {
    textAlign: "center"
}

export default function BrowseProducts({ singleProductPages }) {

    const [value, setValue] = useState('one');
    const [productsPages, setProductPages] = useState(singleProductPages);
    const [loading, isLoading] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <LayoutAdmin>
                <div className="container-fluid">
                    <Box>
                        <TabContext value={value}>
                            <Box sx={{ width: "100%" }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    textColor="inherit"
                                    indicatorColor="secondary"
                                    aria-label="inherit tabs example"
                                    centered
                                >
                                    <Tab value="one" label="Tất cả" />
                                    <Tab value="two" label="Chờ duyệt" />
                                    <Tab value="three" label="Đang hoạt động" />
                                    <Tab value="four" label="Vi phạm" />
                                </Tabs>
                            </Box>
                            <TabPanel value="one">
                                {
                                    !loading ? (<BrowseProductsTable singleProductPages={productsPages} setProductPages={setProductPages} isLoading={isLoading} status={0}></BrowseProductsTable>) : <ScaleLoader cssOverride={customCss} color="blue"></ScaleLoader>
                                }
                            </TabPanel>
                            <TabPanel value="two">
                                {
                                    !loading ? (<BrowseProductsTable singleProductPages={productsPages} setProductPages={setProductPages} isLoading={isLoading} status={3}></BrowseProductsTable>) : <ScaleLoader cssOverride={customCss} color="blue"></ScaleLoader>
                                }
                            </TabPanel>
                            <TabPanel value="three">
                                {
                                    !loading ? (<BrowseProductsTable singleProductPages={productsPages} setProductPages={setProductPages} isLoading={isLoading} status={1}></BrowseProductsTable>) : <ScaleLoader cssOverride={customCss} color="blue"></ScaleLoader>
                                }
                            </TabPanel>
                            <TabPanel value="four">
                                {
                                    !loading ? (<BrowseProductsTable singleProductPages={productsPages} setProductPages={setProductPages} isLoading={isLoading} status={4}></BrowseProductsTable>) : <ScaleLoader cssOverride={customCss} color="blue"></ScaleLoader>
                                }
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </LayoutAdmin>
        </>
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (session && session.user.role.includes('Admin')) {
        const response = await instance({ req }).get("http://localhost:4000/api/admin/getAllSingleProductPage")
        return {
            props: {
                singleProductPages: response.data
            }
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: "/account"
        }
    }
}