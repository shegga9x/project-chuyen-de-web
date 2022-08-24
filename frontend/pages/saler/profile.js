import Head from "next/head";
import { useEffect, useState, ReactDOM } from "react";
import Layout from "../../components/saler/layout";
import InstanceAxios from "../../helpers/axiosConfig";
import { useFormik } from 'formik';
import { useSession } from "next-auth/client";
import * as Yup from 'yup';

export default function Profile() {
    const [session, loading] = useSession();
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        description: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        phoneNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });
    const formik = useFormik({
        initialValues: {
            idShop: "", name: '', description: '',
            phoneNumber: "", imgUrl: "",
            addressDTO: {
                provinceId: { id: 0, name: "" },
                districtId: { id: 0, name: "" },
                wardCode: { id: 0, name: "" },
                subLocate: ""
            }
        },
        validationSchema,
        onSubmit: values => {
            InstanceAxios().post(`https://sqlshop123.herokuapp.com/api/saler/updateShop`, values).then((response) => {
                alert("Cập Nhật Thành Công");
                formik.setFieldValue('idShop', data.message)
            }).catch((error) => {
                if (error.response) {
                    alert("Cập Nhật Thất Bại");
                }
            });
        },

    });
    useEffect(() => {
        async function fetchMyAPI() {
            if (session) {
                let provinceArr = await InstanceAxios().get(`https://sqlshop123.herokuapp.com/api/ghn/province`).then((data) => {
                    let reformattedArray = data.data.data.map(obj => { return { provinceID: obj.ProvinceID, provinceName: obj.ProvinceName } })
                    setProvince(reformattedArray)

                    return reformattedArray;

                })
                await InstanceAxios().get(`https://sqlshop123.herokuapp.com/api/saler/getShopProfile`).then((data) => {
                    const address = data.data.addressDTO;
                    formik.setFieldValue('addressDTO.provinceId', { id: address.provinceId.id, name: address.provinceId.name })
                    formik.setFieldValue('addressDTO.districtId', { id: address.districtId.id, name: address.districtId.name })
                    formik.setFieldValue('addressDTO.wardCode', { id: address.wardCode.id, name: address.wardCode.name })
                    formik.setFieldValue('addressDTO.subLocate', address.subLocate)


                    formik.setFieldValue('idShop', data.data.idShop)
                    formik.setFieldValue('name', data.data.name)
                    formik.setFieldValue('description', data.data.description)
                    formik.setFieldValue('phoneNumber', data.data.phoneNumber)
                    formik.setFieldValue('phoneNumber', data.data.phoneNumber)
                    formik.setFieldValue('imgUrl', data.data.imgUrl)
                    getAddressCell("district", address.provinceId.id + "-" + address.provinceId.name, true)
                    getAddressCell("ward", address.districtId.id + "-" + address.districtId.name, true)
                    getAddressCell("", address.ward.id + "-" + address.ward.name, true)


                    setDistrict([{ districtID: address.districtId.id, districtName: address.districtId.name }])
                    setWard([{ wardCode: address.ward.id, wardName: address.ward.name }])
                }).catch((err) => {
                    getAddressCell("district", provinceArr[0].provinceID + "-" + provinceArr[0].provinceName, false)
                })
            }
        }
        fetchMyAPI()
    }, [loading])
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
                formik.setFieldValue('addressDTO.provinceId', { id: id, name: name })
                break;
            case "ward":
                formik.setFieldValue('addressDTO.districtId', { id: id, name: name })
                break;
            default:
                formik.setFieldValue('addressDTO.wardCode', { id: id, name: name })
                break;
        }
        return result

    };

    return (<>

        <Head> <title> Shop Profile </title> </Head>
        <Layout shop>
            {
                <>
                    <div className="page-content" id="boxOK">
                        <div className="mcw" >
                            <div className="container rounded bg-white mt-5 mb-5">
                                <div className="row">
                                    <div className="col-md-3 border-right">
                                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /> </div>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="col-md-5 border-right">
                                            <div className="p-3 py-5">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <h4 className="text-right">Chỉnh sửa Thông tin</h4>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-md-12"><label className="labels">Tên Shop</label><input name="name" type="text" className="form-control" placeholder="first name" onChange={formik.handleChange} value={formik.values.name} /></div>
                                                    <div className="col-md-12"><label className="labels">Mô tả</label><input type="text" className="form-control" placeholder="surname" name="description" onChange={formik.handleChange} value={formik.values.description} /></div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4"><label className="labels">Tỉnh/Thành Phố</label>
                                                        <select name="" id="" onChange={(e) => { getAddressCell("district", e.target.value, false) }}>
                                                            {province.map(o => (
                                                                <option key={o.provinceID} value={o.provinceID + "-" + o.provinceName} selected={formik.values.addressDTO.provinceId.id == o.provinceID}>{o.provinceName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-5"><label className="labels">Quận/Huyện</label>
                                                        <select name="" id="" onChange={(e) => { getAddressCell("ward", e.target.value, false) }}>
                                                            {district.map(o => (
                                                                <option key={o.districtID} value={o.districtID + "-" + o.districtName} selected={formik.values.addressDTO.districtId.id == o.districtID}>{o.districtName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4"><label className="labels">Phường</label>
                                                        <select name="" id="" onChange={(e) => { getAddressCell("", e.target.value, false) }}>
                                                            {ward.map(o => (
                                                                <option key={o.wardCode} value={o.wardCode + "-" + o.wardName} selected={formik.values.addressDTO.wardCode.id == o.wardCode}>{o.wardName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-12"><label className="labels">Địa chỉ</label><input type="text" className="form-control" placeholder="enter address line 1" name="addressDTO.subLocate" onChange={formik.handleChange} value={formik.values.addressDTO.subLocate} /></div>
                                                    <div className="col-md-12"><label className="labels">Số Điện Thoại</label><input type="text" className="form-control" placeholder="enter phone number" name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber} /></div>
                                                </div>
                                                <br />
                                                <div className="mt-5 text-center">
                                                    <button type="submit" onClick={() => formik.validateForm().then((e) => { (Object.keys(e).length !== 0 ? alert("Có Trường Vẫn Còn Trống") : ""); console.log(e); })} className="btn btn-primary profile-button" >Lưu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </Layout> </>);

}
