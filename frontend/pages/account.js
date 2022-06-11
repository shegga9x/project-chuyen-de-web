import Head from "next/head";
import { useState, useRef } from 'react';
import { signIn } from 'next-auth/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../helpers/customHook/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
    faHome
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router'

export default function Account() {

    const router = useRouter()
    // use router
    console.log(router.query);

    const elementRef = useRef(null);

    if (router.query?.error === 'Callback' || router.query?.error === 'system error') {
        window.location.href = '/404';
    }

    if (router.query?.error === 'No value present') {
        if (elementRef.current) {
            elementRef.current.style.display = 'block';
        }
    }

    const [isAuthenticated] = useAuth(true);

    //login useState
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const loginWithGoogle = () => {
        signIn('google');
    }

    const loginWithGithub = () => {
        signIn('github');
    }

    const loginWithFacebook = () => {
        signIn('facebook');
    }

    const submit = (e) => {
        e.preventDefault();
        signIn('credentials', { email: email, password: password });
        // signIn('google');
    }


    //register useState
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async ({ userName, email, password }) => {
        const message = await axios.post('http://localhost:4000/api/accounts/register', {
            title: 'Mrs',
            firstName: userName,
            lastName: 'Phung pink',
            email: email,
            password: password,
            confirmPassword: password
        }, { withCredentials: true }).
            catch(errors => {
                console.log(errors.response)
                alert(errors.response.data.message)
            })
        if (message !== undefined) {
            // console.log(message);
            alert(message.data.message)
        }
    };

    const onError = () => {
        console.log(errors);
    }

    return (
        <>
            <style jsx>{`
             .iconn{
                 padding-left:4px;
                 padding-right:4px;
             }
      `}</style>
            <Head>
                <title>
                    Groover - Online Shopping for Electronics, Apparel, Computers, Books,
                    DVDs & more
                </title>
            </Head>
            <Layout>
                {/* Page Introduction Wrapper */}
                <div className="page-style-a">
                    <div className="container">
                        <div className="page-intro">
                            <h2>Account</h2>
                            <ul className="bread-crumb">
                                <li className="has-separator">
                                    <i>
                                        <FontAwesomeIcon icon={faHome} />
                                    </i>
                                    <a href="home.html">Home</a>
                                </li>
                                <li className="is-marked">
                                    <a href="account.html">Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Introduction Wrapper /- */}
                {/* Account-Page */}
                <div className="page-account u-s-p-t-80">
                    <div className="container">
                        <div className="row">
                            {/* Login */}
                            <div className="col-lg-6">
                                <div className="login-wrapper">
                                    <h2 className="account-h2 u-s-m-b-20">Login</h2>
                                    <h6 className="account-h6 u-s-m-b-30">
                                        Welcome back! Sign in to your account.
                                    </h6>
                                    <form onSubmit={submit}>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="user-name-email">
                                                Username or Email
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="user-name-email"
                                                className="text-field"
                                                placeholder="Username / Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="login-password">
                                                Password
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="login-password"
                                                className="text-field"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="group-inline u-s-m-b-30">
                                            <div className="group-1">
                                                <input
                                                    type="checkbox"
                                                    className="check-box"
                                                    id="remember-me-token"
                                                />
                                                {/* <FontAwesomeIcon icon={facheckbox} /> */}
                                                <label className="label-text" htmlFor="remember-me-token">
                                                    Remember me
                                                </label>
                                            </div>
                                            <div className="group-2 text-right">
                                                <div className="page-anchor">
                                                    <a href="lost-password.html">
                                                        <i className="fas fa-circle-o-notch u-s-m-r-9" />
                                                        Lost your password?
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: "center", marginBottom: "5px" }}>
                                            <i className="iconn" style={{ cursor: "pointer", color: "red", fontSize: "20px" }} onClick={loginWithGoogle}>
                                                <FontAwesomeIcon icon={faGoogle} />
                                            </i>
                                            <i className="iconn" style={{ cursor: "pointer", color: "black", fontSize: "20px" }} onClick={loginWithGithub}>
                                                <FontAwesomeIcon icon={faGithub} />
                                            </i>
                                            <i className="iconn" style={{ cursor: "pointer", color: "blue", fontSize: "20px" }} onClick={loginWithFacebook}>
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </i>
                                        </div>
                                        <div className="m-b-45">
                                            <button className="button button-outline-secondary w-100">
                                                Login
                                            </button>
                                        </div>
                                        <div className="errorMessage" style={{ display: "none",marginTop:'10px' }} ref={elementRef}>
                                            <p style={{ color: "red" }}>Sai thông tin đăng nhập (email hoặc mật khẩu)</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Login /- */}
                            {/* Register */}
                            <div className="col-lg-6">
                                <div className="reg-wrapper">
                                    <h2 className="account-h2 u-s-m-b-20">Register</h2>
                                    <h6 className="account-h6 u-s-m-b-30">
                                        Registering for this site allows you to access your order status
                                        and history.
                                    </h6>
                                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="user-name">
                                                Username
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="user-name"
                                                className="text-field"
                                                placeholder="Username"
                                                {...register("userName", { required: 'userName is required', minLength: { value: 6, message: 'user name min length is 6' } })}
                                            />
                                            {errors?.userName && <p style={{ color: "red" }}>{errors?.userName.message}</p>}
                                        </div>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="email">
                                                Email
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                className="text-field"
                                                placeholder="Email"
                                                {...register("email", {
                                                    required: 'Email is required', pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: 'Please enter a valid email'
                                                    }
                                                })}
                                            />
                                            {errors?.email && <p style={{ color: "red" }}>{errors?.email.message}</p>}

                                        </div>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="password">
                                                Password
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                id="password"
                                                className="text-field"
                                                placeholder="Password"
                                                {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password min length is 6' } })}
                                            />
                                            {errors?.password && <p style={{ color: "red" }}>{errors?.password.message}</p>}
                                        </div>
                                        <div className="u-s-m-b-30">
                                            <input type="checkbox" className="check-box" id="accept" />
                                            <label className="label-text no-color" htmlFor="accept">
                                                I’ve read and accept the
                                                <a href="terms-and-conditions.html" className="u-c-brand">
                                                    terms &amp; conditions
                                                </a>
                                            </label>
                                        </div>
                                        <div className="u-s-m-b-45">
                                            <button className="button button-primary w-100">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Register /- */}
                        </div>
                    </div>
                </div>
                {/* Account-Page /- */}
            </Layout>
        </>
    )
}