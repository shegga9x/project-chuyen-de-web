import axios from 'axios'

export default function VerifyEmail() {
    return (
        <>
            Invalid Token
        </>
    )
}

export async function getServerSideProps({ req, res, query }) {
    if (query.token != undefined) {
        const mes = await axios.post('https://sqlshop123.herokuapp.com/api/accounts/verify-email', {
            token: query.token
        }).catch(errors => {
            return { props: {} }
        })
        if (mes) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/account"
                }
            }
        }
    }
    return { props: {} }
}