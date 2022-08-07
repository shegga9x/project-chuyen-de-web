import { useEffect, useState } from "react"
import InstanceAxios from "../../helpers/axiosConfig";
import ModalProfileEmail from "./modal/modalProfileEmail";
import ModalProfilePhone from "./modal/modalProfilePhone";

export default function AccountProfile({ customer, setCustomer, setFirstRender }) {

    const [openPhone, setOpenPhone] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);

    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);

    const [provinceSelected, setProvinceSelected] = useState({ id: 0, name: "" });
    const [districtSelected, setDistrictSelected] = useState({ id: 0, name: "" });
    const [wardSelected, setWardSelected] = useState({ id: 0, name: "" });

    const openFileImage = () => {
        document.getElementById('file').click();
    }

    const readURL = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function (e) {
                let base64Data = e.target.result.split(',')[1];
                let img = "url('data:image/png;base64, " + base64Data + "')";
                document.getElementById('imgUrl').style.backgroundImage = img;
            }
        }
    }

    const saveAll = () => {
        // value radio box
        const gender = document.querySelector('input[name="gender"]:checked').value;
        // value input date
        const birthday = document.getElementById('birthday').value
        // value imgUrl
        const imgUrl = document.getElementById('imgUrl').style.backgroundImage

        const addressDTO = {
            provinceId: provinceSelected,
            districtId: districtSelected,
            wardCode: wardSelected,
            subLocate: "Nguyen Van Nghi F7"
        }
        console.log(addressDTO);

        // value tên shop tạm thời không nên thay đổi vì chưa hiểu trường

        // change customer
        const newCustomer = {
            idCustomer: customer.idCustomer,
            name: customer.name,
            email: customer.email,
            phoneNumber: customer.phoneNumber,
            gender: gender, birthday: birthday,
            imgUrl: imgUrl,
            addressDTO: addressDTO
        }
        setFirstRender(1);
        setCustomer(newCustomer);
    }

    const resetAll = () => {

    }

    const openModal = (modalName) => {
        document.body.classList.toggle('modal-visibile');
        const model = document.getElementsByClassName('modal-load')[0];
        model.classList.toggle('visible');
        if (modalName === 'email') {
            console.log('email');
            setOpenEmail(true);
        } else {
            console.log('phone');
            setOpenPhone(true);
        }
    }

    const closeModal = (modalName) => {
        if (modalName === 'email') {
            setOpenEmail(false);
        } else {
            setOpenPhone(false);
        }
        setTimeout(() => {
            document.body.classList.toggle('modal-visibile');
            const model = document.getElementsByClassName('modal-load')[0];
            model.classList.toggle('visible');
            resetAll();
        }, 200)
    }
    useEffect(() => {
        async function fetchMyAPI() {
            console.log(customer);
            let provinceArr = await InstanceAxios().get(`https://sqlshop123.herokuapp.com/api/ghn/province`).then((data) => {
                let reformattedArray = data.data.data.map(obj => { return { provinceID: obj.ProvinceID, provinceName: obj.ProvinceName } })
                setProvince(reformattedArray)
                return reformattedArray;
            })
            const address = customer.addressDTO;
            if (address) {
                getAddressCell("district", address.provinceId.id + "-" + address.provinceId.name, true)
                getAddressCell("ward", address.districtId.id + "-" + address.districtId.name, true)
                getAddressCell("", address.ward.id + "-" + address.ward.name, true)
            } else {
                getAddressCell("district", provinceArr[0].provinceID + "-" + provinceArr[0].provinceName, false)
            }
        }
        fetchMyAPI()
    }, [])

    async function getAddressCell(type, value, begin) {
        const id = value.split("-")[0]
        const name = value.split("-")[1]
        let result = null;
        if (type != "") {
            let param = "";
            (type == "district" ? param = `?province_id=` + id : param = `?district_id=` + id)
            result = await InstanceAxios().get(`https://sqlshop123.herokuapp.com/api/ghn/${type}` + param).then((data) => {
                let reformattedArray = data.data.data.map(obj => {
                    switch (type) {
                        case "district":
                            return { districtID: obj.DistrictID, districtName: obj.DistrictName }
                        case "ward":
                            return { wardCode: obj.WardCode, wardName: obj.WardName }
                    }
                })
                if (type == "district") {
                    setDistrict(reformattedArray)
                    if (!begin) getAddressCell("ward", reformattedArray[0].districtID + "-" + reformattedArray[0].districtName, false)
                } else {
                    setWard(reformattedArray)
                    if (!begin) getAddressCell("", reformattedArray[0].wardCode + "-" + reformattedArray[0].wardName, false)
                }
                return reformattedArray;
            })
        }

        switch (type) {
            case "district":
                setProvinceSelected({ id: id, name: name }); break;
            case "ward":
                setDistrictSelected({ id: id, name: name }); break;
            default:
                setWardSelected({ id: id, name: name }); break;
        }
        return result

    };
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
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>{customer.name}</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Email</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            {customer.email}
                            <a onClick={() => { openModal('email') }} style={{ color: "blue", marginLeft: "5px", fontSize: '11px' }}>Thay Đổi</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Số Điện Thoại</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            {customer.phoneNumber != null ? <>
                                {customer.phoneNumber}<a onClick={() => { openModal('phone') }} style={{ color: "blue", marginLeft: "5px", fontSize: '11px' }}>Thay Đổi</a>
                            </> : <>
                                <a onClick={() => { openModal('phone') }} style={{ color: "blue", marginLeft: "5px", fontSize: '11px' }}>
                                    Thêm
                                </a>
                            </>}
                            {/* <a onClick={() => { openModal('phone') }} style={{ color: "blue", marginLeft: "5px", fontSize: '11px' }}>Thay Đổi</a> */}
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Họ Tên</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <input id="shopName" type="text" defaultValue={customer.name} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Tỉnh/Thành Phố</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <select name="" id="" value={provinceSelected.id + "-" + provinceSelected.name} onChange={(e) => { getAddressCell("district", e.target.value, false) }}>
                                {province.map(o =>
                                (
                                    <option key={o.provinceID} value={o.provinceID + "-" + o.provinceName} >{o.provinceName}</option>
                                )
                                )}

                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Quận/Huyện</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <select name="" id="" value={districtSelected.id + "-" + districtSelected.name} onChange={(e) => { getAddressCell("ward", e.target.value, false) }}>
                                {district.map(o => (
                                    <option key={o.districtID} value={o.districtID + "-" + o.districtName}  >{o.districtName}</option>
                                ))}

                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Phường</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <select name="" id="" value={wardSelected.id + "-" + wardSelected.name} onChange={(e) => { getAddressCell("", e.target.value, false) }}>
                                {ward.map(o => (
                                    <option key={o.wardCode} value={o.wardCode + "-" + o.wardName} >{o.wardName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Giới Tính</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <input type="radio" name="gender" value="m" defaultChecked={customer.gender == 'm'} />
                            <label style={{ marginRight: "4px" }}>Nam</label>
                            <input type="radio" name="gender" value="w" defaultChecked={customer.gender == 'w'} />
                            <label style={{ marginRight: "4px" }}>Nữ</label>
                            <input type="radio" name="gender" value="k" defaultChecked={customer.gender == 'k'} />
                            <label style={{ marginRight: "4px" }}>Khác</label>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                        <div style={{ width: '115px', textAlign: 'right', fontSize: '.875rem' }}>Ngày Sinh</div>
                        <div style={{ paddingLeft: '20px', fontSize: '.875rem', fontWeight: 500 }}>
                            <input id="birthday" type="date" defaultValue={customer.birthday} min='1910-01-01' max='2022-12-12' />
                        </div>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <div style={{ paddingLeft: '136px' }}>
                            <button onClick={() => { saveAll() }} style={{ borderRadius: '6px', padding: '8px 20px 8px 20px', border: 'none', backgroundColor: 'red', color: 'white' }}>Lưu</button>
                        </div>
                    </div>
                </div>
                <div style={{ width: '40%', textAlign: 'center' }}>
                    <div style={{ marginTop: '60px' }}>
                        <div id="imgUrl" style={{ marginLeft: '126px', marginBottom: '4px', backgroundImage: `${customer.imgUrl}`, borderRadius: "50%", backgroundPosition: "50%", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "90px", height: "85px" }}></div>
                        <input onChange={(event) => { readURL(event) }} id="file" type="file" accept="image/*" style={{ display: 'none' }} />
                        <button onClick={openFileImage} style={{ borderRadius: '2px', padding: '8px 20px 8px 20px', border: '1px solid gainsboro', backgroundColor: 'white', color: 'black' }}>Chọn Ảnh</button>
                    </div>
                </div>
            </div>
            <div className="modal-load">
                <ModalProfileEmail open={openEmail} closeModal={closeModal} customer={customer} setCustomer={setCustomer} setFirstRender={setFirstRender}></ModalProfileEmail>
                <ModalProfilePhone open={openPhone} closeModal={closeModal} customer={customer} setCustomer={setCustomer} setFirstRender={setFirstRender}></ModalProfilePhone>
            </div>
        </>)
}