import { getSession } from 'next-auth/client';
import instance from "../../helpers/axiosConfig";
import { useEffect } from 'react';
export default function NapXuProcessSuccess() {
    return (
        <>
        </>
    )
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (session) {
        const money = context.query.vnp_Amount / 100000;
        const res = await instance(context).get('https://sqlshop123.herokuapp.com/api/walletCustomer/addMoneyToCustomerWallet', { params: { money: money } });
        if (res) {
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: `/${context.locale}/account/profile?keyword=shopXu`
        }
    }
}