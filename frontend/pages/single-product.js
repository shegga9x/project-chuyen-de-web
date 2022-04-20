import Head from "next/head";
import Script from "next/script";

export default function SingleProduct() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" key={'meta-charSet'}/>
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
                                                <select className="select-box" id="select-category" defaultValue={'default'}>
                                                    <option value="default">
                                                        All
                                                    </option>
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
                                        <span className="mini-item-name">Casual Hoodie Full Cotton</span>
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
                                        <span className="mini-item-name">Xiaomi Note 2 Black Color</span>
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
                                                        <div className="v-drop-right" style={{ width: 700 }}>
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Tops</a>
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
                                                                            <a href="shop-v2-sub-category.html">Outwear</a>
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
                                                                            <a href="shop-v2-sub-category.html">Bottoms</a>
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
                                                        <div className="v-drop-right" style={{ width: 700 }}>
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <ul className="v-level-2">
                                                                        <li>
                                                                            <a href="shop-v2-sub-category.html">Tops</a>
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
                                                                            <a href="shop-v2-sub-category.html">Bottoms</a>
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
                                                        <div className="v-drop-right" style={{ width: 700 }}>
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
                                                                                    <a href="store-directory.html">View More</a>
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
                                                    <li className="menu-title">Home &amp; Static Pages</li>
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
                                                        <a href="single-product.html" className="u-c-brand">
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
                                                        <a href="cart.html">Cart</a>
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
                                                        <a href="cart.html">Cart Ver 2 Full</a>
                                                    </li>
                                                    <li className="menu-title">Wishlist Variations</li>
                                                    <li>
                                                        <a href="wishlist-empty.html">Wishlist Ver 1 Empty</a>
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
                                                        <a href="lost-password.html">Lost Your Password ?</a>
                                                    </li>
                                                    <li className="menu-title">Checkout Variation</li>
                                                    <li>
                                                        <a href="confirmation.html">Checkout Confirmation</a>
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
                            <h2>Detail</h2>
                            <ul className="bread-crumb">
                                <li className="has-separator">
                                    <i className="ion ion-md-home" />
                                    <a href="home.html">Home</a>
                                </li>
                                <li className="is-marked">
                                    <a href="single-product.html">Detail</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Introduction Wrapper /- */}
                {/* Single-Product-Full-Width-Page */}
                <div className="page-detail u-s-p-t-80">
                    <div className="container">
                        {/* Product-Detail */}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/* Product-zoom-area */}
                                <div className="zoom-area">
                                    <img
                                        id="zoom-pro"
                                        className="img-fluid"
                                        src="images/product/product@4x.jpg"
                                        data-zoom-image="images/product/product@4x.jpg"
                                        alt="Zoom Image"
                                    />
                                    <div id="gallery" className="u-s-m-t-10">
                                        <a
                                            className="active"
                                            data-image="images/product/product@4x.jpg"
                                            data-zoom-image="images/product/product@4x.jpg"
                                        >
                                            <img src="images/product/product@2x.jpg" alt="Product" />
                                        </a>
                                        <a
                                            data-image="images/product/product@4x.jpg"
                                            data-zoom-image="images/product/product@4x.jpg"
                                        >
                                            <img src="images/product/product@2x.jpg" alt="Product" />
                                        </a>
                                        <a
                                            data-image="images/product/product@4x.jpg"
                                            data-zoom-image="images/product/product@4x.jpg"
                                        >
                                            <img src="images/product/product@2x.jpg" alt="Product" />
                                        </a>
                                        <a
                                            data-image="images/product/product@4x.jpg"
                                            data-zoom-image="images/product/product@4x.jpg"
                                        >
                                            <img src="images/product/product@2x.jpg" alt="Product" />
                                        </a>
                                        <a
                                            data-image="images/product/product@4x.jpg"
                                            data-zoom-image="images/product/product@4x.jpg"
                                        >
                                            <img src="images/product/product@2x.jpg" alt="Product" />
                                        </a>
                                        <a
                                            data-image="images/product/product@4x.jpg"
                                            data-zoom-image="images/product/product@4x.jpg"
                                        >
                                            <img src="images/product/product@2x.jpg" alt="Product" />
                                        </a>
                                    </div>
                                </div>
                                {/* Product-zoom-area /- */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {/* Product-details */}
                                <div className="all-information-wrapper">
                                    <div className="section-1-title-breadcrumb-rating">
                                        <div className="product-title">
                                            <h1>
                                                <a href="single-product.html">Casual Hoodie Full Cotton</a>
                                            </h1>
                                        </div>
                                        <ul className="bread-crumb">
                                            <li className="has-separator">
                                                <a href="home.html">Home</a>
                                            </li>
                                            <li className="has-separator">
                                                <a href="shop-v1-root-category.html">Men's Clothing</a>
                                            </li>
                                            <li className="has-separator">
                                                <a href="shop-v2-sub-category.html">Tops</a>
                                            </li>
                                            <li className="is-marked">
                                                <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                            </li>
                                        </ul>
                                        <div className="product-rating">
                                            <div
                                                className="star"
                                                title="4.5 out of 5 - based on 23 Reviews"
                                            >
                                                <span style={{ width: 67 }} />
                                            </div>
                                            <span>(23)</span>
                                        </div>
                                    </div>
                                    <div className="section-2-short-description u-s-p-y-14">
                                        <h6 className="information-heading u-s-m-b-8">Description:</h6>
                                        <p>
                                            This hoodie is full cotton. It includes a muff sewn onto the
                                            lower front, and (usually) a drawstring to adjust the hood
                                            opening. Throughout the U.S., it is common for middle-school,
                                            high-school, and college students to wear this sweatshirts—with
                                            or without hoods—that display their respective school names or
                                            mascots across the chest, either as part of a uniform or
                                            personal preference.
                                        </p>
                                    </div>
                                    <div className="section-3-price-original-discount u-s-p-y-14">
                                        <div className="price">
                                            <h4>$55.00</h4>
                                        </div>
                                        <div className="original-price">
                                            <span>Original Price:</span>
                                            <span>$60.00</span>
                                        </div>
                                        <div className="discount-price">
                                            <span>Discount:</span>
                                            <span>8%</span>
                                        </div>
                                        <div className="total-save">
                                            <span>Save:</span>
                                            <span>$5</span>
                                        </div>
                                    </div>
                                    <div className="section-4-sku-information u-s-p-y-14">
                                        <h6 className="information-heading u-s-m-b-8">
                                            Sku Information:
                                        </h6>
                                        <div className="availability">
                                            <span>Availability:</span>
                                            <span>In Stock</span>
                                        </div>
                                        <div className="left">
                                            <span>Only:</span>
                                            <span>50 left</span>
                                        </div>
                                    </div>
                                    <div className="section-5-product-variants u-s-p-y-14">
                                        <h6 className="information-heading u-s-m-b-8">
                                            Product Variants:
                                        </h6>
                                        <div className="color u-s-m-b-11">
                                            <span>Available Color:</span>
                                            <div className="color-variant select-box-wrapper">
                                                <select className="select-box product-color">
                                                    <option value={1}>Heather Grey</option>
                                                    <option value={3}>Black</option>
                                                    <option value={5}>White</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sizes u-s-m-b-11">
                                            <span>Available Size:</span>
                                            <div className="size-variant select-box-wrapper">
                                                <select className="select-box product-size">
                                                    <option value="">Male 2XL</option>
                                                    <option value="">Male 3XL</option>
                                                    <option value="">Kids 4</option>
                                                    <option value="">Kids 6</option>
                                                    <option value="">Kids 8</option>
                                                    <option value="">Kids 10</option>
                                                    <option value="">Kids 12</option>
                                                    <option value="">Female Small</option>
                                                    <option value="">Male Small</option>
                                                    <option value="">Female Medium</option>
                                                    <option value="">Male Medium</option>
                                                    <option value="">Female Large</option>
                                                    <option value="">Male Large</option>
                                                    <option value="">Female XL</option>
                                                    <option value="">Male XL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                                        <form action="#" className="post-form">
                                            <div className="quick-social-media-wrapper u-s-m-b-22">
                                                <span>Share:</span>
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
                                                </ul>
                                            </div>
                                            <div className="quantity-wrapper u-s-m-b-22">
                                                <span>Quantity:</span>
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
                                            <div>
                                                <button
                                                    className="button button-outline-secondary"
                                                    type="submit"
                                                >
                                                    Add to cart
                                                </button>
                                                <button className="button button-outline-secondary far fa-heart u-s-m-l-6" />
                                                <button className="button button-outline-secondary far fa-envelope u-s-m-l-6" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Product-details /- */}
                            </div>
                        </div>
                        {/* Product-Detail /- */}
                        {/* Detail-Tabs */}
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="detail-tabs-wrapper u-s-p-t-80">
                                    <div className="detail-nav-wrapper u-s-m-b-30">
                                        <ul className="nav single-product-nav justify-content-center">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    data-toggle="tab"
                                                    href="#description"
                                                >
                                                    Description
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    data-toggle="tab"
                                                    href="#specification"
                                                >
                                                    Specifications
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#review">
                                                    Reviews (15)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        {/* Description-Tab */}
                                        <div className="tab-pane fade active show" id="description">
                                            <div className="description-whole-container">
                                                <p className="desc-p u-s-m-b-26">
                                                    This hoodie is full cotton. It includes a muff sewn onto the
                                                    lower front, and (usually) a drawstring to adjust the hood
                                                    opening. Throughout the U.S., it is common for
                                                    middle-school, high-school, and college students to wear
                                                    this sweatshirts—with or without hoods—that display their
                                                    respective school names or mascots across the chest, either
                                                    as part of a uniform or personal preference.
                                                </p>
                                                <img
                                                    className="desc-img img-fluid u-s-m-b-26"
                                                    src="images/product/product@3x.jpg"
                                                    alt="Product"
                                                />
                                                <iframe
                                                    className="desc-iframe u-s-m-b-45"
                                                    width={710}
                                                    height={400}
                                                    src="images/product/iframe-youtube.jpg"
                                                    allowFullScreen=""
                                                />
                                            </div>
                                        </div>
                                        {/* Description-Tab /- */}
                                        {/* Specifications-Tab */}
                                        <div className="tab-pane fade" id="specification">
                                            <div className="specification-whole-container">
                                                <div className="spec-ul u-s-m-b-50">
                                                    <h4 className="spec-heading">Key Features</h4>
                                                    <ul>
                                                        <li>Heather Grey</li>
                                                        <li>Black</li>
                                                        <li>White</li>
                                                    </ul>
                                                </div>
                                                <div className="u-s-m-b-50">
                                                    <h4 className="spec-heading">What's in the Box?</h4>
                                                    <h3 className="spec-answer">1 x hoodie</h3>
                                                </div>
                                                <div className="spec-table u-s-m-b-50">
                                                    <h4 className="spec-heading">General Information</h4>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Sku</td>
                                                                <td>AY536FA08JT86NAFAMZ</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="spec-table u-s-m-b-50">
                                                    <h4 className="spec-heading">Product Information</h4>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Main Material</td>
                                                                <td>Cotton</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Color</td>
                                                                <td>Heather Grey, Black, White</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sleeves</td>
                                                                <td>Long Sleeve</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Top Fit</td>
                                                                <td>Regular</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Print</td>
                                                                <td>Not Printed</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Neck</td>
                                                                <td>Round Neck</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Pieces Count</td>
                                                                <td>1 piece</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Occasion</td>
                                                                <td>Casual</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shipping Weight (kg)</td>
                                                                <td>0.5</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Specifications-Tab /- */}
                                        {/* Reviews-Tab */}
                                        <div className="tab-pane fade" id="review">
                                            <div className="review-whole-container">
                                                <div className="row r-1 u-s-m-b-26 u-s-p-b-22">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="total-score-wrapper">
                                                            <h6 className="review-h6">Average Rating</h6>
                                                            <div className="circle-wrapper">
                                                                <h1>4.5</h1>
                                                            </div>
                                                            <h6 className="review-h6">Based on 23 Reviews</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="total-star-meter">
                                                            <div className="star-wrapper">
                                                                <span>5 Stars</span>
                                                                <div className="star">
                                                                    <span style={{ width: 0 }} />
                                                                </div>
                                                                <span>(0)</span>
                                                            </div>
                                                            <div className="star-wrapper">
                                                                <span>4 Stars</span>
                                                                <div className="star">
                                                                    <span style={{ width: 67 }} />
                                                                </div>
                                                                <span>(23)</span>
                                                            </div>
                                                            <div className="star-wrapper">
                                                                <span>3 Stars</span>
                                                                <div className="star">
                                                                    <span style={{ width: 0 }} />
                                                                </div>
                                                                <span>(0)</span>
                                                            </div>
                                                            <div className="star-wrapper">
                                                                <span>2 Stars</span>
                                                                <div className="star">
                                                                    <span style={{ width: 0 }} />
                                                                </div>
                                                                <span>(0)</span>
                                                            </div>
                                                            <div className="star-wrapper">
                                                                <span>1 Star</span>
                                                                <div className="star">
                                                                    <span style={{ width: 0 }} />
                                                                </div>
                                                                <span>(0)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row r-2 u-s-m-b-26 u-s-p-b-22">
                                                    <div className="col-lg-12">
                                                        <div className="your-rating-wrapper">
                                                            <h6 className="review-h6">Your Review is matter.</h6>
                                                            <h6 className="review-h6">
                                                                Have you used this product before?
                                                            </h6>
                                                            <div className="star-wrapper u-s-m-b-8">
                                                                <div className="star">
                                                                    <span id="your-stars" style={{ width: 0 }} />
                                                                </div>
                                                                <label htmlFor="your-rating-value" />
                                                                <input
                                                                    id="your-rating-value"
                                                                    type="text"
                                                                    className="text-field"
                                                                    placeholder={0.0}
                                                                />
                                                                <span id="star-comment" />
                                                            </div>
                                                            <form>
                                                                <label htmlFor="your-name">
                                                                    Name
                                                                    <span className="astk"> *</span>
                                                                </label>
                                                                <input
                                                                    id="your-name"
                                                                    type="text"
                                                                    className="text-field"
                                                                    placeholder="Your Name"
                                                                />
                                                                <label htmlFor="your-email">
                                                                    Email
                                                                    <span className="astk"> *</span>
                                                                </label>
                                                                <input
                                                                    id="your-email"
                                                                    type="text"
                                                                    className="text-field"
                                                                    placeholder="Your Email"
                                                                />
                                                                <label htmlFor="review-title">
                                                                    Review Title
                                                                    <span className="astk"> *</span>
                                                                </label>
                                                                <input
                                                                    id="review-title"
                                                                    type="text"
                                                                    className="text-field"
                                                                    placeholder="Review Title"
                                                                />
                                                                <label htmlFor="review-text-area">
                                                                    Review
                                                                    <span className="astk"> *</span>
                                                                </label>
                                                                <textarea
                                                                    className="text-area u-s-m-b-8"
                                                                    id="review-text-area"
                                                                    placeholder="Review"
                                                                    defaultValue={""}
                                                                />
                                                                <button className="button button-outline-secondary">
                                                                    Submit Review
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Get-Reviews */}
                                                <div className="get-reviews u-s-p-b-22">
                                                    {/* Review-Options */}
                                                    <div className="review-options u-s-m-b-16">
                                                        <div className="review-option-heading">
                                                            <h6>
                                                                Reviews
                                                                <span> (15) </span>
                                                            </h6>
                                                        </div>
                                                        <div className="review-option-box">
                                                            <div className="select-box-wrapper">
                                                                <label className="sr-only" htmlFor="review-sort">
                                                                    Review Sorter
                                                                </label>
                                                                <select className="select-box" id="review-sort">
                                                                    <option value="">Sort by: Best Rating</option>
                                                                    <option value="">Sort by: Worst Rating</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Review-Options /- */}
                                                    {/* All-Reviews */}
                                                    <div className="reviewers">
                                                        <div className="review-data">
                                                            <div className="reviewer-name-and-date">
                                                                <h6 className="reviewer-name">John</h6>
                                                                <h6 className="review-posted-date">10 May 2018</h6>
                                                            </div>
                                                            <div className="reviewer-stars-title-body">
                                                                <div className="reviewer-stars">
                                                                    <div className="star">
                                                                        <span style={{ width: 67 }} />
                                                                    </div>
                                                                    <span className="review-title">Good!</span>
                                                                </div>
                                                                <p className="review-body">Good Quality...!</p>
                                                            </div>
                                                        </div>
                                                        <div className="review-data">
                                                            <div className="reviewer-name-and-date">
                                                                <h6 className="reviewer-name">Doe</h6>
                                                                <h6 className="review-posted-date">10 June 2018</h6>
                                                            </div>
                                                            <div className="reviewer-stars-title-body">
                                                                <div className="reviewer-stars">
                                                                    <div className="star">
                                                                        <span style={{ width: 67 }} />
                                                                    </div>
                                                                    <span className="review-title">Well done!</span>
                                                                </div>
                                                                <p className="review-body">Cotton is good.</p>
                                                            </div>
                                                        </div>
                                                        <div className="review-data">
                                                            <div className="reviewer-name-and-date">
                                                                <h6 className="reviewer-name">Tim</h6>
                                                                <h6 className="review-posted-date">10 July 2018</h6>
                                                            </div>
                                                            <div className="reviewer-stars-title-body">
                                                                <div className="reviewer-stars">
                                                                    <div className="star">
                                                                        <span style={{ width: 67 }} />
                                                                    </div>
                                                                    <span className="review-title">Well done!</span>
                                                                </div>
                                                                <p className="review-body">Excellent condition</p>
                                                            </div>
                                                        </div>
                                                        <div className="review-data">
                                                            <div className="reviewer-name-and-date">
                                                                <h6 className="reviewer-name">Johnny</h6>
                                                                <h6 className="review-posted-date">10 March 2018</h6>
                                                            </div>
                                                            <div className="reviewer-stars-title-body">
                                                                <div className="reviewer-stars">
                                                                    <div className="star">
                                                                        <span style={{ width: 67 }} />
                                                                    </div>
                                                                    <span className="review-title">Bright!</span>
                                                                </div>
                                                                <p className="review-body">Cotton</p>
                                                            </div>
                                                        </div>
                                                        <div className="review-data">
                                                            <div className="reviewer-name-and-date">
                                                                <h6 className="reviewer-name">Alexia C. Marshall</h6>
                                                                <h6 className="review-posted-date">12 May 2018</h6>
                                                            </div>
                                                            <div className="reviewer-stars-title-body">
                                                                <div className="reviewer-stars">
                                                                    <div className="star">
                                                                        <span style={{ width: 67 }} />
                                                                    </div>
                                                                    <span className="review-title">Well done!</span>
                                                                </div>
                                                                <p className="review-body">Good polyester Cotton</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* All-Reviews /- */}
                                                    {/* Pagination-Review */}
                                                    <div className="pagination-review-area">
                                                        <div className="pagination-review-number">
                                                            <ul>
                                                                <li style={{ display: "none" }}>
                                                                    <a href="single-product.html" title="Previous">
                                                                        <i className="fas fa-angle-left" />
                                                                    </a>
                                                                </li>
                                                                <li className="active">
                                                                    <a href="single-product.html">1</a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">2</a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">3</a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">...</a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html">10</a>
                                                                </li>
                                                                <li>
                                                                    <a href="single-product.html" title="Next">
                                                                        <i className="fas fa-angle-right" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Pagination-Review /- */}
                                                </div>
                                                {/* Get-Reviews /- */}
                                            </div>
                                        </div>
                                        {/* Reviews-Tab /- */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Detail-Tabs /- */}
                        {/* Different-Product-Section */}
                        <div className="detail-different-product-section u-s-p-t-80">
                            {/* Similar-Products */}
                            <section className="section-maker">
                                <div className="container">
                                    <div className="sec-maker-header text-center">
                                        <h3 className="sec-maker-h3">Similar Products</h3>
                                    </div>
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a
                                                        className="item-img-wrapper-link"
                                                        href="single-product.html"
                                                    >
                                                        <img
                                                            className="img-fluid"
                                                            src="images/product/product@3x.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a
                                                            className="item-quick-look"
                                                            data-toggle="modal"
                                                            href="#quick-view"
                                                        >
                                                            Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">
                                                            Mail
                                                        </a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">
                                                            Add to Wishlist
                                                        </a>
                                                        <a className="item-addCart" href="javascript:void(0)">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Men's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Tops</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">
                                                                Casual Hoodie Full Cotton
                                                            </a>
                                                        </h6>
                                                        <div className="item-stars">
                                                            <div
                                                                className="star"
                                                                title="0 out of 5 - based on 0 Reviews"
                                                            >
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                    </div>
                                                    <div className="price-template">
                                                        <div className="item-new-price">$55.00</div>
                                                        <div className="item-old-price">$60.00</div>
                                                    </div>
                                                </div>
                                                <div className="tag new">
                                                    <span>NEW</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a
                                                        className="item-img-wrapper-link"
                                                        href="single-product.html"
                                                    >
                                                        <img
                                                            className="img-fluid"
                                                            src="images/product/product@3x.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a
                                                            className="item-quick-look"
                                                            data-toggle="modal"
                                                            href="#quick-view"
                                                        >
                                                            Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">
                                                            Mail
                                                        </a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">
                                                            Add to Wishlist
                                                        </a>
                                                        <a className="item-addCart" href="javascript:void(0)">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Men's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Outwear</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">
                                                                Fern Green Men's Jacket
                                                            </a>
                                                        </h6>
                                                        <div className="item-stars">
                                                            <div
                                                                className="star"
                                                                title="0 out of 5 - based on 0 Reviews"
                                                            >
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                    </div>
                                                    <div className="price-template">
                                                        <div className="item-new-price">$55.00</div>
                                                        <div className="item-old-price">$60.00</div>
                                                    </div>
                                                </div>
                                                <div className="tag hot">
                                                    <span>HOT</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a
                                                        className="item-img-wrapper-link"
                                                        href="single-product.html"
                                                    >
                                                        <img
                                                            className="img-fluid"
                                                            src="images/product/product@3x.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a
                                                            className="item-quick-look"
                                                            data-toggle="modal"
                                                            href="#quick-view"
                                                        >
                                                            Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">
                                                            Mail
                                                        </a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">
                                                            Add to Wishlist
                                                        </a>
                                                        <a className="item-addCart" href="javascript:void(0)">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Men's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Sunglasses</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Round</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">
                                                                Brown Dark Tan Round Double Bridge Sunglasses
                                                            </a>
                                                        </h6>
                                                        <div className="item-stars">
                                                            <div
                                                                className="star"
                                                                title="0 out of 5 - based on 0 Reviews"
                                                            >
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                    </div>
                                                    <div className="price-template">
                                                        <div className="item-new-price">$55.00</div>
                                                        <div className="item-old-price">$60.00</div>
                                                    </div>
                                                </div>
                                                <div className="tag hot">
                                                    <span>HOT</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a
                                                        className="item-img-wrapper-link"
                                                        href="single-product.html"
                                                    >
                                                        <img
                                                            className="img-fluid"
                                                            src="images/product/product@3x.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a
                                                            className="item-quick-look"
                                                            data-toggle="modal"
                                                            href="#quick-view"
                                                        >
                                                            Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">
                                                            Mail
                                                        </a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">
                                                            Add to Wishlist
                                                        </a>
                                                        <a className="item-addCart" href="javascript:void(0)">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Men's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Sunglasses</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Round</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">
                                                                Black Round Double Bridge Sunglasses
                                                            </a>
                                                        </h6>
                                                        <div className="item-stars">
                                                            <div
                                                                className="star"
                                                                title="0 out of 5 - based on 0 Reviews"
                                                            >
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                    </div>
                                                    <div className="price-template">
                                                        <div className="item-new-price">$55.00</div>
                                                        <div className="item-old-price">$60.00</div>
                                                    </div>
                                                </div>
                                                <div className="tag hot">
                                                    <span>HOT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Similar-Products /- */}
                            {/* Recently-View-Products  */}
                            <section className="section-maker">
                                <div className="container">
                                    <div className="sec-maker-header text-center">
                                        <h3 className="sec-maker-h3">Recently View</h3>
                                    </div>
                                    <div className="slider-fouc">
                                        <div className="products-slider owl-carousel" data-item={4}>
                                            <div className="item">
                                                <div className="image-container">
                                                    <a
                                                        className="item-img-wrapper-link"
                                                        href="single-product.html"
                                                    >
                                                        <img
                                                            className="img-fluid"
                                                            src="images/product/product@3x.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="item-action-behaviors">
                                                        <a
                                                            className="item-quick-look"
                                                            data-toggle="modal"
                                                            href="#quick-view"
                                                        >
                                                            Quick Look
                                                        </a>
                                                        <a className="item-mail" href="javascript:void(0)">
                                                            Mail
                                                        </a>
                                                        <a className="item-addwishlist" href="javascript:void(0)">
                                                            Add to Wishlist
                                                        </a>
                                                        <a className="item-addCart" href="javascript:void(0)">
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <div className="what-product-is">
                                                        <ul className="bread-crumb">
                                                            <li className="has-separator">
                                                                <a href="shop-v1-root-category.html">Men's</a>
                                                            </li>
                                                            <li className="has-separator">
                                                                <a href="shop-v2-sub-category.html">Outwear</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-v3-sub-sub-category.html">Jackets</a>
                                                            </li>
                                                        </ul>
                                                        <h6 className="item-title">
                                                            <a href="single-product.html">
                                                                Maire Battlefield Jeep Men's Jacket
                                                            </a>
                                                        </h6>
                                                        <div className="item-stars">
                                                            <div
                                                                className="star"
                                                                title="0 out of 5 - based on 0 Reviews"
                                                            >
                                                                <span style={{ width: 0 }} />
                                                            </div>
                                                            <span>(0)</span>
                                                        </div>
                                                    </div>
                                                    <div className="price-template">
                                                        <div className="item-new-price">$55.00</div>
                                                        <div className="item-old-price">$60.00</div>
                                                    </div>
                                                </div>
                                                <div className="tag hot">
                                                    <span>HOT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Recently-View-Products /- */}
                        </div>
                        {/* Different-Product-Section /- */}
                    </div>
                </div>
                {/* Single-Product-Full-Width-Page /- */}
                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        {/* Outer-Footer */}
                        <div className="outer-footer-wrapper u-s-p-y-80">
                            <h6>For special offers and other discount information</h6>
                            <h1>Subscribe to our Newsletter</h1>
                            <p>
                                Subscribe to the mailing list to receive updates on promotions, new
                                arrivals, discount and coupons.
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
                                                <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
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
                {/* Quick-view-Modal */}
                <div id="quick-view" className="modal fade">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="button dismiss-button ion ion-ios-close"
                                data-dismiss="modal"
                            />
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        {/* Product-zoom-area */}
                                        <div className="zoom-area">
                                            <img
                                                id="zoom-pro-quick-view"
                                                className="img-fluid"
                                                src="images/product/product@4x.jpg"
                                                data-zoom-image="images/product/product@4x.jpg"
                                                alt="Zoom Image"
                                            />
                                            <div id="gallery-quick-view" className="u-s-m-t-10">
                                                <a
                                                    className="active"
                                                    data-image="images/product/product@4x.jpg"
                                                    data-zoom-image="images/product/product@4x.jpg"
                                                >
                                                    <img src="images/product/product@2x.jpg" alt="Product" />
                                                </a>
                                                <a
                                                    data-image="images/product/product@4x.jpg"
                                                    data-zoom-image="images/product/product@4x.jpg"
                                                >
                                                    <img src="images/product/product@2x.jpg" alt="Product" />
                                                </a>
                                                <a
                                                    data-image="images/product/product@4x.jpg"
                                                    data-zoom-image="images/product/product@4x.jpg"
                                                >
                                                    <img src="images/product/product@2x.jpg" alt="Product" />
                                                </a>
                                                <a
                                                    data-image="images/product/product@4x.jpg"
                                                    data-zoom-image="images/product/product@4x.jpg"
                                                >
                                                    <img src="images/product/product@2x.jpg" alt="Product" />
                                                </a>
                                                <a
                                                    data-image="images/product/product@4x.jpg"
                                                    data-zoom-image="images/product/product@4x.jpg"
                                                >
                                                    <img src="images/product/product@2x.jpg" alt="Product" />
                                                </a>
                                                <a
                                                    data-image="images/product/product@4x.jpg"
                                                    data-zoom-image="images/product/product@4x.jpg"
                                                >
                                                    <img src="images/product/product@2x.jpg" alt="Product" />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Product-zoom-area /- */}
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        {/* Product-details */}
                                        <div className="all-information-wrapper">
                                            <div className="section-1-title-breadcrumb-rating">
                                                <div className="product-title">
                                                    <h1>
                                                        <a href="single-product.html">
                                                            Casual Hoodie Full Cotton
                                                        </a>
                                                    </h1>
                                                </div>
                                                <ul className="bread-crumb">
                                                    <li className="has-separator">
                                                        <a href="home.html">Home</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v1-root-category.html">Men's Clothing</a>
                                                    </li>
                                                    <li className="has-separator">
                                                        <a href="shop-v2-sub-category.html">Tops</a>
                                                    </li>
                                                    <li className="is-marked">
                                                        <a href="shop-v3-sub-sub-category.html">Hoodies</a>
                                                    </li>
                                                </ul>
                                                <div className="product-rating">
                                                    <div
                                                        className="star"
                                                        title="4.5 out of 5 - based on 23 Reviews"
                                                    >
                                                        <span style={{ width: 67 }} />
                                                    </div>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                            <div className="section-2-short-description u-s-p-y-14">
                                                <h6 className="information-heading u-s-m-b-8">
                                                    Description:
                                                </h6>
                                                <p>
                                                    This hoodie is full cotton. It includes a muff sewn onto the
                                                    lower front, and (usually) a drawstring to adjust the hood
                                                    opening. Throughout the U.S., it is common for
                                                    middle-school, high-school, and college students to wear
                                                    this sweatshirts—with or without hoods—that display their
                                                    respective school names or mascots across the chest, either
                                                    as part of a uniform or personal preference.
                                                </p>
                                            </div>
                                            <div className="section-3-price-original-discount u-s-p-y-14">
                                                <div className="price">
                                                    <h4>$55.00</h4>
                                                </div>
                                                <div className="original-price">
                                                    <span>Original Price:</span>
                                                    <span>$60.00</span>
                                                </div>
                                                <div className="discount-price">
                                                    <span>Discount:</span>
                                                    <span>8%</span>
                                                </div>
                                                <div className="total-save">
                                                    <span>Save:</span>
                                                    <span>$5</span>
                                                </div>
                                            </div>
                                            <div className="section-4-sku-information u-s-p-y-14">
                                                <h6 className="information-heading u-s-m-b-8">
                                                    Sku Information:
                                                </h6>
                                                <div className="availability">
                                                    <span>Availability:</span>
                                                    <span>In Stock</span>
                                                </div>
                                                <div className="left">
                                                    <span>Only:</span>
                                                    <span>50 left</span>
                                                </div>
                                            </div>
                                            <div className="section-5-product-variants u-s-p-y-14">
                                                <h6 className="information-heading u-s-m-b-8">
                                                    Product Variants:
                                                </h6>
                                                <div className="color u-s-m-b-11">
                                                    <span>Available Color:</span>
                                                    <div className="color-variant select-box-wrapper">
                                                        <select className="select-box product-color">
                                                            <option value={1}>Heather Grey</option>
                                                            <option value={3}>Black</option>
                                                            <option value={5}>White</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="sizes u-s-m-b-11">
                                                    <span>Available Size:</span>
                                                    <div className="size-variant select-box-wrapper">
                                                        <select className="select-box product-size">
                                                            <option value="">Male 2XL</option>
                                                            <option value="">Male 3XL</option>
                                                            <option value="">Kids 4</option>
                                                            <option value="">Kids 6</option>
                                                            <option value="">Kids 8</option>
                                                            <option value="">Kids 10</option>
                                                            <option value="">Kids 12</option>
                                                            <option value="">Female Small</option>
                                                            <option value="">Male Small</option>
                                                            <option value="">Female Medium</option>
                                                            <option value="">Male Medium</option>
                                                            <option value="">Female Large</option>
                                                            <option value="">Male Large</option>
                                                            <option value="">Female XL</option>
                                                            <option value="">Male XL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                                                <form action="#" className="post-form">
                                                    <div className="quick-social-media-wrapper u-s-m-b-22">
                                                        <span>Share:</span>
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
                                                        </ul>
                                                    </div>
                                                    <div className="quantity-wrapper u-s-m-b-22">
                                                        <span>Quantity:</span>
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
                                                    <div>
                                                        <button
                                                            className="button button-outline-secondary"
                                                            type="submit"
                                                        >
                                                            Add to cart
                                                        </button>
                                                        <button className="button button-outline-secondary far fa-heart u-s-m-l-6" />
                                                        <button className="button button-outline-secondary far fa-envelope u-s-m-l-6" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* Product-details /- */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Quick-view-Modal /- */}
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
    )
}