import instance from "../../helpers/axiosConfig";
import { useState, useEffect } from "react";
export default function Review({ listReview, listReviewReply, setListReview, idSingleProductPage }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    useEffect(() => {
        setStart((currentPage - 1) * 5);
        setEnd(currentPage * 5);
    }, [currentPage])

    ///
    const avarageRating = () => {
        let avarage = 0;
        listReview.forEach(element => {
            avarage += element.rateStar;
        });
        if (listReview.length == 0) {
            return avarage;
        }
        return (avarage / listReview.length).toFixed(1);
    }

    const totalReview = () => {
        return listReview.length;
    }

    const countStars = (stars) => {
        let count = 0;
        listReview.forEach(element => {
            if (stars == element.rateStar) {
                count++;
            }
        })
        return count;
    }

    const getStarsByWidth = (stars) => {
        let result = 0;
        switch (stars) {
            case 1:
                result = 15;
                break;
            case 2:
                result = 30;
                break;
            case 3:
                result = 44;
                break;
            case 4:
                result = 60;
                break;
            case 5:
                result = 74;
                break;
            default:
                break;
        }
        return result;
    }

    const onSubmitReview = async () => {
        let content = document.getElementById('review-text-area').value;
        let rateStar = document.getElementById('your-rating-value').value;
        if (content != "") {
            let obj = { idSingleProductPage: idSingleProductPage, likeCount: 1, rateStar: parseInt(rateStar), content: content }
            const res = await instance().post('https://localhost:4000/api/evaluate/onSubmitReview', obj)
                .catch((err) => {
                    if (err.response.status == 401) {
                        alert('Bạn phải đăng nhập để sử dụng chức năng này');
                    }
                })
            if (res) {
                setListReview(res.data);
            }
        } else {
            alert('Trường content không được để trống');
        }
    }


    //page
    const getPagePagination = () => {
        const reviewPerPage = 5;
        const result = [];
        let length = 0;
        if (listReview.length % 5 == 0) {
            length = Math.floor(listReview.length / reviewPerPage);
        } else {
            length = Math.floor(listReview.length / reviewPerPage) + 1;
        }

        for (let i = 1; i <= length; i++) {
            result.push(i);
        }

        return result;
    }

    const changePage = (page) => {
        setCurrentPage(page);
    }

    //review reply



    return (
        <>
            {/* Reviews-Tab */}
            <div className="tab-pane fade" id="review">
                <div className="review-whole-container">
                    <div className="row r-1 u-s-m-b-26 u-s-p-b-22">
                        <div className="col-lg-6 col-md-6">
                            <div className="total-score-wrapper">
                                <h6 className="review-h6">Average Rating</h6>
                                <div className="circle-wrapper">
                                    <h1>{avarageRating()}</h1>
                                </div>
                                <h6 className="review-h6">Based on {totalReview()} Reviews</h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="total-star-meter">
                                <div className="star-wrapper">
                                    <span>5 Stars</span>
                                    <div className="star">
                                        <span style={{ width: 74 }} />
                                    </div>
                                    <span>({countStars(5)})</span>
                                </div>
                                <div className="star-wrapper">
                                    <span>4 Stars</span>
                                    <div className="star">
                                        <span style={{ width: 60 }} />
                                    </div>
                                    <span>({countStars(4)})</span>
                                </div>
                                <div className="star-wrapper">
                                    <span>3 Stars</span>
                                    <div className="star">
                                        <span style={{ width: 44 }} />
                                    </div>
                                    <span>({countStars(3)})</span>
                                </div>
                                <div className="star-wrapper">
                                    <span>2 Stars</span>
                                    <div className="star">
                                        <span style={{ width: 30 }} />
                                    </div>
                                    <span>({countStars(2)})</span>
                                </div>
                                <div className="star-wrapper">
                                    <span>1 Star</span>
                                    <div className="star">
                                        <span style={{ width: 15 }} />
                                    </div>
                                    <span>({countStars(1)})</span>
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
                                        <span id="your-stars" style={{ width: 15 }} />
                                    </div>
                                    <label htmlFor="your-rating-value" />
                                    <input
                                        id="your-rating-value"
                                        type="text"
                                        className="text-field"
                                        defaultValue={1}
                                    />
                                    <span id="star-comment" />
                                </div>
                                <div>
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
                                    <button onClick={() => { onSubmitReview() }} className="button button-outline-secondary">
                                        Submit Review
                                    </button>
                                </div>
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
                                    <span> ({totalReview()}) </span>
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
                            {
                                listReview.slice(start, end).map((element) => {
                                    return (
                                        <div key={element.idEvaluate}>
                                            <div className="review-data">
                                                <div className="reviewer-name-and-date">
                                                    <h6 className="reviewer-name">{element.nameCustomer}</h6>
                                                    <h6 className="review-posted-date">
                                                        {element.dateCreate}
                                                    </h6>
                                                </div>
                                                <div className="reviewer-stars-title-body">
                                                    <div className="reviewer-stars">
                                                        <div className="star">
                                                            <span style={{ width: getStarsByWidth(element.rateStar) }} />
                                                        </div>
                                                        <span className="review-title" style={{ fontWeight: 400 }}></span>
                                                    </div>
                                                    <p className="review-body">{element.content}</p>
                                                </div>
                                            </div>
                                            {listReviewReply.map((ele) => {
                                                if (ele.idEvaluate == element.idEvaluate) {
                                                    return (
                                                        <div key={ele.idEvaluateReply}>
                                                            <div style={{ marginTop: "0.75rem", backgroundColor: "#f5f5f5", padding: "0.875rem 0.75rem", position: "relative", fontSize: "14px" }}>
                                                                <p style={{ color: "#8b572a", textTransform: "capitalize" }}>Phản hồi của người bán</p>
                                                                <div style={{ color: "rgba(0,0,0,.87)", whiteSpace: "pre-wrap", marginTop: "0.625rem", wordBreak: "break-word" }}>
                                                                    {ele.content}
                                                                </div>
                                                            </div>
                                                            <br></br>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* All-Reviews /- */}
                        {/* Pagination-Review */}
                        <div className="pagination-review-area">
                            <div className="pagination-review-number">
                                <ul>
                                    {/* <li style={{ display: "none" }}>
                                        <a
                                            href="single-product.html"
                                            title="Previous"
                                        >
                                            <i className="fas fa-angle-left" />
                                        </a>
                                    </li> */}
                                    {
                                        getPagePagination().map((element) => {
                                            return (
                                                <li onClick={() => { changePage(element) }} key={element} className={element == currentPage ? 'active' : ''}>
                                                    <a>{element}</a>
                                                </li>
                                            )
                                        })
                                    }
                                    {/* <li>
                                        <a href="single-product.html" title="Next">
                                            <i className="fas fa-angle-right" />
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        {/* Pagination-Review /- */}
                    </div>
                    {/* Get-Reviews /- */}
                </div>
            </div>
            {/* Reviews-Tab /- */}
        </>
    )
}