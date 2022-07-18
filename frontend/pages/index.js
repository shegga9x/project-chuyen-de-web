import {
  faBatteryHalf,
  faCog,
  faEllipsis,
  faEnvelope,
  faHeart,
  faLaptop,
  faMagnifyingGlass,
  faMobileButton,
  faPhoneSlash,
  faPlus,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Layout from "../components/layout";
// import { useSession} from "next-auth/client";
import useTrans from "../helpers/customHook/useTrans";

export default function Home() {

  const trans = useTrans();

  return (
    <>
      <Head>
        <title>
          Groover - Online Shopping for Electronics, Apparel, Computers, Books,
          DVDs & more
        </title>
      </Head>
      <Layout home>
        {/* Main-Slider */}
        <div className="default-height ph-item">
          <div className="slider-main owl-carousel">
            <div className="bg-image one">
              <div className="slide-content slide-animation">
                {/* <h1>Casual Clothing</h1>
                <h2>lifestyle / clothing / hype</h2> */}
                <div className="image-banner">
                  <a
                    href="shop-v1-root-category.html"
                    className="mx-auto banner-hover effect-dark-opacity"
                  >
                    <img
                      // className="img-fluid"
                      // src="/static/images/banners/bannerlayer-1.jpg"
                      src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=82"
                      width="auto" height="720"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-image two">
              <div className="slide-content slide-animation">
                {/* <h2 className="slide-2-h2-a">Hiking</h2>
                <h2 className="slide-2-h2-b">Collection</h2>
                <h1>2018</h1> */}
                <div className="image-banner">
                  <a
                    href="shop-v1-root-category.html"
                    className="mx-auto banner-hover effect-dark-opacity"
                  >
                    <img
                      // className="img-fluid"
                      // src="/static/images/banners/bannerlayer-1.jpg"
                      // src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2.jpg?v=82"
                      src=" https://file.hstatic.net/200000182297/file/bia_0b7834ad50be430ab6175f6a1b703f23.jpg"
                      alt="Winter Season Banner"
                      width="auto" height="720"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main-Slider /- */}
        {/* Banner-Layer */}
        <div className="banner-layer">
          <div className="container">
            <div className="image-banner">
              <a
                href="shop-v1-root-category.html"
                className="mx-auto banner-hover effect-dark-opacity"
              >
                <img
                  // className="img-fluid"
                  // src="/static/images/banners/bannerlayer-1.jpg"
                  src="https://file.hstatic.net/200000182297/file/4.7.1_5e799a1c1b2f4e53868eb7cba03c2421.jpg"
                  alt="Winter Season Banner"
                  style={{ maxWidth: '1110px' }}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Banner-Layer /- */}
        {/* Men-Clothing */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              {/* <h3 className="sec-maker-h3">MEN'S CLOTHING</h3> */}
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#men-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#men-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#men-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#men-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="men-latest-products"
                  >
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
                                alt="Product"
                              />
                            </a>
                            <div className="item-action-behaviors">
                              <a
                                className="item-quick-look"
                                data-toggle="modal"
                                href="#quick-view"
                              >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                              </a>
                              <a className="item-mail" href="">
                                <FontAwesomeIcon icon={faEnvelope} />
                              </a>
                              <a className="item-addwishlist" href="">
                                <FontAwesomeIcon icon={faHeart} />
                              </a>
                              <a className="item-addCart" href="">
                                <FontAwesomeIcon icon={faPlus} />
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    Hoodies
                                  </a>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    T-Shirts
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Mischka Plain Men T-Shirt
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v4-filter-as-category.html">
                                    T-Shirts
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Bean Plain Men T-Shirt
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Jeans
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Regular Rock Blue Men Jean
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    Suits
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Maire Full Men Suit
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
                          <div className="tag sale">
                            <span>SALE</span>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v2-sub-category.html">
                                    Outwear
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Jackets
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Woodsmoke Rookie Parka Jacket
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v2-sub-category.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Ties
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Blue Zodiac Boxes Reg Tie
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Zambezi Carved Leather Business Casual Shoes
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
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="men-best-selling-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="men-top-rating-products">
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v3-sub-sub-category.html">
                                    Suits
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Maire Full Men Suit
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v2-sub-category.html">
                                    Outwear
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Jackets
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Woodsmoke Rookie Parka Jacket
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v2-sub-category.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Ties
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Blue Zodiac Boxes Reg Tie
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
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
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Zambezi Carved Leather Business Casual Shoes
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="men-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Men-Clothing-Timing-Section */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <span className="sec-maker-span-text">Men's Clothing</span>
              <h3 className="sec-maker-h3 u-s-m-b-22">Hot Deals</h3>
              <span className="sec-maker-span-text">Ends in</span>
              {/* Timing-Box */}
              <div className="section-timing-wrapper dynamic">
                <span
                  className="fictitious-seconds"
                  style={{ display: "none" }}
                >
                  18000
                </span>
                <div className="section-box-wrapper box-days">
                  <div className="section-box">
                    <span className="section-key">120</span>
                    <span className="section-value">Days</span>
                  </div>
                </div>
                <div className="section-box-wrapper box-hrs">
                  <div className="section-box">
                    <span className="section-key">54</span>
                    <span className="section-value">HRS</span>
                  </div>
                </div>
                <div className="section-box-wrapper box-mins">
                  <div className="section-box">
                    <span className="section-key">3</span>
                    <span className="section-value">MINS</span>
                  </div>
                </div>
                <div className="section-box-wrapper box-secs">
                  <div className="section-box">
                    <span className="section-key">32</span>
                    <span className="section-value">SEC</span>
                  </div>
                </div>
              </div>
              {/* Timing-Box /- */}
            </div>
            {/* Carousel */}
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
                        src="/static/images/product/product@3x.jpg"
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
                      <a className="item-mail" href="">
                        Mail
                      </a>
                      <a className="item-addwishlist" href="">
                        Add to Wishlist
                      </a>
                      <a className="item-addCart" href="">
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
                <div className="item">
                  <div className="image-container">
                    <a
                      className="item-img-wrapper-link"
                      href="single-product.html"
                    >
                      <img
                        className="img-fluid"
                        src="/static/images/product/product@3x.jpg"
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
                      <a className="item-mail" href="">
                        Mail
                      </a>
                      <a className="item-addwishlist" href="">
                        Add to Wishlist
                      </a>
                      <a className="item-addCart" href="">
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
                        src="/static/images/product/product@3x.jpg"
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
                      <a className="item-mail" href="">
                        Mail
                      </a>
                      <a className="item-addwishlist" href="">
                        Add to Wishlist
                      </a>
                      <a className="item-addCart" href="">
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
                        src="/static/images/product/product@3x.jpg"
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
                      <a className="item-mail" href="">
                        Mail
                      </a>
                      <a className="item-addwishlist" href="">
                        Add to Wishlist
                      </a>
                      <a className="item-addCart" href="">
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
            {/* Carousel /- */}
          </div>
        </section>
        {/* Men-Clothing-Timing-Section /- */}
        {/* Banner-Image & View-more */}
        <div className="banner-image-view-more">
          <div className="container">
            <div className="image-banner u-s-m-y-40">
              <a
                href="shop-v1-root-category.html"
                className="mx-auto banner-hover effect-dark-opacity"
              >
                {/* <div className="img-fluid" style={{ backgroundImage: 'url("https://file.hstatic.net/200000182297/file/banner_-_sweater_ac9931fc221846bcad04a948fe06cbaa.jpg")', width: '1110px', height: '236px', backgroundPosition: "50%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

                </div> */}
                <img
                  // className="img-fluid"
                  // src="/static/images/banners/ban-men.jpg"
                  src="https://file.hstatic.net/200000182297/file/banner_-_sweater_ac9931fc221846bcad04a948fe06cbaa.jpg"
                  alt="Banner Image"
                  style={{ maxWidth: '1110px' }}
                />
              </a>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </div>
        {/* Banner-Image & View-more /- */}
        {/* Men-Clothing /- */}
        {/* Women-Clothing */}
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">WOMEN'S CLOTHING</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#women-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#women-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#women-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#women-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="women-latest-products"
                  >
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  White Solitude Dress with mid heel &amp; Bag
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black Rock Dress with High Jewelery Necklace
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Haiti Full Dress with Boots &amp; Jacket
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Black &amp; White Wrap Dress with High
                                  Jewelery Necklace
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Grey Nickel Special Occasion Dress
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
                          <div className="tag sale">
                            <span>SALE</span>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Red Carmine Winter Special Occasion Dress
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Wax Flower with Corn Silk Heel
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
                        </div>
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Intimates
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Bras
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Red Wild Bra </a>
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
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="women-best-selling-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="women-top-rating-products">
                    <div className="slider-fouc">
                      <div
                        className="products-slider owl-carousel"
                        data-item={4}
                      >
                        <div className="item">
                          <div className="image-container">
                            <a
                              className="item-img-wrapper-link"
                              href="single-product.html"
                            >
                              <img
                                className="img-fluid"
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Grey Nickel Special Occasion Dress
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag sale">
                            <span>SALE</span>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">Tops</a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Dresses
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Red Carmine Winter Special Occasion Dress
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Bottoms
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Shoes
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">
                                  Wax Flower with Corn Silk Heel
                                </a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
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
                                src="/static/images/product/product@3x.jpg"
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
                              <a className="item-mail" href="">
                                Mail
                              </a>
                              <a className="item-addwishlist" href="">
                                Add to Wishlist
                              </a>
                              <a className="item-addCart" href="">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="item-content">
                            <div className="what-product-is">
                              <ul className="bread-crumb">
                                <li className="has-separator">
                                  <a href="shop-v1-root-category.html">
                                    Women's
                                  </a>
                                </li>
                                <li className="has-separator">
                                  <a href="shop-v2-sub-category.html">
                                    Intimates
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-v3-sub-sub-category.html">
                                    Bras
                                  </a>
                                </li>
                              </ul>
                              <h6 className="item-title">
                                <a href="single-product.html">Red Wild Bra</a>
                              </h6>
                              <div className="item-stars">
                                <div
                                  className="star"
                                  title="4.5 out of 5 - based on 23 Reviews"
                                >
                                  <span style={{ width: 67 }} />
                                </div>
                                <span>(23)</span>
                              </div>
                            </div>
                            <div className="price-template">
                              <div className="item-new-price">$55.00</div>
                              <div className="item-old-price">$60.00</div>
                            </div>
                          </div>
                          <div className="tag discount">
                            <span>-15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="women-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        <section className="section-maker">
          <div className="container">
            <div className="sec-maker-header text-center">
              <h3 className="sec-maker-h3">Mobiles &amp; Tablets</h3>
              <ul className="nav tab-nav-style-1-a justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#mobiles-latest-products"
                  >
                    Latest Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#mobiles-best-selling-products"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#mobiles-top-rating-products"
                  >
                    Top Rating
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#mobiles-featured-products"
                  >
                    Featured Products
                  </a>
                </li>
              </ul>
              <span className="sec-maker-span-text u-s-m-b-8 d-block">
                Select products in specific category
              </span>
            </div>
            <div className="wrapper-content">
              <div className="outer-area-tab">
                <div className="tab-content">
                  <div
                    className="tab-pane active show fade"
                    id="mobiles-latest-products"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-1 col-md-12">
                        <ul className="nav tab-nav-style-2-a">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="#smart-phones"
                              title="Smart Phones"
                            >
                              {/* <i className="ion ion-ios-phone-portrait" /> */}
                              <i>
                                <FontAwesomeIcon icon={faMobileButton} />
                              </i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#tablets"
                              title="Tablets"
                            >
                              {/* <i className="ion ion-md-phone-landscape" /> */}
                              <i>
                                <FontAwesomeIcon icon={faPhoneSlash} />
                              </i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#smart-watches"
                              title="Smart Watches"
                            >
                              {/* <i className="ion ion-md-watch" /> */}
                              <i>
                                <FontAwesomeIcon icon={faStopwatch} />
                              </i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#device-accessories"
                              title="Device Accessories"
                            >
                              {/* <i className="ion ion-md-settings" /> */}
                              <i>
                                <FontAwesomeIcon icon={faCog} />
                              </i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#power-banks"
                              title="Power Banks"
                            >
                              {/* <i className="ion ion-md-battery-charging" /> */}
                              <i>
                                <FontAwesomeIcon icon={faBatteryHalf} />
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-11 col-md-12">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="smart-phones"
                          >
                            <div className="slider-fouc">
                              <div
                                className="specific-category-slider owl-carousel"
                                data-item={3}
                              >
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Xiaomi Note 2 Black Color
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
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
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Iphone X Silver Color
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
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
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Samsung S7 Green Metallic Color
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
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
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartphones
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Sony Xperia 3 Black Color
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="tablets">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="smart-watches">
                            <div className="slider-fouc">
                              <div
                                className="specific-category-slider owl-carousel"
                                data-item={3}
                              >
                                <div className="item">
                                  <div className="image-container">
                                    <a
                                      className="item-img-wrapper-link"
                                      href="single-product.html"
                                    >
                                      <img
                                        className="img-fluid"
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Outatime Mix Smartwatch
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
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
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Mombo Full Wrist Smartwatch
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
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
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Apollo Sport Think Smartwatch
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag sale">
                                    <span>SALE</span>
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
                                        src="/static/images/product/product@3x.jpg"
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
                                      <a className="item-mail" href="">
                                        Mail
                                      </a>
                                      <a className="item-addwishlist" href="">
                                        Add to Wishlist
                                      </a>
                                      <a className="item-addCart" href="">
                                        Add to Cart
                                      </a>
                                    </div>
                                  </div>
                                  <div className="item-content">
                                    <div className="what-product-is">
                                      <ul className="bread-crumb">
                                        <li className="has-separator">
                                          <a href="shop-v1-root-category.html">
                                            Mobiles &amp; Tablets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-v2-sub-category.html">
                                            Smartwatches
                                          </a>
                                        </li>
                                      </ul>
                                      <h6 className="item-title">
                                        <a href="single-product.html">
                                          Rhythm Pulse Smartwatch
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
                                      <div className="item-new-price">
                                        $55.00
                                      </div>
                                      <div className="item-old-price">
                                        $60.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tag discount">
                                    <span>-15%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="device-accessories"
                          >
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                          <div className="tab-pane fade" id="power-banks">
                            {/* Product Not Found */}
                            <div className="product-not-found">
                              <div className="not-found">
                                <h2>SORRY!</h2>
                                <h6>
                                  There is not any product in specific
                                  catalogue.
                                </h6>
                              </div>
                            </div>
                            {/* Product Not Found /- */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mobiles-best-selling-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mobiles-top-rating-products"
                  >
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                  <div className="tab-pane fade" id="mobiles-featured-products">
                    {/* Product Not Found */}
                    <div className="product-not-found">
                      <div className="not-found">
                        <h2>SORRY!</h2>
                        <h6>There is not any product in specific catalogue.</h6>
                      </div>
                    </div>
                    {/* Product Not Found /- */}
                  </div>
                </div>
              </div>
            </div>
            <div className="redirect-link-wrapper text-center u-s-p-t-25 u-s-p-b-80">
              <a className="redirect-link" href="store-directory.html">
                <span>View more on this category</span>
              </a>
            </div>
          </div>
        </section>
        {/* Consumer-Electronics /- */}

        {/* Continue-Link */}
        <div className="continue-link-wrapper u-s-p-b-80">
          <a
            className="continue-link"
            href="store-directory.html"
            title="View all products on site"
          >
            {/* <i className="ion ion-ios-more" /> */}
            <i>
              <FontAwesomeIcon icon={faEllipsis} />
            </i>
          </a>
        </div>
        {/* Continue-Link /- */}
        {/* Brand-Slider */}
        <div className="brand-slider u-s-p-b-80">
          <div className="container">
            <div className="brand-slider-content owl-carousel" data-item={5}>
              <div className="brand-pic">
                <a href="#">
                  <img
                    src="/static/images/brand-logos/b1.png"
                    alt="Brand Logo 1"
                  />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img
                    src="/static/images/brand-logos/b1.png"
                    alt="Brand Logo 2"
                  />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img
                    src="/static/images/brand-logos/b1.png"
                    alt="Brand Logo 3"
                  />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img
                    src="/static/images/brand-logos/b1.png"
                    alt="Brand Logo 5"
                  />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img
                    src="/static/images/brand-logos/b1.png"
                    alt="Brand Logo 6"
                  />
                </a>
              </div>
              <div className="brand-pic">
                <a href="#">
                  <img
                    src="/static/images/brand-logos/b1.png"
                    alt="Brand Logo 7"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Brand-Slider /- */}
        {/* Site-Priorities */}
        <section className="app-priority">
          <div className="container">
            <div className="priority-wrapper u-s-p-b-80">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-star" />
                    </div>
                    <h2>Great Value</h2>
                    <p>
                      We offer competitive prices on our 100 million plus
                      product range
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-cash" />
                    </div>
                    <h2>Shop with Confidence</h2>
                    <p>
                      Our Protection covers your purchase from click to delivery
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-ios-card" />
                    </div>
                    <h2>Safe Payment</h2>
                    <p>
                      Pay with the world’s most popular and secure payment
                      methods
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-item-wrapper">
                    <div className="single-item-icon">
                      <i className="ion ion-md-contacts" />
                    </div>
                    <h2>24/7 Help Center</h2>
                    <p>
                      Round-the-clock assistance for a smooth shopping
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Site-Priorities /- */}
      </Layout>
    </>
  );
}

