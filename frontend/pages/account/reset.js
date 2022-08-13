import Head from "next/head";
import Layout from "../../components/layout";
import axios from "axios";
export default function reset() {

    const checkSubmit = async () => {
        const email = document.getElementById('user-name-email');
        const validateEmail = String(email.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (validateEmail == null) {
            alert('Email không hợp lệ');
        } else {
            const res = await axios.post('https://localhost:4000/api/accounts/forgot-password', { email: email.value })
                .catch(err => {
                    alert(err.response.data.message);
                })
            if (res) {
                alert('Đã gửi email, vui lòng kiểm tra');
            }
        }

    }

    return (
        <>
            <Head>
                <title>
                    Groover - Reset
                </title>
            </Head>
            <Layout>
                <div>
                    {/* Page Introduction Wrapper */}
                    <div className="page-style-a">
                        <div className="container">
                            <div className="page-intro">
                                <h2>Lost Password</h2>
                                <ul className="bread-crumb">
                                    <li className="has-separator">
                                        <i className="ion ion-md-home" />
                                        <a href="home.html">Home</a>
                                    </li>
                                    <li className="is-marked">
                                        <a href="lost-password.html">Lost Password</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Page Introduction Wrapper /- */}
                    {/* Lost-password-Page */}
                    <div className="page-lost-password u-s-p-t-80">
                        <div className="container">
                            <div className="page-lostpassword">
                                <h2 className="account-h2 u-s-m-b-20">Forgot Password ?</h2>
                                <h6 className="account-h6 u-s-m-b-30">Enter your email or username below and we will send you a link to reset your password.</h6>
                                <div className="w-50">
                                    <div className="u-s-m-b-13">
                                        <label htmlFor="user-name-email">Username or Email
                                            <span className="astk">*</span>
                                        </label>
                                        <input type="text" id="user-name-email" className="text-field" placeholder="Username / Email" />
                                    </div>
                                    <div className="u-s-m-b-13">
                                        <button onClick={() => { checkSubmit() }} className="button button-outline-secondary">Get Reset Link</button>
                                    </div>
                                </div>
                                <div className="page-anchor">
                                    <a href="account.html">
                                        <i className="fas fa-long-arrow-alt-left u-s-m-r-9" />Back to Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Lost-Password-Page /- */}
                </div>
            </Layout>
        </>
    )
}