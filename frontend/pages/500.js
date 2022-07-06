import Head from "next/head";
export default function Page404() {
    return (
        <>
            <Head>
                <title>
                    Server 500!
                </title>
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
            {/* app */}
            <div id="app">
                {/* 404-Page */}
                <div className="page-404">
                    <div className="vertical-center">
                        <div className="text-center">
                            <h1>Err 500!</h1>
                            <h5>Something go wrong please try again!</h5>
                            <div className="redirect-link-wrapper u-s-p-t-25">
                                <a className="redirect-link" href="/">
                                    <span>Home</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 404-Page /- */}
            </div>
            {/* app /- */}
        </>
    )
}