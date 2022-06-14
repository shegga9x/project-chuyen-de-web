import {
  faFacebookF,
  faGooglePlusG,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faEnvelope,
  faHeart,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTrans from "../../helpers/customHook/useTrans";

export default function QuickViewModal() {

  const trans = useTrans();

  return (
    <>
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
                      src="/static/images/product/product@4x.jpg"
                      data-zoom-image="/static/images/product/product@4x.jpg"
                      alt="Zoom Image"
                    />
                    <div id="gallery-quick-view" className="u-s-m-t-10">
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
                            Casual Hoodie Full Cotton
                          </a>
                        </h1>
                      </div>
                      <ul className="bread-crumb">
                        <li className="has-separator">
                          <a href="home.html">Home</a>
                        </li>
                        <li className="has-separator">
                          <a href="shop-v1-root-category.html">
                            Men's Clothing
                          </a>
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
                      <p>
                        This hoodie is full cotton. It includes a muff sewn onto
                        the lower front, and (usually) a drawstring to adjust
                        the hood opening. Throughout the U.S., it is common for
                        middle-school, high-school, and college students to wear
                        this sweatshirts—with or without hoods—that display
                        their respective school names or mascots across the
                        chest, either as part of a uniform or personal
                        preference.
                      </p>
                    </div>
                    <div className="section-3-price-original-discount u-s-p-y-14">
                      <div className="price">
                        <h4>$55.00</h4>
                      </div>
                      <div className="original-price">
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
                      </div>
                    </div>
                    <div className="section-4-sku-information u-s-p-y-14">
                      <h6 className="information-heading u-s-m-b-8">
                        Sku {trans.detail.information}:
                      </h6>
                      <div className="availability">
                        <span>{trans.detail.availability}:</span>
                        <span>In Stock</span>
                      </div>
                      <div className="left">
                        <span>{trans.detail.only}:</span>
                        <span>50 left</span>
                      </div>
                    </div>
                    <div className="section-5-product-variants u-s-p-y-14">
                      <h6 className="information-heading u-s-m-b-8">
                        {trans.detail.variants}:
                      </h6>
                      <div className="color u-s-m-b-11">
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
                      </div>
                    </div>
                    <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                      <form action="#" className="post-form">
                        <div className="quick-social-media-wrapper u-s-m-b-22">
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
                        </div>
                        <div className="quantity-wrapper u-s-m-b-22">
                          <span>{trans.detail.quantity}:</span>
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
                            {trans.detail.addToCart}
                          </button>
                          <button className="button button-outline-secondary  u-s-m-l-6">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          <button className="button button-outline-secondary u-s-m-l-6">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </button>
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
    </>
  );
}
