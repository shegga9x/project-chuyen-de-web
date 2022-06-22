import axios from "axios";
import { getSession } from "next-auth/client";

const InstanceAxios = (req) => {

    console.log(req);
    
    const instance = axios.create()

    instance.interceptors.request.use(async (request) => {
        const session = await getSession()

        if (session) {
            request.headers.common = {
                Authorization: `Email ${session.user.email}`
            }
        }
        return request
    })

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // console.log(`error`, error)
            return Promise.reject(error);
        }
    )

    return instance
}

export default InstanceAxios;
