
import { Footer, Topbar, Sidebar } from './admin/commons'
import Head from "next/head";
import Script from "next/script";
import { Helmet } from 'react-helmet';

export default function LayoutAdmin({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" />
                <meta name="author" />
                {/* Custom fonts for this template*/}
                <link href="/admin/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                {/* Custom styles for this template*/}
                <link href="/admin/css/sb-admin-2.min.css" rel="stylesheet" />
            </Head>
            <Helmet>
                <body id="page-top" />
            </Helmet>

            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id="content">
                        <Topbar></Topbar>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up" />
            </a>
            <Script
                type="text/javascript"
                src="/admin/vendor/jquery/jquery.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/admin/vendor/bootstrap/js/bootstrap.bundle.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/admin/vendor/jquery-easing/jquery.easing.min.js"
            ></Script>
            <Script
                type="text/javascript"
                src="/admin/js/sb-admin-2.min.js"
            ></Script>
        </>
    )
}