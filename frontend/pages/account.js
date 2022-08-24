import Head from "next/head";
import { useState, useRef, useEffect } from 'react';
import { signIn } from 'next-auth/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
    faHome
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import useTrans from "../helpers/customHook/useTrans";
import { useRouter } from 'next/router';
import { changeRoute } from "../helpers/customFunction/changeRoute";
import { getSession } from 'next-auth/client';

export default function Account(props) {

    const trans = useTrans();

    const router = useRouter();

    const elementRef = useRef(null);

    useEffect(() => {
        if (props?.error) {
            if (elementRef.current) {
                elementRef.current.style.display = 'block';
            }
        }
    }, [])

    //login useState
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const loginWithGoogle = () => {
        signIn('google', { callbackUrl: '/middleware' });
    }

    const loginWithGithub = () => {
        signIn('github', { callbackUrl: '/middleware' });
    }

    const loginWithFacebook = () => {
        signIn('facebook', { callbackUrl: '/middleware' });
    }

    const submit = (e) => {
        e.preventDefault();
        signIn('credentials', { email: email, password: password, callbackUrl: '/middleware' });
    }


    //register useState
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async ({ email, password }) => {
        const message = await axios.post('https://sqlshop123.herokuapp.com/api/accounts/register', {
            email: email,
            password: password,
            confirmPassword: password
        }, { withCredentials: true }).
            catch(errors => {
                console.log({ errors })
            })
        if (message !== undefined) {
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
                            <h2>{trans.header.account}</h2>
                            <ul className="bread-crumb">
                                <li className="has-separator">
                                    <i>
                                        <FontAwesomeIcon icon={faHome} />
                                    </i>
                                    <a href="home.html">{trans.header.home}</a>
                                </li>
                                <li className="is-marked">
                                    <a href="account.html">{trans.header.account}</a>
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
                                    <h2 className="account-h2 u-s-m-b-20">{trans.account.login}</h2>
                                    <h6 className="account-h6 u-s-m-b-30">
                                        {/* Welcome back! Sign in to your account. */}
                                        {trans.account.titleLogin}
                                    </h6>
                                    <form onSubmit={submit}>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="user-name-email">
                                                {trans.account.username} / Email
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
                                                {trans.account.password}
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
                                                    {trans.account.remember}
                                                </label>
                                            </div>
                                            <div className="group-2 text-right">
                                                <div className="page-anchor">
                                                    <a onClick={() => { changeRoute('/account/reset', router) }}>
                                                        <i className="fas fa-circle-o-notch u-s-m-r-9" />
                                                        {trans.account.lostPassword}
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
                                                {trans.account.login}
                                            </button>
                                        </div>
                                        <div className="errorMessage" style={{ display: "none", marginTop: '10px' }} ref={elementRef}>
                                            <p style={{ color: "red" }}>{trans.account.err}</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Login /- */}
                            {/* Register */}
                            <div className="col-lg-6">
                                <div className="reg-wrapper">
                                    <h2 className="account-h2 u-s-m-b-20">{trans.account.register}</h2>
                                    <h6 className="account-h6 u-s-m-b-30">
                                        {trans.account.titleRegister}
                                    </h6>
                                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="user-name">
                                                {trans.account.email}
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="user-name"
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
                                            <label htmlFor="email">
                                                {trans.account.password}
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                className="text-field"
                                                placeholder="Password"
                                                {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password min length is 6' } })}
                                            />
                                            {errors?.password && <p style={{ color: "red" }}>{errors?.password.message}</p>}

                                        </div>
                                        <div className="u-s-m-b-30">
                                            <label htmlFor="password">
                                                {trans.account.confirmPassword}
                                                <span className="astk">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="password"
                                                className="text-field"
                                                placeholder="Confirm password"
                                                {...register("confirmPassword", {
                                                    required: 'confirm password is required', validate: (val) => {
                                                        if (watch('password') != val) {
                                                            return "Your passwords do no match";
                                                        }
                                                    },
                                                })}
                                            />
                                            {errors?.confirmPassword && <p style={{ color: "red" }}>{errors?.confirmPassword.message}</p>}
                                        </div>
                                        <div className="u-s-m-b-30">
                                            <input type="checkbox" className="check-box" id="accept" />
                                            <label className="label-text no-color" htmlFor="accept">
                                                {trans.account.accept}
                                                <a href="terms-and-conditions.html" className="u-c-brand">
                                                    {trans.account.terms}
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

export async function getServerSideProps({ req, query }) {
    const session = await getSession({ req });
    if (!session) {
        if (query.error != undefined) {
            if (query.error === 'Callback' || query.error === 'system error') {
                return {
                    redirect: {
                        permanent: false,
                        destination: "/500"
                    }
                }
            } else {
                return { props: { error: query.error } }
            }
        }
        return { props: {} }
    }
    return {
        redirect: {
            permanent: false,
            destination: "/"
        }
    }
}