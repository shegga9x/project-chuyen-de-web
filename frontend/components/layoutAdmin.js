
import { FooterAdmin, HeaderAdmin } from './admin'
import Head from "next/head";
import Script from "next/script";
export default function LayoutAdmin({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title>SB Admin 2 - Dashboard</title>
                {/* Custom fonts for this template*/}
                <link href="/admin/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                {/* Custom styles for this template*/}
                <link href="/admin/css/sb-admin-2.min.css" rel="stylesheet" />
                <link href="/admin/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" />

            </Head>

            <div id="app">
                <HeaderAdmin />
                {children}
                <FooterAdmin />
            </div>

            <Script
                type="text/javascript"
                src="vendor/jquery/jquery.min.js"
            // key={'modernizr - custom.min.js'}
            ></Script>
            <Script
                type="text/javascript"
                src="vendor/bootstrap/js/bootstrap.bundle.min.js"
            // key={'modernizr - custom.min.js'}
            ></Script>
            <Script
                type="text/javascript"
                src="vendor/jquery-easing/jquery.easing.min.js"
            // key={'modernizr - custom.min.js'}
            ></Script>
            <Script
                type="text/javascript"
                src="js/sb-admin-2.min.js"
            // key={'modernizr - custom.min.js'}
            ></Script>
            <Script
                type="text/javascript"
                src="vendor/chart.js/Chart.min.js"
            // key={'modernizr - custom.min.js'}
            ></Script>
            <Script
                type="text/javascript"
                src="js/demo/chart-area-demo.js"
            // key={'modernizr - custom.min.js'}
            ></Script>
            <Script
                type="text/javascript"
                src="js/demo/chart-pie-demo.js"
            // key={'modernizr - custom.min.js'}
            ></Script>
        </>
    )
}