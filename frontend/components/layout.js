
import { Footer, Header, DummySelectBox, ResponsiveSearch, NewsletterModule, QuickViewModal } from './commons'
import Head from "next/head";
import Script from "next/script";
export default function Layout({ children, home, shop }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Raleway:400,800"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/static/css/animate.min.css" />
                <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
                <link
                    rel="stylesheet"
                    href="/static/css/jquery-ui-range-slider.min.css"
                />
                <link rel="stylesheet" href="/static/css/utility.css" />
                <link rel="stylesheet" href="/static/css/bundle.css" />
            </Head>
            <div id="app">
                <Header />
                {children}
                <Footer />
                <DummySelectBox />
                <ResponsiveSearch />

                {/* trang chủ thì mới có 2 thằng này */}
                {
                    home && (<NewsletterModule />)
                }
                {
                    (home || shop) && (<QuickViewModal />)
                }
                <div className="body-backdrop"></div>
            </div>
            <Script
                type="text/javascript"
                src="/static/js/vendor/modernizr-custom.min.js"
            ></Script>
            <Script type="text/javascript" src="/static/js/nprogress.min.js"></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script type="text/javascript" src="/static/js/bootstrap.min.js"></Script>
            <Script type="text/javascript" src="/static/js/popper.min.js"></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery.scrollUp.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery.elevatezoom.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery-ui.range-slider.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery.slimscroll.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery.resize-select.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery.custom-megamenu.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/static/js/jquery.custom-countdown.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                type="text/javascript"
                src="/static/js/owl.carousel.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script type="text/javascript" src="/static/js/app.js"></Script>
        </>
    )
}