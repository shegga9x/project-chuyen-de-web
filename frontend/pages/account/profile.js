import Layout from "../../components/layout"
import Head from "next/head";
import { useRouter } from 'next/router'
import AccountProfile from "../../components/account/accountProfile";
import AccountAddress from "../../components/account/accountAddress";
import AccountShopXu from "../../components/account/accountShopXu";
import AccountPayment from "../../components/account/accountPayment"

export default function Profile({ keyword }) {

    const router = useRouter()

    const changeRoute = (href) => {
        router.push(href, href, { locale: router.locale});
    }

    const childListOpen = (eleOrderNumber) => {
        const ele = document.getElementsByClassName('child_list')[eleOrderNumber];
        ele.classList.toggle('child_list_open');
    }

    return (
        <>
            <Head>
                <title>
                    Groover - Online Shopping for Electronics, Apparel, Computers, Books,
                    DVDs & more
                </title>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    ul {
                        list-style-type: none;
                        padding: 0;
                    }
            
                    li {
                        margin-bottom: 5px;
                    }

                    .child_list {
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .child_list_open{
                        max-height: 100px;
                    }

                    .child_list > ul .active {
                        color: #ee4d2d;
                    }
            
                    .child_list>ul>li {
                        cursor: pointer;
                    }
            
                    .child_list>ul>li:hover {
                        color: #ee4d2d;
                    }
            
                    a:hover {
                        text-decoration: none;
                    }
            
                    button:focus {
                        outline: none !important;
                    }
                ` }} />
            </Head>
            <Layout>
                <div style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="container" style={{ display: 'flex', padding: '20px 0px 20px 0px' }}>
                        <div className="left_container" style={{ width: '20%', paddingTop: '10px' }}>
                            <div className="left_container_image" style={{ display: 'flex', padding: '6px 0px 6px 0px' }}>
                                <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" width="55px" height="50px" />
                                <div style={{ marginLeft: '6px' }}>
                                    <div style={{ marginTop: '2px', fontWeight: 600 }}>emlama123456</div>
                                    <div style={{ fontSize: '13px' }}>
                                        <a href="#" style={{ color: '#888' }}>
                                            <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px', marginBottom: '3px' }}>
                                                <path d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48" fill="#9B9B9B" fillRule="evenodd" />
                                            </svg>Sửa Hồ Sơ
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="left_container_information">
                                <ul>
                                    <li>
                                        <div onClick={() => { childListOpen(0) }} >
                                            <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" width="15px" height="15px" />
                                            <span style={{ fontWeight: 600, marginLeft: '2px', cursor: 'pointer' }}>
                                                Tài khoản của tôi
                                            </span>
                                        </div>
                                        <div className="child_list child_list_open" style={{ paddingLeft: '24px', fontSize: '.875rem', color: 'rgba(0,0,0,.65)' }}>
                                            <ul>
                                                <li onClick={() => { changeRoute('/account/profile?keyword=profile') }} className={keyword == 'profile' ? 'active' : ''}>Hồ Sơ</li>
                                                <li onClick={() => { changeRoute('/account/profile?keyword=payment') }} className={keyword == 'payment' ? 'active' : ''}>Ngân Hàng</li>
                                                <li onClick={() => { changeRoute('/account/profile?keyword=address') }} className={keyword == 'address' ? 'active' : ''}>Địa Chỉ</li>
                                                <li>Đổi Mật Khẩu</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div onClick={() => { childListOpen(1) }}>
                                            <img src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784" width="15px" height="15px" />
                                            <span style={{ fontWeight: 600, marginLeft: '2px', cursor: 'pointer' }}>
                                                ShopVip Xu
                                            </span>
                                        </div>
                                        <div className="child_list child_list_open" style={{ paddingLeft: '24px', fontSize: '.875rem', color: 'rgba(0,0,0,.65)' }}>
                                            <ul>
                                                <li onClick={() => { changeRoute('/account/profile?keyword=shopXu') }} className={keyword == 'shopXu' ? 'active' : ''}>Ví Xu Của Bạn</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right_container" style={{ width: '80%', border: '1px solid gainsboro', borderRadius: '2px', backgroundColor: "#ffffff" }}>
                            <div style={{ padding: '0px 30px 0px 30px' }}>
                                <div>
                                    {
                                        (() => {
                                            if (keyword == 'profile') {
                                                return <AccountProfile></AccountProfile>
                                            } else if (keyword == 'address') {
                                                return <AccountAddress></AccountAddress>
                                            } else if (keyword == 'payment') {
                                                return <AccountPayment></AccountPayment>
                                            } else if (keyword == 'shopXu') {
                                                return <AccountShopXu></AccountShopXu>
                                            }
                                        })()
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export function getServerSideProps({ query }) {
    if (query.keyword != undefined) {
        return { props: { keyword: query.keyword } }
    }
    return { props: { keyword: "profile" } }
}