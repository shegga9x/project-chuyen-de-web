import axios from "axios";

// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    // baseURL: 'http://localhost:4000'
});

// Add a request interceptor
instance.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
    const isLoggedIn = user && user.jwtToken;
    const isApiUrl = request.url.startsWith('http://localhost:4000');

    if (isLoggedIn && isApiUrl) {
        request.headers.common.Authorization = `Bearer ${account.token}`;
    }
    return request;
}, error => {
    alert(error)
});

// Add a response interceptor
instance.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let message = error.response === undefined ? error : error.response['data']['message'];
    // if (error.response !== undefined) {
    //     if ([401, 403].includes(error.response.status) && accountService.userValue) {
    //         // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //         accountService.logout();
    //     }
    // }
    return Promise.reject(message);
});

export default instance;
