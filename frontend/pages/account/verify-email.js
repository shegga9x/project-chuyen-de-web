import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function VerifyEmail() {
    const [isInValid, setValid] = useState(false);
    const router = useRouter()
    const token = router.query.token


    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                const message = await verify();

                if (message !== undefined) {
                    window.location.href = "/account"
                }
            }

            fetchData();
        }

    }, [token])

    const verify = async () => {
        const mes = await axios.post('http://localhost:4000/accounts/verify-email', {
            token: token
        }).catch(errors => {
            setValid(true);
            return undefined;
        })

        return mes.data.message;
    }


    return (<>
        {
            isInValid && (<>
                Invalid Token
            </>)
        }
    </>)
}