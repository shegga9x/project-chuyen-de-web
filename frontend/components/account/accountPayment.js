export default function AccountPayment() {
    return (
        <>
            <div className="my-account-secion" style={{ padding: '0 30px 20px' }}>
                <div className="my-account-section_header" style={{ display: 'flex', padding: '22px 0', borderBottom: '1px solid #efefef' }}>
                    <div className="my-account-section_header-left" style={{ flex: 1 }}>
                        <p>Thẻ Tín Dụng/Ghi Nợ</p>
                    </div>
                    <div className="my-account-section_header_button">
                        <button style={{ border: 'none', padding: '8px 16px', color: 'white', backgroundColor: 'red', borderRadius: '2px' }}>
                            <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon icon-plus-sign" style={{ width: '1em', height: '1em', fill: 'white', border: '1px solid red', paddingTop: '3px' }}>
                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                </polygon>
                            </svg>
                            Thêm Thẻ Mới
                        </button>
                    </div>
                </div>
                <div className="my-account-section_body" style={{ padding: '70px 0', textAlign: 'center' }}>
                    <p>Bạn chưa liên kết thẻ</p>
                </div>
            </div>
            <div className="my-account-secion" style={{ padding: '0 30px 20px' }}>
                <div className="my-account-section_header" style={{ display: 'flex', padding: '22px 0', borderBottom: '1px solid #efefef' }}>
                    <div className="my-account-section_header-left" style={{ flex: 1 }}>
                        <p>Tài Khoản Ngân Hàng Của Tôi</p>
                    </div>
                    <div className="my-account-section_header_button">
                        <button style={{ border: 'none', padding: '8px 16px', color: 'white', backgroundColor: 'red', borderRadius: '2px' }}>
                            <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon icon-plus-sign" style={{ width: '1em', height: '1em', fill: 'white', border: '1px solid red', paddingTop: '3px' }}>
                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                </polygon>
                            </svg>
                            Thêm Tài Khoản Ngân Hàng
                        </button>
                    </div>
                </div>
                <div className="my-account-section_body" style={{ padding: '70px 0', textAlign: 'center' }}>
                    <p>Bạn chưa có tài khoản ngân hàng</p>
                </div>
            </div>
        </>
    )
}