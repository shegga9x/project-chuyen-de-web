import Head from "next/head";
import Layout from "../../components/layout";
import axios from "axios";
import { useRouter } from 'next/router'
import { changeRoute } from "../../helpers/customFunction/changeRoute";

export default function ResetPassword({ err, token }) {

    const router = useRouter();

    const checkSubmit = async () => {
        const newPassword = document.getElementById('new-password').value;
        const confirmNewPassword = document.getElementById('confirm-new-password').value;
        const tk = token;

        if (newPassword != confirmNewPassword) {
            alert('password với confirmPassword không trùng nhau');
        } else {
            const res = await axios.post('https://sqlshop123.herokuapp.com/api/accounts/reset-password', { token: tk, password: newPassword, confirmPassword: confirmNewPassword })
            if (res) {
                alert('Đã hoàn thành, vui lòng quay trở lại trang đăng nhập');
                changeRoute('/account', router);
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
                                <h2>Reset Password</h2>
                                <ul className="bread-crumb">
                                    <li className="has-separator">
                                        <i className="ion ion-md-home" />
                                        <a href="home.html">Home</a>
                                    </li>
                                    <li className="is-marked">
                                        <a href="lost-password.html">Reset Password</a>
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
                                <h2 className="account-h2 u-s-m-b-20">Reset Password</h2>
                                {
                                    err != "" ? (
                                        <h6 style={{ color: "red" }} className="account-h6 u-s-m-b-30">Link bị sai token hoặc token đã hết hạn</h6>
                                    ) : (
                                        <div className="w-50">
                                            <div className="u-s-m-b-13">
                                                <label htmlFor="user-name-email">New Password
                                                    <span className="astk">*</span>
                                                </label>
                                                <input type="text" id="new-password" className="text-field" placeholder="New Password" />
                                            </div>
                                            <div className="u-s-m-b-13">
                                                <label htmlFor="user-name-email">Confirm New Password
                                                    <span className="astk">*</span>
                                                </label>
                                                <input type="text" id="confirm-new-password" className="text-field" placeholder="Confirm New Password" />
                                            </div>
                                            <div className="u-s-m-b-13">
                                                <button onClick={() => { checkSubmit() }} className="button button-outline-secondary">Submit</button>
                                            </div>
                                        </div>
                                    )
                                }

                                <div className="page-anchor">
                                    <a>
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

export async function getServerSideProps({ query }) {
    let err1 = "";
    const res = await axios.post('https://sqlshop123.herokuapp.com/api/accounts/validate-reset-token', { token: query.token })
        .catch(err => {
            err1 = err.response.data.message;
            return {};
        })
    if (res) {
        return { props: { err: err1, token: query.token } }
    }
}