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
import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import { changeRoute } from "../../helpers/customFunction/changeRoute";
import Review from "../../components/single-product/review";

export default function SingleProduct({ data }) {

  const router = useRouter();
  const trans = useTrans();


  //use State
  const [product, setProduct] = useState(null);
  const [updateCartHeader, setUpdateCartHeader] = useState(0);
  const [listReview, setListReview] = useState([]);
  const [listReviewReply, setListReviewReply] = useState([]);

  //use Ref
  const errDiv = useRef();
  const productQuantity = useRef();

  useEffect(() => {
    const getReviewData = async () => {
      const res = await axios.get(`http://localhost:4000/api/product/getReviewByIdProduct`, { params: { idSingleProductPage: data.singleProductPage.idSingleProductPage } })
      if (res) {
        setListReview(res.data);
      }
    }

    const getReviewReplyData = async () => {
      const res = await axios.get(`http://localhost:4000/api/product/getListEvaluateReplyResponse`, { params: { idSingleProductPage: data.singleProductPage.idSingleProductPage } })
      if (res) {
        console.log(res.data)
        setListReviewReply(res.data);
      }
    }

    getReviewData().catch((err) => {
      console.log({ err });
    });

    getReviewReplyData().catch((err) => {
      console.log({ err });
    })
  }, []);


  const checkAddToCart = async () => {
    if (product != null) {
      document.getElementById("buttonAddToCart").disabled = true;
      const req = await instance().post(`http://localhost:4000/api/cart/addToCart`, { product, quantity: productQuantity.current.value })
        .catch((err) => {
          document.getElementById("buttonAddToCart").disabled = false;
          console.log({ err })
          if (err.message != "Network Error") {
            if (err.response.data.message) {
              alert(err.response.data.message);
            } else {
              alert('ban can dang nhap');
            }
          }
        });
      if (req) {
        document.getElementById("buttonAddToCart").disabled = false;
        errDiv.current.style.display = "none"
        setUpdateCartHeader(updateCartHeader + 1);
      }
    } else {
      errDiv.current.style.display = "block"
    }
  }

  const totalReview = () => {
    return listReview.length;
  }

  if (router.isFallback) {
    return <h1>Loading..</h1>;
  }

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
                <div className="zoom-area">
                  <img
                    id="zoom-pro"
                    className="img-fluid"
                    // src="/static/images/product/product@4x.jpg"
                    // src={data.listProduct[0].imgUrl}
                    src={product == null ? data.listProduct[0].imgUrl : product.imgUrl}
                    data-zoom-image={product == null ? data.listProduct[0].imgUrl : product.imgUrl}
                    alt="Zoom Image"
                    style={{ height: '500px', width: '500px' }}
                  />
                  <div id="gallery" className="u-s-m-t-10">
                    {data.listProduct.map((element, index) => {
                      return (
                        <a
                          className="active"
                          data-image={element.imgUrl}
                          data-zoom-image={element.imgUrl}
                          key={index}
                        >
                          <img
                            src={element.imgUrl}
                            alt="Product"
                          />
                        </a>
                      );
                    })}

                    {/* <a
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
                    </a> */}
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
                      <h4> {product == null ? data.singleProductPage.priceRange : product.price} VNĐ</h4>
                    </div>
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
                  </div>
                  <div className="section-6-social-media-quantity-actions u-s-p-y-14">
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
                      <button id="buttonAddToCart"
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
                          Reviews ({totalReview()})
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
                    <Review listReview={listReview} listReviewReply={listReviewReply} setListReview={setListReview} idSingleProductPage={data.singleProductPage.idSingleProductPage}></Review>
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

export async function getStaticPaths() {
  const paths = [];
  const res = await instance().get(
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
  const res = await instance().get(
    `http://localhost:4000/api/product/getSingleProductPagePerPage/${params.idSingleProductPage}`
  );
  if (res != undefined) {
    let res1 = null;
    let res2 = null;
    await axios.all([
      instance().get(
        `http://localhost:4000/api/product/getListProductBySingleProductPage`,
        { params: { idSingleProduct: res.data.idSingleProductPage } }),
      instance().get(`http://localhost:4000/api/product/getListCategoryBySingleProductPage`,
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
