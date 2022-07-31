import Head from "next/head";
import Script from "next/script";
import { useRouter } from 'next/router'
import { changeRoute } from "../../helpers/customFunction/changeRoute";

export default function Layout({ children }) {

    const router = useRouter()

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="stylesheet" href="dropdown-scroll.css" />
                <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />
                <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />
                <link href="/static/css/saler.css" rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>
                <nav className="mnb navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <i className="ic fa fa-bars" />
                            </button>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">En</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Draude Oba <span className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Settings</a></li>
                                        <li><a href="#">Upgrade</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li role="separator" className="divider" />
                                        <li><a onClick={() => { changeRoute('/logout', router) }}>Logout</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i className="fa fa-bell-o" /></a></li>
                                <li><a href="#"><i className="fa fa-comment-o" /></a></li>
                            </ul>
                            <form className="navbar-form navbar-right">
                                <input type="text" className="form-control" placeholder="Search..." />
                            </form>
                        </div>
                    </div>
                </nav>
                {/*msb: main sidebar*/}
                <div className="msb" id="msb">
                    <nav className="navbar navbar-default" role="navigation">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <div className="brand-wrapper">
                                {/* Brand */}
                                <div className="brand-name-wrapper">
                                    <a className="navbar-brand" href="#">
                                        SAITAMA
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Main Menu */}
                        <div className="side-menu-container">
                            <ul className="nav navbar-nav">
                                {/* <li className="panel panel-default" id="dropdown">
                                    <a data-toggle="collapse" style={{ fontWeight: '600' }} href="#dropdown-lvl1a" >
                                        <i className="fa fa-diamond" /> Quản Lý Đơn Hàng <span className="caret" />
                                    </a>
                                    <div id="dropdown-lvl1a" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul className="nav navbar-nav">
                                                <li><a href="#">Mail</a></li>
                                                <li className="panel panel-default" id="dropdown">
                                                    <a data-toggle="collapse" style={{ fontWeight: '600' }} href="#dropdown-lvl2a">
                                                        <i className="glyphicon glyphicon-off" /> Sub Level <span className="caret" />
                                                    </a>
                                                    <div id="dropdown-lvl2a" className="panel-collapse collapse">
                                                        <div className="panel-body">
                                                            <ul className="nav navbar-nav">
                                                                <li><a href="#">Link</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="panel panel-default" id="dropdown">
                                    <a data-toggle="collapse" style={{ fontWeight: '600' }} href="#dropdown-lvl1b">
                                        <i className="fa fa-diamond" /> Quản Lý Sản Phẩm
                                        <span className="caret" />
                                    </a>
                                    <div id="dropdown-lvl1b" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul className="nav navbar-nav">
                                                <li><a href="#">Mail</a></li>
                                                <li className="panel panel-default" id="dropdown">
                                                    <a data-toggle="collapse" style={{ fontWeight: '600' }} href="#dropdown-lvl2b">
                                                        <i className="glyphicon glyphicon-off" /> Sub Level <span className="caret" />
                                                    </a>
                                                    <div id="dropdown-lvl2b" className="panel-collapse collapse">
                                                        <div className="panel-body">
                                                            <ul className="nav navbar-nav">
                                                                <li><a href="#">Link</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="panel panel-default" id="dropdown">
                                    <a data-toggle="collapse" style={{ fontWeight: '600' }} href="#dropdown-lvl1c">
                                        <i className="fa fa-diamond" /> Quản Lý Shop
                                        <span className="caret" />
                                    </a>
                                    
                                    <div id="dropdown-lvl1c" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul className="nav navbar-nav">
                                                <li><a href="#">Mail</a></li>

                                              
                                                <li className="panel panel-default" id="dropdown">
                                                    <a data-toggle="collapse" style={{ fontWeight: '600' }} href="#dropdown-lvl2c">
                                                        <i className="glyphicon glyphicon-off" /> Sub Level <span className="caret" />
                                                    </a>
                                                    <div id="dropdown-lvl2c" className="panel-collapse collapse">
                                                        <div className="panel-body ">
                                                            <ul className="nav navbar-nav">
                                                                <li><a href="#">Link</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li> */}
                                <li style={{ cursor: "pointer" }}><a onClick={() => { changeRoute('/saler/profile', router) }} style={{ fontWeight: '600' }}><i className="fa fa-cog" />Saler Profile</a></li>
                                <li style={{ cursor: "pointer" }}><a onClick={() => { changeRoute('/saler/product', router) }} style={{ fontWeight: '600' }}><i className="fa fa-cog" />Saler Product</a></li>
                                <li style={{ cursor: "pointer" }}><a onClick={() => { changeRoute('/saler/order', router) }} style={{ fontWeight: '600' }}><i className="fa fa-cog" />Saler Order</a></li>
                                <li style={{ cursor: "pointer" }}><a onClick={() => { changeRoute('/', router) }} style={{ fontWeight: '600' }}><i className="fa fa-home" />Home</a></li>
                            </ul>
                        </div>{/* /.navbar-collapse */}
                    </nav>
                </div>
                {/*main content wrapper*/}
                {children}
            </div>
            <Script
                type="text/javascript" src="/static/js/saler.js" strategy="beforeInteractive">
            </Script>
        </>
    );

}

