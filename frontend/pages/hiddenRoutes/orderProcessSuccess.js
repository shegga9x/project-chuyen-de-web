import { getSession } from 'next-auth/client';
import instance from "../../helpers/axiosConfig";
export default function orderProcessSuccess() {
    return (
        <>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (session) {
        const response = await instance(context).get("https://localhost:4000/api/order/onCompleteOrderPayment")
        if (response) {
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: "/"
        }
    }
}

