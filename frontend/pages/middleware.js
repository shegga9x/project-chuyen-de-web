import { getSession } from 'next-auth/client';

export default function Middleware() {
    return (
        <>
        </>
    )
}

export async function getServerSideProps({ req }) {
    console.log('????');
    const session = await getSession({ req });
    if (session) {
        if (session.user.role.includes('User')) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/"
                }
            }
        }
        if (session.user.role.includes('Admin')) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/admin/browse-products"
                }
            }
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: "/"
        }
    }
}