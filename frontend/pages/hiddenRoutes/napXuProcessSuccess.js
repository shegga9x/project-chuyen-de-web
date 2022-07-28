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
    console.log(context)
    console.log(context.locale)
    const session = await getSession(context);
    if (session) {
        const money = context.query.vnp_Amount / 100000;
        const res = await instance(context).get('http://localhost:4000/api/walletCustomer/addMoneyToCustomerWallet', { params: { money: money } });
        if (res) {
           console.log('quá đã');
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: `/${context.locale}/account/profile?keyword=shopXu`
        }
    }
}