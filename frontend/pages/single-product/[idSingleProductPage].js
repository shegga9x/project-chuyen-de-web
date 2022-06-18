import {
  faEnvelope,
  faHeart,
  faHome,
  faMagnifyingGlass,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import instance from "../../helpers/axiosConfig";
import useTrans from "../../helpers/customHook/useTrans";
import { useState, useRef } from 'react';
import axios from "axios";
import { changeRoute } from "../../helpers/customFunction/changeRoute";

export default function SingleProduct({ data }) {

  const router = useRouter();
  const trans = useTrans();


  //use State
  const [product, setProduct] = useState(null);

  const [updateCartHeader, setUpdateCartHeader] = useState(0);

  //use Ref
  const errDiv = useRef();
  const productQuantity = useRef();


  const checkAddToCart = async () => {
    if (product != null) {
      const req = await instance.post(`http://localhost:4000/api/cart/addToCart`, { product, quantity: productQuantity.current.value }).catch(() => { alert("không thể thêm vào cart") });
      if (req) {
        errDiv.current.style.display = "none"
        setUpdateCartHeader(updateCartHeader + 1);
      }
    } else {
      errDiv.current.style.display = "block"
    }
  }

  if (router.isFallback) {
    return <h1>Loading..</h1>;
  }
  // return <h1>{JSON.stringify(data)}</h1>

  return (
    <>
      <Head>
        <title>
          Groover - Online Shopping for Electronics, Apparel, Computers, Books,
          DVDs & more
        </title>
      </Head>
      <Layout shop updateCartHeader={updateCartHeader}>
        {/* Page Introduction Wrapper */}
        <div className="page-style-a">
          <div className="container">
            <div className="page-intro">
              <h2>{trans.header.detail}</h2>
              <ul className="bread-crumb">
                <li className="has-separator">
                  <i>
                    <FontAwesomeIcon icon={faHome} />
                  </i>
                  <a href="home.html">{trans.header.home}</a>
                </li>
                <li className="is-marked">
                  <a href="single-product.html">{trans.header.detail}</a>
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
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <a style={{ color: "red" }} onClick={() => { changeRoute("/shop", router) }}>Shop</a>
              <span style={{ marginLeft: "3px", marginRight: "3px" }}>{">"}</span>
              {data.listCategory.map((ele, i) => {
                const url = `/shop?page=1&size=8&catagory=${ele.idCategory}`;
                return (<div key={i + "map1"}>
                  <a style={{ color: "red" }} onClick={() => { changeRoute(url, router) }}>{ele.name}</a>
                  <span style={{ marginLeft: "3px", marginRight: "3px" }}>{">"}</span>
                </div>)
              })}
              <span>{data.singleProductPage.name}</span>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                {/* Product-zoom-area */}
                <div className="zoom-area">
                  <img
                    id="zoom-pro"
                    className="img-fluid"
                    src="/static/images/product/product@4x.jpg"
                    data-zoom-image="/static/images/product/product@4x.jpg"
                    alt="Zoom Image"
                  />
                  <div id="gallery" className="u-s-m-t-10">
                    <a
                      className="active"
                      data-image="/static/images/product/product@4x.jpg"
                      data-zoom-image="/static/images/product/product@4x.jpg"
                    >
                      <img
                        src="/static/images/product/product@2x.jpg"
                        alt="Product"
                      />
                    </a>
                    <a
                      data-image="/static/images/product/product@4x.jpg"
                      data-zoom-image="/static/images/product/product@4x.jpg"
                    >
                      <img
                        src="/static/images/product/product@2x.jpg"
                        alt="Product"
                      />
                    </a>
                    <a
                      data-image="/static/images/product/product@4x.jpg"
                      data-zoom-image="/static/images/product/product@4x.jpg"
                    >
                      <img
                        src="/static/images/product/product@2x.jpg"
                        alt="Product"
                      />
                    </a>
                    <a
                      data-image="/static/images/product/product@4x.jpg"
                      data-zoom-image="/static/images/product/product@4x.jpg"
                    >
                      <img
                        src="/static/images/product/product@2x.jpg"
                        alt="Product"
                      />
                    </a>
                    <a
                      data-image="/static/images/product/product@4x.jpg"
                      data-zoom-image="/static/images/product/product@4x.jpg"
                    >
                      <img
                        src="/static/images/product/product@2x.jpg"
                        alt="Product"
                      />
                    </a>
                    <a
                      data-image="/static/images/product/product@4x.jpg"
                      data-zoom-image="/static/images/product/product@4x.jpg"
                    >
                      <img
                        src="/static/images/product/product@2x.jpg"
                        alt="Product"
                      />
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
                          {data.singleProductPage.name}
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
                      {trans.detail.description}:
                    </h6>
                    <p>{data.singleProductPage.description}</p>
                  </div>
                  <div className="section-3-price-original-discount u-s-p-y-14">
                    <div className="price">
                      <h4>$ {product == null ? data.singleProductPage.priceRange : product.price}</h4>
                    </div>
                    {/* <div className="original-price">
                      <span>{trans.detail.price}:</span>
                      <span>$60.00</span>
                    </div>
                    <div className="discount-price">
                      <span>{trans.detail.discount}:</span>
                      <span>8%</span>
                    </div>
                    <div className="total-save">
                      <span>{trans.detail.save}:</span>
                      <span>$5</span>
                    </div> */}
                  </div>
                  <div className="section-4-sku-information u-s-p-y-14">
                    <h6 className="information-heading u-s-m-b-8">
                      {trans.detail.information}:
                    </h6>
                    <div className="left">
                      <span>{trans.detail.availability}:</span>
                      <span>{product == null ? data.singleProductPage.totalQuantity : product.quantity} </span>
                    </div>
                    <div className="left">
                      <span>{trans.detail.sold}:</span>
                      <span>{data.singleProductPage.totalSoldCount}</span>
                    </div>
                  </div>
                  <div className="section-5-product-variants u-s-p-y-14">
                    <h6 className="information-heading u-s-m-b-8">
                      {trans.detail.variants}:
                    </h6>
                    <div style={{ display: "flex", rowGap: "5px", "flexWrap": "wrap" }}>
                      {/* <button>
                        áo xanh
                      </button> */}
                      {data.listProduct.map((element, index) => {
                        return (<button className="button button-outline-secondary u-s-m-l-6" style={product === element ? { backgroundColor: "gainsboro", borderRadius: "0px" } : { borderRadius: "0px" }} key={index}
                          onClick={() => {
                            if (element === product) {
                              setProduct(null);
                            } else {
                              setProduct(element);
                            }
                          }}>
                          {element.name}
                        </button>);
                      })}
                    </div>
                    {/* <div className="color u-s-m-b-11">
                      <span>{trans.detail.color}:</span>
                      <div className="color-variant select-box-wrapper">
                        <select className="select-box product-color">
                          <option value={1}>Heather Grey</option>
                          <option value={3}>Black</option>
                          <option value={5}>White</option>
                        </select>
                        <i
                          style={{
                            fontSize: 8,
                            position: "absolute",
                            right: 8,
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleDown} />
                        </i>
                      </div>
                    </div>
                    <div className="sizes u-s-m-b-11">
                      <span>{trans.detail.size}:</span>
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
                        <i
                          style={{
                            fontSize: 8,
                            position: "absolute",
                            right: 8,
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleDown} />
                        </i>
                      </div>
                    </div> */}
                  </div>
                  <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                    {/* <div className="quick-social-media-wrapper u-s-m-b-22">
                      <span>{trans.detail.share}:</span>
                      <ul className="social-media-list">
                        <li>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={faFacebookF} />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={faTwitter} />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={faGooglePlusG} />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={faRss} />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i>
                              <FontAwesomeIcon icon={faPinterest} />
                            </i>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <div className="quantity-wrapper u-s-m-b-22">
                      <span>{trans.detail.quantity}:</span>
                      <div className="quantity">
                        <input
                          ref={productQuantity}
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
                    <div ref={errDiv} style={{ display: "none" }}>
                      <p style={{ color: "red" }}>Vui lòng chọn loại sản phẩm</p>
                    </div>
                    <div>
                      <button
                        className="button button-outline-secondary"
                        onClick={checkAddToCart}
                      >
                        {trans.detail.addToCart}
                      </button>
                      <button className="button button-outline-secondary  u-s-m-l-6">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <button className="button button-outline-secondary u-s-m-l-6">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product-details /- */}
              </div>
            </div>
            {/* Product-Detail /- */}
            {/* Detail-Tabs */}
            <div>
              <h1>Phải làm thằng này (Người bán)</h1>
            </div>
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
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#review"
                        >
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
                          This hoodie is full cotton. It includes a muff sewn
                          onto the lower front, and (usually) a drawstring to
                          adjust the hood opening. Throughout the U.S., it is
                          common for middle-school, high-school, and college
                          students to wear this sweatshirts—with or without
                          hoods—that display their respective school names or
                          mascots across the chest, either as part of a uniform
                          or personal preference.
                        </p>
                        {/* <img
                          className="desc-img img-fluid u-s-m-b-26"
                          src="/static/images/product/product@3x.jpg"
                          alt="Product"
                        />
                        <iframe
                          className="desc-iframe u-s-m-b-45"
                          width={710}
                          height={400}
                          src="/static/images/product/iframe-youtube.jpg"
                          allowFullScreen=""
                        /> */}
                      </div>
                    </div>
                    {/* Description-Tab /- */}
                    {/* Specifications-Tab */}
                    <div className="tab-pane fade" id="specification">
                      <div className="specification-whole-container">
                        {/* <div className="spec-ul u-s-m-b-50">
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
                        </div> */}
                        <div className="spec-table u-s-m-b-50">
                          <h4 className="spec-heading">Product Information</h4>
                          <table>
                            <tbody>
                              <tr>
                                <td>Danh mục</td>
                                <td> <div style={{ display: "flex", marginBottom: "5px" }}>
                                  <a style={{ color: "red" }} onClick={() => { changeRoute("/shop", router) }}>Shop</a>
                                  <span style={{ marginLeft: "3px", marginRight: "3px" }}>{">"}</span>
                                  {data.listCategory.map((ele, i, arr) => {
                                    const url = `/shop?page=1&size=8&catagory=${ele.idCategory}`;
                                    return (<div key={i + "map2"}>
                                      <a style={{ color: "red" }} onClick={() => { changeRoute(url, router) }}>{ele.name}</a>
                                      <span style={arr.length - 1 !== i ? { marginLeft: "3px", marginRight: "3px" } : { display: "none" }}>{">"}</span>
                                    </div>)
                                  })}
                                </div></td>
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
                              <h6 className="review-h6">
                                Your Review is matter.
                              </h6>
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
                                <label
                                  className="sr-only"
                                  htmlFor="review-sort"
                                >
                                  Review Sorter
                                </label>
                                <select className="select-box" id="review-sort">
                                  <option value="">Sort by: Best Rating</option>
                                  <option value="">
                                    Sort by: Worst Rating
                                  </option>
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
                                <h6 className="review-posted-date">
                                  10 May 2018
                                </h6>
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
                                <h6 className="review-posted-date">
                                  10 June 2018
                                </h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{ width: 67 }} />
                                  </div>
                                  <span className="review-title">
                                    Well done!
                                  </span>
                                </div>
                                <p className="review-body">Cotton is good.</p>
                              </div>
                            </div>
                            <div className="review-data">
                              <div className="reviewer-name-and-date">
                                <h6 className="reviewer-name">Tim</h6>
                                <h6 className="review-posted-date">
                                  10 July 2018
                                </h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{ width: 67 }} />
                                  </div>
                                  <span className="review-title">
                                    Well done!
                                  </span>
                                </div>
                                <p className="review-body">
                                  Excellent condition
                                </p>
                              </div>
                            </div>
                            <div className="review-data">
                              <div className="reviewer-name-and-date">
                                <h6 className="reviewer-name">Johnny</h6>
                                <h6 className="review-posted-date">
                                  10 March 2018
                                </h6>
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
                                <h6 className="reviewer-name">
                                  Alexia C. Marshall
                                </h6>
                                <h6 className="review-posted-date">
                                  12 May 2018
                                </h6>
                              </div>
                              <div className="reviewer-stars-title-body">
                                <div className="reviewer-stars">
                                  <div className="star">
                                    <span style={{ width: 67 }} />
                                  </div>
                                  <span className="review-title">
                                    Well done!
                                  </span>
                                </div>
                                <p className="review-body">
                                  Good polyester Cotton
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* All-Reviews /- */}
                          {/* Pagination-Review */}
                          <div className="pagination-review-area">
                            <div className="pagination-review-number">
                              <ul>
                                <li style={{ display: "none" }}>
                                  <a
                                    href="single-product.html"
                                    title="Previous"
                                  >
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
                            <a className="item-addCart" onClick={() => { setCart("update") }}>
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
                                <a href="shop-v3-sub-sub-category.html">
                                  Jackets
                                </a>
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
                                <a href="shop-v2-sub-category.html">
                                  Sunglasses
                                </a>
                              </li>
                              <li>
                                <a href="shop-v3-sub-sub-category.html">
                                  Round
                                </a>
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
                                <a href="shop-v2-sub-category.html">
                                  Sunglasses
                                </a>
                              </li>
                              <li>
                                <a href="shop-v3-sub-sub-category.html">
                                  Round
                                </a>
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
                                <a href="shop-v3-sub-sub-category.html">
                                  Jackets
                                </a>
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
      </Layout>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];
  const res = await instance.get(
    `http://localhost:4000/api/product/loadAllSingleProductPage`
  );
  if (res != undefined) {
    const listSingleProductPagesID = res.data;
    listSingleProductPagesID.forEach((element) => {
      paths.push(
        { params: { idSingleProductPage: element }, locale: 'en' },
        { params: { idSingleProductPage: element }, locale: 'vi' });
    });
  }
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await instance.get(
    `http://localhost:4000/api/product/getSingleProductPagePerPage/${params.idSingleProductPage}`
  );
  if (res != undefined) {
    let res1 = null;
    let res2 = null;
    await axios.all([
      instance.get(
        `http://localhost:4000/api/product/getListProductBySingleProductPage`,
        { params: { idSingleProduct: res.data.idSingleProductPage } }),
      instance.get(`http://localhost:4000/api/product/getListCategoryBySingleProductPage`,
        { params: { idCategory: res.data.idCategory } })
    ])
      .then(axios.spread((data1, data2) => {
        // output of req.
        res1 = data1;
        res2 = data2;
      }))
    if (res2 != null && res1 != null) {
      return {
        props: {
          data: {
            singleProductPage: res.data,
            listProduct: res1.data,
            listCategory: res2.data
          },
        },
      };
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: "/404",
    },
  };
}
