import {
    faAngleDown,
    faBasketShopping,
    faChevronDown,
    faCircleCheck,
    faClose,
    faCog,
    faEnvelope,
    faHeart,
    faHome,
    faPhoneFlip,
    faRightFromBracket,
    faSearch,
    faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/client";
import instance from "../../helpers/axiosConfig";
import { useRouter } from 'next/router'
import { changeLanguage } from "../../helpers/customFunction/changeLanguage";
import { changeRoute } from "../../helpers/customFunction/changeRoute";
import { useEffect, useState } from 'react';

export default function Header({ updateCartHeader, isPageCart }) {

    const router = useRouter()

    const [session, loading] = useSession();

    const [loadingCart, setLoadingCart] = useState(false);

    const [userCart, setUserCart] = useState(null);

    useEffect(() => {
        setLoadingCart(true);
        if (session) {
            const getCartByIdUser = async () => {
                // You can await here
                const response = await instance().get("https://sqlshop123.herokuapp.com/api/cart/getCartByIdCustomer", { params: { idCustomer: session.user.id } });
                if (response) {
                    setUserCart(response.data);
                    setLoadingCart(false)
                }
            }

            getCartByIdUser().catch(err => {
                if (err.message == "Network Error") {
                    console.log("chua mo backend");
                }
            });
        }

    }, [updateCartHeader, loading]);

    const getTotalCart = () => {
        let result = 0;
        userCart.forEach(ele => {
            result += (ele.product.price * ele.quantity)
        })
        return result.toFixed(2);
    }

    return (
        <>
            {/* Header */}
            <header>
                {/* Top-Header */}
                <div className="full-layer-outer-header">
                    <div className="container clearfix">
                        <nav>
                            <ul className="primary-nav g-nav">
                                <li>
                                    <a href="tel:+111444989">
                                        <i className="u-c-brand u-s-m-r-9">
                                            <FontAwesomeIcon icon={faPhoneFlip} />
                                        </i>
                                        Telephone:+111-444-989
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contact@domain.com">
                                        <i className="u-c-brand u-s-m-r-9">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </i>
                                        {session ? `E-mail: ${session.user.email}` : 'E-mail: contact@domain.com'}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <ul className="secondary-nav g-nav">
                                <li>
                                    <a>
                                        {session ? `${session.user.name}` : 'MyAccount'}
                                        <i className="u-s-m-l-9">
                                            <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                                        </i>
                                    </a>
                                    <ul className="g-dropdown" style={{ width: 200 }}>
                                        {
                                            session ? (<>
                                                <li onClick={() => { changeRoute('/account/profile', router) }}>
                                                    <a>
                                                        <i className=" u-s-m-r-9">
                                                            <FontAwesomeIcon icon={faCog} />
                                                        </i>My Profile
                                                    </a>
                                                </li>
                                                <li onClick={() => { changeRoute('/saler/profile', router) }}>
                                                    <a>
                                                        <i className=" u-s-m-r-9">
                                                            <FontAwesomeIcon icon={faCog} />
                                                        </i>My Saler Profile
                                                    </a>
                                                </li>
                                                {
                                                    session.user.role.includes('Admin') && <li onClick={() => { changeRoute('/admin', router) }}>
                                                        <a>
                                                            <i className=" u-s-m-r-9">
                                                                <FontAwesomeIcon icon={faCog} />
                                                            </i>Admin Page
                                                        </a>
                                                    </li>
                                                }
                                                <li onClick={() => { changeRoute('/order', router) }}>
                                                    <a>
                                                        <i className="u-s-m-r-9">
                                                            <FontAwesomeIcon icon={faCircleCheck} />
                                                        </i>Checkout
                                                    </a>
                                                </li>
                                                <li>
                                                    <a onClick={() => { changeRoute('/logout', router) }}>
                                                        <i className=" u-s-m-r-9" >
                                                            <FontAwesomeIcon icon={faRightFromBracket} />
                                                        </i>Sign out
                                                    </a>
                                                </li>
                                            </>) : (<></>)
                                        }
                                        {!loading && !session && <li>
                                            <a onClick={() => { changeRoute('/account', router) }}>
                                                <i className=" u-s-m-r-9">
                                                    <FontAwesomeIcon icon={faSignInAlt} />
                                                </i>Login / Signup
                                            </a>
                                        </li>}
                                    </ul>
                                </li>
                                <li>
                                    <a>
                                        USD
                                        <i className="u-s-m-l-9">
                                            <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                                        </i>
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
                                        {router.locale === 'vi' ? 'VI' : 'ENG'}
                                        <i className="u-s-m-l-9">
                                            <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                                        </i>
                                    </a>
                                    <ul className="g-dropdown" style={{ width: 70 }}>
                                        {/* className="u-c-brand"  */}
                                        <li>
                                            <a className={router.locale === 'en' ? 'u-c-brand' : ''} onClick={() => { changeLanguage(router.asPath, "en", router) }}>
                                                ENG
                                            </a>
                                        </li>
                                        <li>
                                            <a className={router.locale === 'vi' ? 'u-c-brand' : ''} onClick={() => { changeLanguage(router.asPath, "vi", router) }}>VI</a>
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
                                    <a onClick={() => { changeRoute('/', router) }}>
                                        <img
                                            src="/static/images/main-logo/groover-branding-1.png"
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
                                            <select className="select-box" id="select-category">
                                                <option value="">All</option>
                                                <option value="">Men's Clothing</option>
                                                <option value="">Women's Clothing</option>
                                                <option value="">Toys Hobbies &amp; Robots</option>
                                                <option value="">Mobiles &amp; Tablets</option>
                                                <option value="">Consumer Electronics</option>
                                                <option value="">Books &amp; Audible</option>
                                                <option value="">Beauty &amp; Health</option>
                                                <option value="">Furniture Home &amp; Office</option>
                                            </select>
                                            <i style={{
                                                fontSize: 8,
                                                position: "absolute",
                                                right: 8,
                                                top: "50%",
                                                transform: "translateY(-50%)"
                                            }}>
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </i>
                                        </div>
                                    </div>
                                    <button
                                        id="btn-search"
                                        type="submit"
                                        className="button button-primary fas fa-search"
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </form>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <nav>
                                    <ul className="mid-nav g-nav">
                                        <li className="u-d-none-lg">
                                            <a>
                                                <i className="u-c-brand">
                                                    <FontAwesomeIcon icon={faHome} />
                                                </i>
                                            </a>
                                        </li>
                                        <li className="u-d-none-lg">
                                            <a href="wishlist.html">
                                                <i>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </i>
                                            </a>
                                        </li>
                                        {
                                            (session && isPageCart != true) && <li>
                                                <a id="mini-cart-trigger">
                                                    <i>
                                                        <FontAwesomeIcon icon={faBasketShopping} />
                                                    </i>
                                                    <span className="item-counter">{userCart?.length}</span>
                                                    {/* <span className="item-price">$220.00</span> */}
                                                </a>
                                            </li>
                                        }
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
                {
                    (session && isPageCart != true) && <div className="mini-cart-wrapper">
                        <div className="mini-cart">
                            <div className="mini-cart-header">
                                YOUR CART
                                <button
                                    type="button"
                                    className="button ion ion-md-close"
                                    id="mini-cart-close"
                                >
                                    <i>
                                        <FontAwesomeIcon icon={faClose} />
                                    </i>
                                </button>
                            </div>
                            {
                                loadingCart == false ? (
                                    <>
                                        <ul className="mini-cart-list">
                                            {
                                                userCart.map((ele, i) => {
                                                    return (
                                                        <li className="clearfix" key={i}>
                                                            <a>
                                                                <img
                                                                    src={ele.product.imgUrl}
                                                                    // src="images/product/product@1x.jpg"
                                                                    alt="Product"
                                                                />
                                                                <span className="mini-item-name">
                                                                    {ele.product.name}
                                                                </span>
                                                                <span className="mini-item-price">{ele.product.price} vnđ</span>
                                                                <span className="mini-item-quantity"> x {ele.quantity} </span>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className="mini-shop-total clearfix">
                                            <span className="mini-total-heading float-left">Total:</span>
                                            <span className="mini-total-price float-right">{getTotalCart()} vnđ</span>
                                        </div>
                                        <div className="mini-action-anchors">
                                            <a onClick={() => { changeRoute('/cart', router) }} className="cart-anchor">
                                                View Cart
                                            </a>
                                            <a onClick={() => { changeRoute('/order', router) }} className="checkout-anchor">
                                                Checkout
                                            </a>
                                        </div>
                                    </>) : (
                                    <>
                                        <div style={{ textAlign: "center", lineHeight: "500px", fontSize: "22px" }}>
                                            Loading...
                                        </div>
                                    </>)
                            }
                        </div>
                    </div>
                }
                {/* Mini Cart /- */}
                {/* Bottom-Header */}
                <div className="full-layer-bottom-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
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
                                        <a href="custom-deal-page.html">Flash Deals </a>
                                    </li>
                                    <li className="mega-position">
                                        <a>
                                            Pages
                                            {/* <i className="fas fa-chevron-down u-s-m-l-9" /> */}
                                            <i className="ion-ios-arrow-forward">
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </i>
                                        </a>
                                        <div className="mega-menu mega-3-colm">
                                            <ul>
                                                <li className="menu-title">
                                                    Home &amp; Static Pages
                                                </li>
                                                <li>
                                                    <a href="home.html">
                                                        Home
                                                    </a>
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
                                                    <a onClick={() => { changeRoute('/shop', router) }}>Shop</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => { changeRoute('/cart', router) }}>Cart</a>
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
        </>
    )
}