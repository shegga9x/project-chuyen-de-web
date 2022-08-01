import { faCheckSquare, faChevronDown, faChevronRight, faMinusSquare, faPlusSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import CheckboxTree from "react-checkbox-tree";
import InstanceAxios from "../../../helpers/axiosConfig.js";
import "../../../node_modules/react-checkbox-tree/lib/react-checkbox-tree.css";
import MultiStep from "react-multistep";
import ImageUploading from 'react-images-uploading';
import { useFormik } from 'formik';
import * as Yup from 'yup';

Modal.setAppElement('body');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: "40%", maxHeight: "500px", overflow: 'auto',
    }
}

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Bắt Buộc'),
    description: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Bắt Buộc'),
    idCategory: Yup.number().required('Bắt Buộc'),
});
export default function ProductAddModal({ open, closeModal }) {
    const [checked1, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [selectedCagetory, setSelectedCagetory] = useState(null);
    const [counter, setCounter] = useState(1);
    const [images, setImages] = useState([]);
    const onChange = (imageList, addUpdateIndex) => {
        formik.setFieldValue(`productDTOs[${addUpdateIndex}].imgUrl`, imageList[addUpdateIndex].data_url);
        setImages(imageList);
    };
    const find = (array = [], id) => {
        for (const item of array) {
            const result = item.value === id ? item : find(item.children, id);
            if (result) return result;
        }
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            description: '',
            productDTOs: [{
                name: '',
                price: 0,
                quantity: 0,
                imgUrl: ''
            }],
            cagetory: "",
            idCategory: "",
            shipping: ""
        },
        validationSchema,
        onSubmit: values => {
            InstanceAxios().post(`http://localhost:4000/api/saler/productSalerUpdate`, values).then((response) => {
                alert("Cập Nhật Thành Công"); formik.resetForm(); setImages([]); closeModal();
            }).catch((error) => {
                if (error.response) {
                    alert("Cập Nhật Thất Bại");
                }
            });
        },
    });
    const handleClick = () => {
        if (counter != 0) {
            const newProductArr = formik.values.productDTOs.push({ name: '', price: 0, quantity: 0, imgUrl: '' });
            formik.setFieldValue(formik.values.productDTOs, newProductArr);
        }
        setCounter(counter + 1);

    };
    const step1 = (
        <CheckboxTree nodes={nodes} icons={{
            check: <FontAwesomeIcon style={{ color: "#ee4d2d" }} icon={faCheckSquare} />,
            uncheck: <FontAwesomeIcon style={{ color: "#ee4d2d" }} icon={faSquare} />,
            halfCheck: <FontAwesomeIcon icon={faMinusSquare} />,
            expandClose: <FontAwesomeIcon icon={faChevronRight} />,
            expandOpen: <FontAwesomeIcon icon={faChevronDown} />,
            expandAll: <FontAwesomeIcon icon={faPlusSquare} />,
            collapseAll: <FontAwesomeIcon icon={faMinusSquare} />,
            parentClose: null, parentOpen: null, leaf: null,
        }} checked={checked1} expanded={expanded}
            onlyLeafCheckboxes={true}
            onCheck={(checked) => {
                {
                    const arr = checked.filter(item => item !== checked1[0])
                    const cagetory = find(nodes, parseInt(arr[0]))
                    setChecked(arr);
                    setSelectedCagetory(cagetory)
                    if (cagetory) {
                        formik.setFieldValue(`cagetory`, cagetory.label);
                        formik.setFieldValue(`idCategory`, cagetory.value);
                    } else {
                        formik.setFieldValue(`cagetory`, null);
                        formik.setFieldValue(`idCategory`, null);
                    }


                }
            }}
            onExpand={(expanded) => { setExpanded(expanded); }} />
    );
    // (<input onChange={handleOnChange} key={c} className={index} type="text" ></input>
    const step2a = (c, index) => {
        return (
            formik.values.productDTOs[index] &&
            <div className="container" style={{ maxWidth: "100%" }}>
                <section className="panel panel-default">
                    <div className="panel-heading">
                        <h5 className="panel-title">Sản Phẩm {index + 1}</h5>
                    </div>
                    <div className="panel-body" >
                        <div className="form-group">

                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-3 control-label">Loại</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name={`productDTOs[${index}].name`} placeholder="" onChange={formik.handleChange}
                                    value={formik.values.productDTOs[index].name} />
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="qty" className="col-sm-3 control-label">Giá</label>
                            <div className="col-sm-3">
                                <input type="number" className="form-control" name={`productDTOs[${index}].price`} id="name" placeholder="" onChange={formik.handleChange}
                                    value={formik.values.productDTOs[index].price} />
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="qty" className="col-sm-3 control-label" >Số Lượng</label>
                            <div className="col-sm-3">
                                <input type="number" className="form-control" name={`productDTOs[${index}].quantity`} id="name" onChange={formik.handleChange}
                                    value={formik.values.productDTOs[index].quantity} />
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Ảnh</label>
                            <div className="col-sm-5">
                                <div className="App">
                                    <ImageUploading multiple value={images} onChange={onChange} maxNumber={counter} dataURLKey="data_url" >
                                        {({ imageList, onImageUpload, onImageUpdate, isDragging, dragProps, }) => (
                                            <div className="upload__image-wrapper">
                                                <div className="imgWrapper">
                                                    {< img src={(imageList[index]) ? imageList[index]['data_url'] : undefined} alt="" />}
                                                    <button type="button" className="btn" style={(isDragging ? { color: 'red' } : undefined)} onClick={() => { imageList[index] ? onImageUpdate(index) : onImageUpload() }} {...dragProps} >
                                                        <i className="fa fa-image" ></i>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                            </div>

                        </div> {/* form-group // */}
                        <hr />
                    </div > {/* panel-body // */}
                </section > {/* panel// */}
            </div >
        )
    }
    const step2 = (
        <div className="container" style={{ maxWidth: "100%" }}>
            <section className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Panel heading</h3>
                </div>
                <div className="panel-body" >
                    <form onSubmit={formik.handleSubmit} className="form-horizontal" role="form">
                        <div className="form-group">


                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-3 control-label" >Tên Sản Phẩm</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" placeholder=""
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name} />
                                {(formik.errors.name) && <div>{formik.errors.name}</div>}

                            </div>
                        </div> {/* form-group // */}

                        <div className="form-group">
                            <label htmlFor="about" className="col-sm-3 control-label" >Mô tả sản phẩm</label>
                            <div className="col-sm-9">
                                <textarea className="form-control"
                                    name="description" onChange={formik.handleChange}
                                    value={formik.values.description} />

                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="qty" className="col-sm-3 control-label">Thông tin bán hàng</label>
                            <div className="col-sm-9">
                                {/* {Object.keys(inputValues).map((c) => { return <p>{inputValues[c]}</p>; })} */}
                                {Array.from(Array(counter)).map((c, index) => { return (<>{step2a(c, index)}</>); })}
                                <button className="btn btn-primary" type='button' onClick={handleClick}>Thêm</button>
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="qty" className="col-sm-3 control-label">Loại</label>
                            <div className="col-sm-3">
                                <input type="text" name="cagetory" className="form-control" onChange={formik.handleChange} disabled
                                    value={formik.values.cagetory} />
                                {(formik.errors.idCategory) && <div>{formik.errors.idCategory}</div>}

                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Vận chuyển</label>
                            <div className="col-sm-3">
                                <label className="control-label small" htmlFor="date_start">Начало: </label>
                                <input type="text" className="form-control" name="date_start" id="date_start" placeholder="Начало" />
                            </div>
                            <div className="col-sm-3">
                                <label className="control-label small" htmlFor="date_finish">Конец:</label>
                                <input type="text" className="form-control" name="date_finish" id="date_finish" placeholder="Конец" />
                            </div>
                        </div> {/* form-group // */}
                        <hr />
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-9">
                                <button type="submit" onClick={() => formik.validateForm().then((e) => {
                                    (Object.keys(e).length !== 0 ? alert("Hay Hoan Thanh Form") : "")
                                })} className="btn btn-primary">Lưu</button>
                            </div>
                        </div> {/* form-group // */}
                    </form>
                </div>{/* panel-body // */}
            </section>{/* panel// */}
        </div>
    );

    const steps = [
        { name: "Name A", component: step1 },
        { name: "Email", component: step2 },
    ];

    useEffect(() => {
        InstanceAxios().get(`http://localhost:4000/api/product/loadCagetory`)
            .then((data) => {
                const nodesReuslt = JSON.parse(JSON.stringify(data.data).replaceAll(',"children":[]', ""));
                setNodes(nodesReuslt);
            })
    }, [])
    return (
        <div >
            {nodes &&
                (
                    <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
                        <MultiStep activeStep={0} showNavigation={true} steps={steps} />
                    </Modal>
                )}

        </div >
    );

} 