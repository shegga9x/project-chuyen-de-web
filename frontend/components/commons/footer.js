import {
    faEnvelope,
    faLocationArrow,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTrans from "../../helpers/customHook/useTrans";

export default function Footer() {

    const trans = useTrans();

    return (
        <>
            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    {/* Outer-Footer */}
                    <div className="outer-footer-wrapper u-s-p-y-80">
                        <h6>{trans.footer.title1}</h6>
                        <h1>{trans.footer.title2}</h1>
                        <p>
                            {trans.footer.title3}
                        </p>
                        <form className="newsletter-form">
                            <label className="sr-only" htmlFor="newsletter-field">
                                {trans.footer.title4}
                            </label>
                            <input
                                type="text"
                                id="newsletter-field"
                                placeholder="Your Email Address"
                            // {trans.footer.title5}

                            />
                            <button type="submit" className="button">
                                {trans.footer.submit}
                            </button>
                        </form>
                    </div>
                    {/* Outer-Footer /- */}
                    {/* Mid-Footer */}
                    <div className="mid-footer-wrapper u-s-p-b-80">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="footer-list">
                                    <h6>{trans.footer.service}</h6>
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
                                    <h6>{trans.footer.company}</h6>
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
                                    <h6>{trans.footer.information}</h6>
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
                                    <h6>{trans.footer.address}</h6>
                                    <ul>
                                        <li>
                                            <i className=" u-s-m-r-9" >
                                                <FontAwesomeIcon icon={faLocationArrow} />
                                            </i>
                                            <span>819 Sugar Camp Road, West Concord, MN 55985</span>
                                        </li>
                                        <li>
                                            <a href="tel:+923086561801">
                                                <i className=" u-s-m-r-9" >
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </i>
                                                <span>+111-444-989</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:contact@domain.com">
                                                <i className=" u-s-m-r-9" >
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </i>
                                                <span> contact@domain.com</span>
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
                            Copyright © 2018 <a href="home.html">Groover</a> All Right
                            Reserved
                        </p>
                    </div>
                </div>
                {/* Bottom-Footer /- */}
            </footer>
            {/* Footer /- */}
        </>
    )
}