import {
  faAngleDown,
  faCartPlus,
  faEnvelope,
  faHeart,
  faHome,
  faSearch,
  faTh,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Layout from "../components/layout";

export default function Shop(props) {

  return (
    <>
      <Head>
        <title>
          Groover - Online Shopping for Electronics, Apparel, Computers, Books,
          DVDs & more
        </title>
      </Head>
      <Layout shop>
        {
          <>
            {/* Page Introduction Wrapper */}
            <div className="page-style-a">
              <div className="container">
                <div className="page-intro">
                  <h2>Shop</h2>
                  <ul className="bread-crumb">
                    <li className="has-separator">
                      {/* <i className="ion ion-md-home" /> */}
                      <i>
                        <FontAwesomeIcon icon={faHome} />
                      </i>
                      <a href="home.html">Home</a>
                    </li>
                    <li className="is-marked">
                      <a href="shop-v1-root-category.html">Shop</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Page Introduction Wrapper /- */}
            {/* Shop-Page */}
            <div className="page-shop u-s-p-t-80">
              <div className="container">
                {/* Shop-Intro */}
                <div className="shop-intro">
                  <h3>Men's Clothing</h3>
                </div>
                {/* Shop-Intro /- */}
                <div className="row">
                  {/* Shop-Left-Side-Bar-Wrapper */}
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    {/* Fetch-Categories-from-Root-Category  */}
                    <div className="fetch-categories">
                      <h3 className="title-name">Browse Categories</h3>
                      {/* Level-2 */}
                      <h3 className="fetch-mark-category">
                        <a href="shop-v2-sub-category.html">
                          Tops
                          <span className="total-fetch-items">(5)</span>
                        </a>
                      </h3>
                      {/* Level-2 /- */}
                      {/* Level-3 */}
                      <ul>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            T-Shirts
                            <span className="total-fetch-items">(2)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Hoodies
                            <span className="total-fetch-items">(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Suits
                            <span className="total-fetch-items">(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v4-filter-as-category.html">
                            Black Bean T-Shirt
                            <span className="total-fetch-items">(1)</span>
                          </a>
                        </li>
                      </ul>
                      {/* Level-3 /- */}
                      {/* Level-2 */}
                      <h3 className="fetch-mark-category">
                        <a href="shop-v2-sub-category.html">
                          Outwear
                          <span className="total-fetch-items">(3)</span>
                        </a>
                      </h3>
                      {/* Level-2 /- */}
                      {/* Level-3 */}
                      <ul>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Jackets
                            <span className="total-fetch-items">(3)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Trench
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Parkas
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Sweaters
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                      </ul>
                      {/* Level-3 /- */}
                      {/* Level-2 */}
                      <h3 className="fetch-mark-category">
                        <a href="shop-v2-sub-category.html">
                          Accessories
                          <span className="total-fetch-items">(1)</span>
                        </a>
                      </h3>
                      {/* Level-2 /- */}
                      {/* Level-3 */}
                      <ul>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Watches
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v2-sub-category.html">
                            Ties
                            <span className="total-fetch-items">(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Scarves
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Belts
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                      </ul>
                      {/* Level-3 /- */}
                      {/* Level-2 */}
                      <h3 className="fetch-mark-category">
                        <a href="shop-v2-sub-category.html">
                          Bottoms
                          <span className="total-fetch-items">(2)</span>
                        </a>
                      </h3>
                      {/* Level-2 /- */}
                      {/* Level-3 */}
                      <ul>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Casual Pants
                            <span className="total-fetch-items">(2)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Shoes
                            <span className="total-fetch-items">(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Jeans
                            <span className="total-fetch-items">(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Shorts
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                      </ul>
                      {/* Level-3 /- */}
                      {/* Level-2 */}
                      <h3 className="fetch-mark-category">
                        <a href="shop-v2-sub-category.html">
                          Underwear
                          <span className="total-fetch-items">(0)</span>
                        </a>
                      </h3>
                      {/* Level-2 /- */}
                      {/* Level-3 */}
                      <ul>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Boxers
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Briefs
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Robes
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Socks
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                      </ul>
                      {/* Level-3 /- */}
                      {/* Level-2 */}
                      <h3 className="fetch-mark-category">
                        <a href="shop-v2-sub-category.html">
                          Sunglasses
                          <span className="total-fetch-items">(2)</span>
                        </a>
                      </h3>
                      {/* Level-2 /- */}
                      {/* Level-3 */}
                      <ul>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Pilot
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Wayfarer
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Square
                            <span className="total-fetch-items">(0)</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-v3-sub-sub-category.html">
                            Round
                            <span className="total-fetch-items">(2)</span>
                          </a>
                        </li>
                      </ul>
                      {/* Level-3 /- */}
                    </div>
                    {/* Fetch-Categories-from-Root-Category  /- */}
                  </div>
                  {/* Shop-Left-Side-Bar-Wrapper /- */}
                  {/* Shop-Right-Wrapper */}
                  <div className="col-lg-9 col-md-9 col-sm-12">
                    {/* Page-Bar */}
                    <div className="page-bar clearfix">
                      <div className="shop-settings">
                        {/* <a id="list-anchor" className="active"> */}
                        <a id="list-anchor" className="active">
                          {/* <i className="fas fa-th-list" /> */}
                          <i>
                            <FontAwesomeIcon icon={faThList} />
                          </i>
                        </a>
                        <a id="grid-anchor">
                          {/* <i className="fas fa-th" /> */}
                          <i>
                            <FontAwesomeIcon icon={faTh} />
                          </i>
                        </a>
                      </div>
                      {/* Toolbar Sorter 1  */}
                      <div className="toolbar-sorter">
                        <div className="select-box-wrapper">
                          <label className="sr-only" htmlFor="sort-by">
                            Sort By
                          </label>
                          <select className="select-box" id="sort-by">
                            <option value="">Sort By: Best Selling</option>
                            <option value="">Sort By: Latest</option>
                            <option value="">Sort By: Lowest Price</option>
                            <option value="">Sort By: Highest Price</option>
                            <option value="">Sort By: Best Rating</option>
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
                      {/* //end Toolbar Sorter 1  */}
                      {/* Toolbar Sorter 2  */}
                      <div className="toolbar-sorter-2">
                        <div className="select-box-wrapper">
                          <label className="sr-only" htmlFor="show-records">
                            Show Records Per Page
                          </label>
                          <select className="select-box" id="show-records">
                            <option value="">Show: 8</option>
                            <option value="">Show: 16</option>
                            <option value="">Show: 28</option>
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
                      {/* //end Toolbar Sorter 2  */}
                    </div>
                    {/* Page-Bar /- */}
                    {/* Row-of-Product-Container */}
                    <div className="row product-container list-style">
                      {props.data.page.map(function (d) {
                        return (
                          <div className="product-item col-lg-4 col-md-6 col-sm-6">
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
                                    <FontAwesomeIcon icon={faSearch} />
                                  </a>
                                  <a className="item-mail" href="">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                  </a>
                                  <a className="item-addwishlist" href="">
                                    <FontAwesomeIcon icon={faHeart} />
                                  </a>
                                  <a className="item-addCart" href="">
                                    <FontAwesomeIcon icon={faCartPlus} />
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
                                      {d.name}
                                    </a>
                                  </h6>
                                  <div className="item-description">
                                    <p>
                                      This hoodie is full cotton. It includes a muff
                                      sewn onto the lower front, and (usually) a
                                      drawstring to adjust the hood opening. Throughout
                                      the U.S., it is common for middle-school,
                                      high-school, and college students to wear this
                                      sweatshirts—with or without hoods—that display
                                      their respective school names or mascots across
                                      the chest, either as part of a uniform or personal
                                      preference.
                                    </p>
                                  </div>
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
                              <div className="tag new">
                                <span>NEW</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    {/* Row-of-Product-Container /- */}
                  </div>
                  {/* Shop-Right-Wrapper /- */}
                  {/* Shop-Pagination */}
                  <div className="pagination-area">
                    <div className="pagination-number">
                      <ul>
                        {Array.apply(null, { length: props.data.totalPage }).map(Number.call, Number).map(item => {
                          return (
                            <li className={props.currentPage == (item + 1) ? "active" : ""}>
                              <a href={"shop?page=" + (item + 1)}>{(item + 1)}</a>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  {/* Shop-Pagination /- */}
                </div>
              </div>
            </div>
            {/* Shop-Page /- */}
          </>
        }
      </Layout>
    </>
  );

}


export async function getServerSideProps({ query }) {
  try {
    const page = query.page == null ? 1 : query.page;
    const res = await fetch(`http://localhost:4000/api/product/loadAll?page=${page - 1}`);
    const data = await res.json()
    if (data.page != null) {
      return {
        props: {
          data: data,
          currentPage: page
        }
      }
    }
  } catch (error) { }
  return {
    redirect: {
      permanent: false,
      destination: "/500"
    }
  }

}