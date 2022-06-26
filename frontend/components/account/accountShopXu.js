export default function AccountShopXu() {
    return (
        <>
            <div className="my-account-secion" style={{ padding: '0 30px 20px' }}>
                <div className="my-account-section_header" style={{ display: 'flex', padding: '22px 0', borderBottom: '1px solid #efefef' }}>
                    <div className="my-account-section_header-left" style={{ display: 'flex', flex: 1 }}>
                        <img className="Gq4KnO" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png" width={50} height={50} />
                        <p style={{ marginLeft: '8px', marginTop: '11px' }}>ShopVip Xu</p>
                    </div>
                    <div className="my-account-section_header_button">
                        <button style={{ border: 'none', padding: '8px 16px', color: 'white', backgroundColor: 'red', borderRadius: '2px' }}>
                            <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon icon-plus-sign" style={{ width: '1em', height: '1em', fill: 'white', border: '1px solid red', paddingTop: '3px' }}>
                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                </polygon>
                            </svg>
                            Nạp Thêm Xu Mới
                        </button>
                    </div>
                </div>
                <div className="my-account-section_body" style={{ padding: '70px 0', textAlign: 'center' }}>
                    <p>Bạn chưa có xu nào T.T</p>
                </div>
            </div>
        </>
    )
}