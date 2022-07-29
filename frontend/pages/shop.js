import {
  faAngleDown, faCartPlus, faCheckSquare, faChevronDown, faChevronRight,
  faEnvelope, faHeart, faHome, faMinusSquare, faPlusSquare, faSearch, faSquare, faTh, faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import Layout from "../components/layout";
import { changeRoute } from "../helpers/customFunction/changeRoute";
import "../node_modules/react-checkbox-tree/lib/react-checkbox-tree.css";
import InstanceAxios from "../helpers/axiosConfig"

export default function Shop(props) {
  const [checked, setChecked] = useState(props.catagory);
  const [expanded, setExpanded] = useState([]);
  const router = useRouter();
  function handleChange(event) {
    event.preventDefault();
    router.push(event.target.value);
  }
  function handleChangeCategories(url) {
    router.push(url);
  }
  function generateURL(page, size, cagetoryCheck, sorter) {
    return "shop?page=" + page
      + "&size=" + size
      + (cagetoryCheck.length != 0 ? "&catagory=" + cagetoryCheck.toString() : "")
      + (sorter ? "&sorter=" + sorter : "")
  }
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
                      <i> <FontAwesomeIcon icon={faHome} /> </i>
                      <a href="home.html">Home</a>
                    </li>
                    <li className="is-marked"> <a href="shop-v1-root-category.html">Shop</a> </li>
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
                    <h3 className="title-name">Browse Categories</h3>
                    <CheckboxTree nodes={props.nodes} icons={{
                      check: <FontAwesomeIcon icon={faCheckSquare} />,
                      uncheck: <FontAwesomeIcon icon={faSquare} />,
                      halfCheck: <FontAwesomeIcon icon={faMinusSquare} />,
                      expandClose: <FontAwesomeIcon icon={faChevronRight} />,
                      expandOpen: <FontAwesomeIcon icon={faChevronDown} />,
                      expandAll: <FontAwesomeIcon icon={faPlusSquare} />,
                      collapseAll: <FontAwesomeIcon icon={faMinusSquare} />,
                      parentClose: null, parentOpen: null, leaf: null,
                    }} checked={checked} expanded={expanded} onCheck={(checked) => {
                      {
                        setChecked(checked);
                        handleChangeCategories(generateURL(props.currentPage, props.currentSize, checked, props.sorter));
                      }
                    }}
                      onExpand={(expanded) => { setExpanded(expanded); }}
                    />
                    {/* Fetch-Categories-from-Root-Category /- */}
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
                          <i> <FontAwesomeIcon icon={faThList} /> </i>
                        </a>
                        <a id="grid-anchor">
                          {/* <i className="fas fa-th" /> */}
                          <i> <FontAwesomeIcon icon={faTh} /> </i>
                        </a>
                      </div>
                      {/* Toolbar Sorter 1 */}
                      <div className="toolbar-sorter">
                        <div className="select-box-wrapper">
                          <label className="sr-only" htmlFor="sort-by">
                            Sort By
                          </label>
                          <select className="select-box" id="sort-by" onChange={(event) => handleChange(event)}>
                            <option value={generateURL(props.currentPage, props.currentSize, checked, 1)}
                              defaultValue={props.sorter == 1 ? true : false}>
                              Sort By: Best Selling
                            </option>
                            <option value={generateURL(props.currentPage, props.currentSize, checked, 2)}
                              defaultValue={props.sorter == 2 ? true : false}>
                              Sort By: Latest
                            </option>
                            <option value={generateURL(props.currentPage, props.currentSize, checked, 3)}
                              defaultValue={props.sorter == 3 ? true : false}>
                              Sort By: Lowest Price
                            </option>
                            <option value={generateURL(props.currentPage, props.currentSize, checked, 4)}
                              defaultValue={props.sorter == 4 ? true : false}>
                              Sort By: Highest Price
                            </option>
                            <option value={generateURL(props.currentPage, props.currentSize, checked, 5)}
                              defaultValue={props.sorter == 5 ? true : false}>
                              Sort By: Best Rating
                            </option>
                          </select>
                          <i style={{ fontSize: 8, position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", }}>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </i>
                        </div>
                      </div>
                      {/* //end Toolbar Sorter 1 */}
                      {/* Toolbar Sorter 2 */}
                      <div className="toolbar-sorter-2">
                        <div className="select-box-wrapper">
                          <label className="sr-only" htmlFor="show-records">
                            Show Records Per Page
                          </label>
                          <select className="select-box" id="show-records" onChange={(event) => handleChange(event)}>
                            <option value={generateURL(props.currentPage, 8, checked, props.sorter)}
                              defaultValue={props.currentSize == 8 ? true : false}>
                              Show: 8
                            </option>
                            <option value={generateURL(props.currentPage, 16, checked, props.sorter)}
                              defaultValue={props.currentSize == 16 ? true : false}>
                              Show: 16
                            </option>
                            <option value={generateURL(props.currentPage, 28, checked, props.sorter)}
                              defaultValue={props.currentSize == 28 ? true : false}>
                              Show: 28
                            </option>
                          </select>
                          <i style={{ fontSize: 8, position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", }}> <FontAwesomeIcon icon={faAngleDown} /> </i>
                        </div>
                      </div>
                      {/* //end Toolbar Sorter 2 */}
                    </div>
                    {/* Page-Bar /- */}
                    {/* Row-of-Product-Container */}
                    <div className="row product-container list-style">
                      {props.data.page.map(function (d) {
                        return (
                          <div key={d.idSingleProductPage} className="product-item col-lg-4 col-md-6 col-sm-6">
                            <div className="item">
                              <div className="image-container">
                                <a className="item-img-wrapper-link" onClick={() => { changeRoute(`/single-product/${d.idSingleProductPage}`, router) }} >
                                  <img className="img-fluid" src={(d.imgURL == "" ? "/static/images/product/" + "product@3x.jpg" : d.imgURL)} alt="Product" />
                                </a>
                                <div className="item-action-behaviors">
                                  <a className="item-quick-look" data-toggle="modal" href="#quick-view"> <FontAwesomeIcon icon={faSearch} /> </a>
                                  <a className="item-mail" href=""> <FontAwesomeIcon icon={faEnvelope} /> </a>
                                  <a className="item-addwishlist" href=""> <FontAwesomeIcon icon={faHeart} /> </a>
                                  {/* <a className="item-addCart" href=""> <FontAwesomeIcon icon={faCartPlus} /> </a> */}
                                </div>
                              </div>
                              <div className="item-content">
                                <div className="what-product-is">
                                  <ul className="bread-crumb">
                                    <li className="has-separator">
                                      <a href="shop-v1-root-category.html"> Men's </a>
                                    </li>
                                    <li className="has-separator">
                                      <a href="shop-v2-sub-category.html"> Tops </a>
                                    </li>
                                    <li>
                                      <a href="shop-v3-sub-sub-category.html"> Hoodies </a>
                                    </li>
                                  </ul>
                                  <h6 className="item-title">
                                    <a onClick={() => { changeRoute(`/single-product/${d.idSingleProductPage}`, router) }}>{d.name}</a>
                                  </h6>
                                  <div className="item-description">
                                    <p>
                                      This hoodie is full cotton. It includes a
                                      muff sewn onto the lower front, and
                                      (usually) a drawstring to adjust the hood
                                      opening. Throughout the U.S., it is common
                                      for middle-school, high-school, and
                                      college students to wear this
                                      sweatshirts—with or without hoods—that
                                      display their respective school names or
                                      mascots across the chest, either as part
                                      of a uniform or personal preference.
                                    </p>
                                  </div>
                                  <div className="item-stars">
                                    <div className="star" title="4.5 out of 5 - based on 23 Reviews">
                                      <span style={{ width: 67 }} />
                                    </div>
                                    <span>(23)</span>
                                  </div>
                                </div>
                                <div className="price-template">
                                  <div className="item-new-price"> {d.priceRange} VNĐ </div>
                                  <div className="item-old-price"> {d.priceRange} VNĐ </div>
                                </div>
                              </div>
                              <div className="tag new">
                                <span>NEW</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Row-of-Product-Container /- */}
                  </div>
                  {/* Shop-Right-Wrapper /- */}
                  {/* Shop-Pagination */}
                  <div className="pagination-area">
                    <div className="pagination-number">
                      <ul>
                        {Array.apply(null, { length: props.data.totalPage }).map(Number.call, Number).map((item) => {
                          return (
                            <li key={item} className={props.currentPage == item + 1 ? "active" : ""}>
                              <a href={"shop?page=" + (item + 1) + " &size=" + props.currentSize} > {item + 1} </a>
                            </li>
                          );
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

export async function getServerSideProps(context) {
  try {
    const page = context.query.page == null ? 1 : context.query.page;
    const size = context.query.size == null ? 8 : context.query.size;
    const catagory = context.query.catagory == null ? "" : `&catagory=${context.query.catagory}`;
    const sorter = context.query.sorter == null ? "" : `&sorter=${context.query.sorter}`;
    const res = await InstanceAxios(context).get(`http://localhost:4000/api/product/loadAll?page=${page - 1}&size=${size}${catagory}${sorter}`)
    const res2 = await InstanceAxios(context).get(`http://localhost:4000/api/product/loadCagetory`)
    const data = await res.data; 
    const data3 = JSON.parse(JSON.stringify(res2.data).replaceAll(',"children":[]', ""));
    if (data.page != null) {
      return {
        props: {
          data: data,
          nodes: data3, currentPage: page,
          currentSize: size, sorter: context.query.sorter == null ? null : context.query.sorter,
          catagory: catagory ? catagory.split("=")[1].split(" ,") : [],
        },
      };
    }
  } catch (error) { console.log(error); }
  return {
    redirect:
      { permanent: false, destination: "/500", },
  };
} 