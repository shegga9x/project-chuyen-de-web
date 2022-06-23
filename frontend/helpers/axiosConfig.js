import axios from "axios";
import { getSession } from "next-auth/client";

const InstanceAxios = (context) => {
    const instance = axios.create()

    instance.interceptors.request.use(async (request) => {
        const session = context ? await getSession(context) : await getSession()
        if (session) {
            request.headers.common = { Authorization: `Bearer ${session.user.jwt}` }
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
