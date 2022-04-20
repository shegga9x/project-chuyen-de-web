import Head from "next/head";
import Script from "next/script";

export default function Cart() {
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
                <title>
                    Groover - Online Shopping for Electronics, Apparel, Computers, Books,
                    DVDs & more
                </title>

                <link href="favicon.ico" rel="shortcut icon" />

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
                {/* Header */}
                <header>
                    {/* Top-Header */}
                    <div className="full-layer-outer-header">
                        <div className="container clearfix">
                            <nav>
                                <ul className="primary-nav g-nav">
                                    <li>
                                        <a href="tel:+111444989">
                                            <i className="fas fa-phone u-c-brand u-s-m-r-9" />
                                            Telephone:+111-444-989
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:contact@domain.com">
                                            <i className="fas fa-envelope u-c-brand u-s-m-r-9" />
                                            E-mail: contact@domain.com
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <ul className="secondary-nav g-nav">
                                    <li>
                                        <a>
                                            My Account
                                            <i className="fas fa-chevron-down u-s-m-l-9" />
                                        </a>
                                        <ul className="g-dropdown" style={{ width: 200 }}>
                                            <li>
                                                <a href="cart.html">
                                                    <i className="fas fa-cog u-s-m-r-9" />
                                                    My Cart
                                                </a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">
                                                    <i className="far fa-heart u-s-m-r-9" />
                                                    My Wishlist
                                                </a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">
                                                    <i className="far fa-check-circle u-s-m-r-9" />
                                                    Checkout
                                                </a>
                                            </li>
                                            <li>
                                                <a href="account.html">
                                                    <i className="fas fa-sign-in-alt u-s-m-r-9" />
                                                    Login / Signup
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>
                                            USD
                                            <i className="fas fa-chevron-down u-s-m-l-9" />
                                        </a>
                                        <ul className="g-dropdown" style={{ width: 90 }}>
                                            <li>
                                                <a href="#" className="u-c-brand">
                                                    ($) USD
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">(£) GBP</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>
                                            ENG
                                            <i className="fas fa-chevron-down u-s-m-l-9" />
                                        </a>
                                        <ul className="g-dropdown" style={{ width: 70 }}>
                                            <li>
                                                <a href="#" className="u-c-brand">
                                                    ENG
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">ARB</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* Top-Header /- */}
                    {/* Mid-Header */}
                    <div className="full-layer-mid-header">
                        <div className="container">
                            <div className="row clearfix align-items-center">
                                <div className="col-lg-3 col-md-9 col-sm-6">
                                    <div className="brand-logo text-lg-center">
                                        <a href="home.html">
                                            <img
                                                src="images/main-logo/groover-branding-1.png"
                                                alt="Groover Brand Logo"
                                                className="app-brand-logo"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 u-d-none-lg">
                                    <form className="form-searchbox">
                                        <label className="sr-only" htmlFor="search-landscape">
                                            Search
                                        </label>
                                        <input
                                            id="search-landscape"
                                            type="text"
                                            className="text-field"
                                            placeholder="Search everything"
                                        />
                                        <div className="select-box-position">
                                            <div className="select-box-wrapper select-hide">
                                                <label className="sr-only" htmlFor="select-category">
                                                    Choose category for search
                                                </label>
                                                <select
                                                    className="select-box"
                                                    id="select-category"
                                                    defaultValue={"default"}
                                                >
                                                    <option value="default">All</option>
                                                    <option value="">Men's Clothing</option>
                                                    <option value="">Women's Clothing</option>
                                                    <option value="">Toys Hobbies &amp; Robots</option>
                                                    <option value="">Mobiles &amp; Tablets</option>
                                                    <option value="">Consumer Electronics</option>
                                                    <option value="">Books &amp; Audible</option>
                                                    <option value="">Beauty &amp; Health</option>
                                                    <option value="">Furniture Home &amp; Office</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button
                                            id="btn-search"
                                            type="submit"
                                            className="button button-primary fas fa-search"
                                        />
                                    </form>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <nav>
                                        <ul className="mid-nav g-nav">
                                            <li className="u-d-none-lg">
                                                <a href="home.html">
                                                    <i className="ion ion-md-home" />
                                                </a>
                                            </li>
                                            <li className="u-d-none-lg">
                                                <a href="wishlist.html">
                                                    <i className="far fa-heart" />
                                                </a>
                                            </li>
                                            <li>
                                                <a id="mini-cart-trigger">
                                                    <i className="ion ion-md-basket" />
                                                    <span className="item-counter">4</span>
                                                    <span className="item-price">$220.00</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mid-Header /- */}
                    {/* Responsive-Buttons */}
                    <div className="fixed-responsive-container">
                        <div className="fixed-responsive-wrapper">
                            <button
                                type="button"
                                className="button fas fa-search"
                                id="responsive-search"
                            />
                        </div>
                        <div className="fixed-responsive-wrapper">
                            <a href="wishlist.html">
                                <i className="far fa-heart" />
                                <span className="fixed-item-counter">4</span>
                            </a>
                        </div>
                    </div>
                    {/* Responsive-Buttons /- */}
                    {/* Mini Cart */}
                    <div className="mini-cart-wrapper">
                        <div className="mini-cart">
                            <div className="mini-cart-header">
                                YOUR CART
                                <button
                                    type="button"
                                    className="button ion ion-md-close"
                                    id="mini-cart-close"
                                />
                            </div>
                            <ul className="mini-cart-list">
                                <li className="clearfix">
                                    <a href="single-product.html">
                                        <img src="images/product/product@1x.jpg" alt="Product" />
                                        <span className="mini-item-name">
                                            Casual Hoodie Full Cotton
                                        </span>
                                        <span className="mini-item-price">$55.00</span>
                                        <span className="mini-item-quantity"> x 1 </span>
                                    </a>
                                </li>
                                <li className="clearfix">
                                    <a href="single-product.html">
                                        <img src="images/product/product@1x.jpg" alt="Product" />
                                        <span className="mini-item-name">
                                            Black Rock Dress with High Jewelery Necklace
                                        </span>
                                        <span className="mini-item-price">$55.00</span>
                                        <span className="mini-item-quantity"> x 1 </span>
                                    </a>
                                </li>
                                <li className="clearfix">
                                    <a href="single-product.html">
                                        <img src="images/product/product@1x.jpg" alt="Product" />
                                        <span className="mini-item-name">
                                            Xiaomi Note 2 Black Color
                                        </span>
                                        <span className="mini-item-price">$55.00</span>
                                        <span className="mini-item-quantity"> x 1 </span>
                                    </a>
                                </li>
                                <li className="clearfix">
                                    <a href="single-product.html">
                                        <img src="images/product/product@1x.jpg" alt="Product" />
                                        <span className="mini-item-name">Dell Inspiron 15</span>
                                        <span className="mini-item-price">$55.00</span>
                                        <span className="mini-item-quantity"> x 1 </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="mini-shop-total clearfix">
                                <span className="mini-total-heading float-left">Total:</span>
                                <span className="mini-total-price float-right">$220.00</span>
                            </div>
                            <div className="mini-action-anchors">
                                <a href="cart.html" className="cart-anchor">
                                    View Cart
                                </a>
                                <a href="checkout.html" className="checkout-anchor">
                                    Checkout
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Mini Cart /- */}
                    {/* Bottom-Header */}
                    <div className="full-layer-bottom-header">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <div className="v-menu v-close">
                                        <span className="v-title">
                                            <i className="ion ion-md-menu" />
                                            All Categories
                                            <i className="fas fa-angle-down" />
                                        </span>
                                        <nav>
                                            <div className="v-wrapper">
                                                <ul className="v-list animated fadeIn">
                                                    <li className="js-backdrop">
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-md-shirt" />
                                                            Men's Clothing
                                                            <i className="ion ion-ios-arrow-forward" />
                                                        </a>
                                                        <button className="v-button ion ion-md-add" />
                                                        <div
                                                            className="v-drop-right"
                                                            style={{ width: 700 }}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Tops
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        T-Shirts
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Hoodies
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Suits
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v4-filter-as-category.html">
                                                                                        Black Bean T-Shirt
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Outwear
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Jackets
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Trench
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Parkas
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Sweaters
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v1-root-category.html">
                                                                                Accessories
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Watches
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Ties
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Scarves
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Belts
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Bottoms
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Casual Pants
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Jeans
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Shorts
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Underwear
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Boxers
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Briefs
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Robes
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Socks
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Sunglasses
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Pilot
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Wayfarer
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Square
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Round
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="js-backdrop">
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-ios-shirt" />
                                                            Women's Clothing
                                                            <i className="ion ion-ios-arrow-forward" />
                                                        </a>
                                                        <button className="v-button ion ion-md-add" />
                                                        <div
                                                            className="v-drop-right"
                                                            style={{ width: 700 }}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Tops
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Blouses &amp; Shirts
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        T-shirts
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Sweater
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Intimates
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Bras
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Brief Sets
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Bustiers &amp; Corsets
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Panties
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Wedding &amp; Events
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Wedding Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v2-sub-category.html">
                                                                                        Evening Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Prom Dresses
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Flower Dresses
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Bottoms
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Skirts
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Shoes
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Leggings
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Jeans
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Outwear &amp; Jackets
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Blazers
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Basics Jackets
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Trench
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Leather &amp; Suede
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Accessories
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Sunglasses
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Headwear
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Baseball Caps
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Belts
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="js-backdrop">
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-md-rocket" />
                                                            Toys Hobbies &amp; Robots
                                                            <i className="ion ion-ios-arrow-forward" />
                                                        </a>
                                                        <button className="v-button ion ion-md-add" />
                                                        <div
                                                            className="v-drop-right"
                                                            style={{ width: 700 }}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                RC Toys &amp; Hobbies
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        RC Helicopter
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        RC Lego Robots
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        RC Drone
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        RC Car
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        RC Boat
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        RC Robot
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Multi Rotor Parts
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        FPV System
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Radios &amp; Receiver
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Battery &amp; Charger
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">
                                                                                Solar Energy
                                                                            </a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Solar Powered Toy
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="shop-v3-sub-sub-category.html">
                                                                                        Solar Powered System
                                                                                    </a>
                                                                                </li>
                                                                                <li className="view-more-flag">
                                                                                    <a href="store-directory.html">
                                                                                        View More
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* Remember layer image should be place on empty space and its not overlap your list items because user could not read your list items. */}
                                                            <div
                                                                className="v-image"
                                                                style={{ bottom: 0, right: "-25px" }}
                                                            >
                                                                <a href="#" className="d-block">
                                                                    <img
                                                                        src="images/banners/mega-3.png"
                                                                        className="img-fluid"
                                                                        alt="Product"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-md-phone-portrait" />
                                                            Mobiles &amp; Tablets
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-md-tv" />
                                                            Consumer Electronics
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-ios-book" />
                                                            Books &amp; Audible
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-md-heart" />
                                                            Beauty &amp; Health
                                                        </a>
                                                    </li>
                                                    <li className="v-none" style={{ display: "none" }}>
                                                        <a href="shop-v1-root-category.html">
                                                            <i className="ion ion-md-easel" />
                                                            Furniture Home &amp; Office
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="v-more">
                                                            <i className="ion ion-md-add" />
                                                            <span>View More</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <ul className="bottom-nav g-nav u-d-none-lg">
                                        <li>
                                            <a href="custom-deal-page.html">
                                                New Arrivals
                                                <span className="superscript-label-new">NEW</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="custom-deal-page.html">
                                                Exclusive Deals
                                                <span className="superscript-label-hot">HOT</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="custom-deal-page.html">Flash Deals</a>
                                        </li>
                                        <li className="mega-position">
                                            <a>
                                                Pages
                                                <i className="fas fa-chevron-down u-s-m-l-9" />
                                            </a>
                                            <div className="mega-menu mega-3-colm">
                                                <ul>
                                                    <li className="menu-title">
                                                        Home &amp; Static Pages
                                                    </li>
                                                    <li>
                                                        <a href="home.html">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="store-directory.html">Store Directory</a>
                                                    </li>
                                                    <li>
                                                        <a href="terms-and-conditions.html">
                                                            Terms &amp; Conditions
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404</a>
                                                    </li>
                                                    <li className="menu-title">Single Product Page</li>
                                                    <li>
                                                        <a href="single-product.html">
                                                            Single Product Fullwidth
                                                        </a>
                                                    </li>
                                                    <li className="menu-title">Blog</li>
                                                    <li>
                                                        <a href="blog.html">Blog Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-detail.html">Blog Details</a>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="menu-title">Ecommerce Pages</li>
                                                    <li>
                                                        <a href="shop-v2-sub-category.html">Shop</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html" className="u-c-brand">
                                                            Cart
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="account.html">My Account</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="track-order.html">Track your Order</a>
                                                    </li>
                                                    <li className="menu-title">Cart Variations</li>
                                                    <li>
                                                        <a href="cart-empty.html">Cart Ver 1 Empty</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html" className="u-c-brand">
                                                            Cart Ver 2 Full
                                                        </a>
                                                    </li>
                                                    <li className="menu-title">Wishlist Variations</li>
                                                    <li>
                                                        <a href="wishlist-empty.html">
                                                            Wishlist Ver 1 Empty
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist Ver 2 Full</a>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="menu-title">Shop Variations</li>
                                                    <li>
                                                        <a href="shop-v1-root-category.html">
                                                            Shop Ver 1 Root Category
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v2-sub-category.html">
                                                            Shop Ver 2 Sub Category
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v3-sub-sub-category.html">
                                                            Shop Ver 3 Sub Sub Category
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v4-filter-as-category.html">
                                                            Shop Ver 4 Filter as Category
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v5-product-not-found.html">
                                                            Shop Ver 5 Product Not Found
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-v6-search-results.html">
                                                            Shop Ver 6 Search Results
                                                        </a>
                                                    </li>
                                                    <li className="menu-title">My Account Variation</li>
                                                    <li>
                                                        <a href="lost-password.html">
                                                            Lost Your Password ?
                                                        </a>
                                                    </li>
                                                    <li className="menu-title">Checkout Variation</li>
                                                    <li>
                                                        <a href="confirmation.html">
                                                            Checkout Confirmation
                                                        </a>
                                                    </li>
                                                    <li className="menu-title">Custom Deals Page</li>
                                                    <li>
                                                        <a href="custom-deal-page.html">Custom Deal Page</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="custom-deal-page.html">
                                                Super Sale
                                                <span className="superscript-label-discount">-15%</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom-Header /- */}
                </header>
                {/* Header /- */}
                {/* Page Introduction Wrapper */}
                <div className="page-style-a">
                    <div className="container">
                        <div className="page-intro">
                            <h2>Cart</h2>
                            <ul className="bread-crumb">
                                <li className="has-separator">
                                    <i className="ion ion-md-home" />
                                    <a href="home.html">Home</a>
                                </li>
                                <li className="is-marked">
                                    <a href="cart.html">Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Introduction Wrapper /- */}
                {/* Cart-Page */}
                <div className="page-cart u-s-p-t-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <form>
                                    {/* Products-List-Wrapper */}
                                    <div className="table-wrapper u-s-m-b-60">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="cart-anchor-image">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/product@1x.jpg"
                                                                    alt="Product"
                                                                />
                                                                <h6>Casual Hoodie Full Cotton</h6>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-price">$55.00</div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-quantity">
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    className="quantity-text-field"
                                                                    defaultValue={1}
                                                                />
                                                                <a className="plus-a" data-max={1000}>
                                                                    +
                                                                </a>
                                                                <a className="minus-a" data-min={1}>
                                                                    -
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="action-wrapper">
                                                            <button className="button button-outline-secondary fas fa-sync" />
                                                            <button className="button button-outline-secondary fas fa-trash" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="cart-anchor-image">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/product@1x.jpg"
                                                                    alt="Product"
                                                                />
                                                                <h6>
                                                                    Black Rock Dress with High Jewelery Necklace
                                                                </h6>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-price">$55.00</div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-quantity">
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    className="quantity-text-field"
                                                                    defaultValue={1}
                                                                />
                                                                <a className="plus-a" data-max={1000}>
                                                                    +
                                                                </a>
                                                                <a className="minus-a" data-min={1}>
                                                                    -
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="action-wrapper">
                                                            <button className="button button-outline-secondary fas fa-sync" />
                                                            <button className="button button-outline-secondary fas fa-trash" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="cart-anchor-image">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/product@1x.jpg"
                                                                    alt="Product"
                                                                />
                                                                <h6>Xiaomi Note 2 Black Color</h6>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-price">$55.00</div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-quantity">
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    className="quantity-text-field"
                                                                    defaultValue={1}
                                                                />
                                                                <a className="plus-a" data-max={1000}>
                                                                    +
                                                                </a>
                                                                <a className="minus-a" data-min={1}>
                                                                    -
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="action-wrapper">
                                                            <button className="button button-outline-secondary fas fa-sync" />
                                                            <button className="button button-outline-secondary fas fa-trash" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="cart-anchor-image">
                                                            <a href="single-product.html">
                                                                <img
                                                                    src="images/product/product@1x.jpg"
                                                                    alt="Product"
                                                                />
                                                                <h6>Dell Inspiron 15</h6>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-price">$55.00</div>
                                                    </td>
                                                    <td>
                                                        <div className="cart-quantity">
                                                            <div className="quantity">
                                                                <input
                                                                    type="text"
                                                                    className="quantity-text-field"
                                                                    defaultValue={1}
                                                                />
                                                                <a className="plus-a" data-max={1000}>
                                                                    +
                                                                </a>
                                                                <a className="minus-a" data-min={1}>
                                                                    -
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="action-wrapper">
                                                            <button className="button button-outline-secondary fas fa-sync" />
                                                            <button className="button button-outline-secondary fas fa-trash" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Products-List-Wrapper /- */}
                                    {/* Coupon */}
                                    <div className="coupon-continue-checkout u-s-m-b-60">
                                        <div className="coupon-area">
                                            <h6>Enter your coupon code if you have one.</h6>
                                            <div className="coupon-field">
                                                <label className="sr-only" htmlFor="coupon-code">
                                                    Apply Coupon
                                                </label>
                                                <input
                                                    id="coupon-code"
                                                    type="text"
                                                    className="text-field"
                                                    placeholder="Coupon Code"
                                                />
                                                <button type="submit" className="button">
                                                    Apply Coupon
                                                </button>
                                            </div>
                                        </div>
                                        <div className="button-area">
                                            <a href="shop-v1-root-category.html" className="continue">
                                                Continue Shopping
                                            </a>
                                            <a href="checkout.html" className="checkout">
                                                Proceed to Checkout
                                            </a>
                                        </div>
                                    </div>
                                    {/* Coupon /- */}
                                </form>
                                {/* Billing */}
                                <div className="calculation u-s-m-b-60">
                                    <div className="table-wrapper-2">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th colSpan={2}>Cart Totals</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h3 className="calc-h3 u-s-m-b-0">Subtotal</h3>
                                                    </td>
                                                    <td>
                                                        <span className="calc-text">$222.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="calc-h3 u-s-m-b-8">Shipping</h3>
                                                        <div className="calc-choice-text u-s-m-b-4">
                                                            Flat Rate: Not Available
                                                        </div>
                                                        <div className="calc-choice-text u-s-m-b-4">
                                                            Free Shipping: Not Available
                                                        </div>
                                                        <a
                                                            data-toggle="collapse"
                                                            href="#shipping-calculation"
                                                            className="calc-anchor u-s-m-b-4"
                                                        >
                                                            Calculate Shipping
                                                        </a>
                                                        <div className="collapse" id="shipping-calculation">
                                                            <form>
                                                                <div className="select-country-wrapper u-s-m-b-8">
                                                                    <div className="select-box-wrapper">
                                                                        <label
                                                                            className="sr-only"
                                                                            htmlFor="select-country"
                                                                        >
                                                                            Choose your country
                                                                        </label>
                                                                        <select
                                                                            className="select-box"
                                                                            id="select-country"
                                                                            defaultValue={'default'}
                                                                        >
                                                                            <option value="default">
                                                                                Choose your country...
                                                                            </option>
                                                                            <option value="">
                                                                                United Kingdom (UK)
                                                                            </option>
                                                                            <option value="">
                                                                                United States (US)
                                                                            </option>
                                                                            <option value="">
                                                                                United Arab Emirates (UAE)
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="select-state-wrapper u-s-m-b-8">
                                                                    <div className="select-box-wrapper">
                                                                        <label
                                                                            className="sr-only"
                                                                            htmlFor="select-state"
                                                                        >
                                                                            Choose your state
                                                                        </label>
                                                                        <select
                                                                            className="select-box"
                                                                            id="select-state"
                                                                            defaultValue={'default'}
                                                                        >
                                                                            <option value="default">
                                                                                Choose your state...
                                                                            </option>
                                                                            <option value="">Alabama</option>
                                                                            <option value="">Alaska</option>
                                                                            <option value="">Arizona</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="town-city-div u-s-m-b-8">
                                                                    <label
                                                                        className="sr-only"
                                                                        htmlFor="town-city"
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        id="town-city"
                                                                        className="text-field"
                                                                        placeholder="Town / City"
                                                                    />
                                                                </div>
                                                                <div className="postal-code-div u-s-m-b-8">
                                                                    <label
                                                                        className="sr-only"
                                                                        htmlFor="postal-code"
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        id="postal-code"
                                                                        className="text-field"
                                                                        placeholder="Postcode / Zip"
                                                                    />
                                                                </div>
                                                                <div className="update-totals-div u-s-m-b-8">
                                                                    <button className="button button-outline-platinum">
                                                                        Update Totals
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="calc-h3 u-s-m-b-0" id="tax-heading">
                                                            Tax
                                                        </h3>
                                                        <span> (estimated for your country)</span>
                                                    </td>
                                                    <td>
                                                        <span className="calc-text">$0.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="calc-h3 u-s-m-b-0">Total</h3>
                                                    </td>
                                                    <td>
                                                        <span className="calc-text">$220.00</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* Billing /- */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cart-Page /- */}
                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        {/* Outer-Footer */}
                        <div className="outer-footer-wrapper u-s-p-y-80">
                            <h6>For special offers and other discount information</h6>
                            <h1>Subscribe to our Newsletter</h1>
                            <p>
                                Subscribe to the mailing list to receive updates on promotions,
                                new arrivals, discount and coupons.
                            </p>
                            <form className="newsletter-form">
                                <label className="sr-only" htmlFor="newsletter-field">
                                    Enter your Email
                                </label>
                                <input
                                    type="text"
                                    id="newsletter-field"
                                    placeholder="Your Email Address"
                                />
                                <button type="submit" className="button">
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                        {/* Outer-Footer /- */}
                        {/* Mid-Footer */}
                        <div className="mid-footer-wrapper u-s-p-b-80">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="footer-list">
                                        <h6>CUSTOMER SERVICE</h6>
                                        <ul>
                                            <li>
                                                <a href="faq.html">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="track-order.html">Track Order</a>
                                            </li>
                                            <li>
                                                <a href="terms-and-conditions.html">
                                                    Terms &amp; Conditions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="footer-list">
                                        <h6>COMPANY</h6>
                                        <ul>
                                            <li>
                                                <a href="home.html">Home</a>
                                            </li>
                                            <li>
                                                <a href="about.html">About</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="footer-list">
                                        <h6>INFORMATION</h6>
                                        <ul>
                                            <li>
                                                <a href="store-directory.html">Categories Directory</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">My Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">My Cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="footer-list">
                                        <h6>Address</h6>
                                        <ul>
                                            <li>
                                                <i className="fas fa-location-arrow u-s-m-r-9" />
                                                <span>819 Sugar Camp Road, West Concord, MN 55985</span>
                                            </li>
                                            <li>
                                                <a href="tel:+923086561801">
                                                    <i className="fas fa-phone u-s-m-r-9" />
                                                    <span>+111-444-989</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:contact@domain.com">
                                                    <i className="fas fa-envelope u-s-m-r-9" />
                                                    <span>contact@domain.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mid-Footer /- */}
                        {/* Bottom-Footer */}
                        <div className="bottom-footer-wrapper">
                            <div className="social-media-wrapper">
                                <ul className="social-media-list">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-rss" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p className="copyright-text">
                                Copyright © 2018
                                <a href="home.html">Groover</a> All Right Reserved
                            </p>
                        </div>
                    </div>
                    {/* Bottom-Footer /- */}
                </footer>
                {/* Footer /- */}
                {/* Dummy Selectbox */}
                <div className="select-dummy-wrapper">
                    <select id="compute-select">
                        <option id="compute-option">All</option>
                    </select>
                </div>
                {/* Dummy Selectbox /- */}
                {/* Responsive-Search */}
                <div className="responsive-search-wrapper">
                    <button
                        type="button"
                        className="button ion ion-md-close"
                        id="responsive-search-close-button"
                    />
                    <div className="responsive-search-container">
                        <div className="container">
                            <p>Start typing and press Enter to search</p>
                            <form className="responsive-search-form">
                                <label className="sr-only" htmlFor="search-text">
                                    Search
                                </label>
                                <input
                                    id="search-text"
                                    type="text"
                                    className="responsive-search-field"
                                    placeholder="PLEASE SEARCH"
                                />
                                <i className="fas fa-search" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* Responsive-Search /- */}
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
            ></Script>
            <Script type="text/javascript" src="/static/js/app.js"></Script>
        </>
    );
}
