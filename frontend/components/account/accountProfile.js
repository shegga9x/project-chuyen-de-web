export default function AccountProfile() {
    return (
        <>
            <div className="right_container_header" style={{ padding: '18px 0px 18px 0px', borderBottom: '0.0625rem solid #efefef' }}>
                <h1 style={{ fontSize: '1.125rem', marginBottom: '3px' }}>Hồ Sơ Của Tôi</h1>
                <div style={{ fontSize: '.875rem' }}>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
            </div>
            <div className="right_container_body" style={{ display: 'flex', paddingTop: '30px' }}>
                <div style={{ paddingRight: '50px', width: '60%' }}>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Tên Đăng Nhập</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>emlama123456</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Tên Đăng Nhập</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <input type="text" />
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Email</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            mi***********@gmail.com
                            <a href="#" style={{ color: "blue" }}>Thay Đổi</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Số Điện Thoại</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <a href="#" style={{ color: "blue" }}>
                                Thêm
                            </a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Tên Shop</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <input type="text" />
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Giới Tính</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <input type="radio" id="sex" name="sex" defaultValue="nam" />
                            <label style={{ marginRight: "4px" }}>Nam</label>
                            <input type="radio" id="sex" name="sex" defaultValue="nu" />
                            <label style={{ marginRight: "4px" }}>Nữ</label>
                            <input type="radio" id="sex" name="sex" defaultValue="khac" />
                            <label style={{ marginRight: "4px" }}>Khác</label>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Ngày Sinh</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <input type="date" />
                        </div>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={{ paddingLeft: '136px' }}>
                            <button style={{ borderRadius: '6px', padding: '8px 20px 8px 20px', border: 'none', backgroundColor: 'red', color: 'white' }}>Lưu</button>
                        </div>
                    </div>
                </div>
                <div style={{ width: '40%', textAlign: 'center' }}>
                    <div style={{ marginTop: '60px' }}>
                        <div style={{ padding: '12px 0px 12px 0px' }}>
                            <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" width="85px" height="80px" />
                        </div>
                        <input id="file" type="file" style={{ display: 'none' }} />
                        <button style={{ borderRadius: '2px', padding: '8px 20px 8px 20px', border: '1px solid gainsboro', backgroundColor: 'white', color: 'black' }}>Chọn Ảnh</button>
                    </div>
                </div>
            </div>
        </>)
}