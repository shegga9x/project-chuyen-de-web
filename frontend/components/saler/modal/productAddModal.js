import { faCheckSquare, faChevronDown, faChevronRight, faMinusSquare, faPlusSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import CheckboxTree from "react-checkbox-tree";
import InstanceAxios from "../../../helpers/axiosConfig.js";
import "../../../node_modules/react-checkbox-tree/lib/react-checkbox-tree.css";
import MultiStep from "react-multistep";
import ImageUploading from 'react-images-uploading';


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

export default function ProductAddModal({ open, closeModal }) {
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(0);
    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };
    const handleOnChange = (e) => {
        const abc = {};
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
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
        }} checked={checked} expanded={expanded} onCheck={(checked) => { { setChecked(checked); } }} onExpand={(expanded) => { setExpanded(expanded); }} />
    );
    // (<input onChange={handleOnChange} key={c} className={index} type="text" ></input>
    const step2a = (c, index) => {
        return (
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
                                <input type="text" className="form-control" name="name" id="name" placeholder="" />
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="qty" className="col-sm-3 control-label">Giá</label>
                            <div className="col-sm-3">
                                <input type="number" className="form-control" name="name" id="name" placeholder="" />
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="qty" className="col-sm-3 control-label">Số Lượng</label>
                            <div className="col-sm-3">
                                <input type="number" className="form-control" name="name" id="name" />
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Ảnh</label>
                            <div className="col-sm-3">
                                <div className="App">
                                    <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url" >
                                        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps, }) => (
                                            // write your building UI
                                            <div className="upload__image-wrapper">
                                                <button type="button" style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps} > Click </button>
                                                {imageList.map((image, index) => (
                                                    <div key={index} className="image-item"> <img src={image['data_url']} alt="" width="100" /> </div>
                                                ))}
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                            </div>

                        </div> {/* form-group // */}
                        <hr />
                    </div>{/* panel-body // */}
                </section>{/* panel// */}
            </div>
        )
    }
    const step2 = (
        <div className="container" style={{ maxWidth: "100%" }}>
            <section className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Panel heading</h3>
                </div>
                <div className="panel-body" >
                    <form action="designer-finish.html" className="form-horizontal" role="form">
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-3 control-label">Тип заказа</label>
                            <div className="col-sm-9">
                                <label className="radio-inline">
                                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" /> Tên Sản Phẩm
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" /> Внутренный заказ
                                </label>
                            </div>
                        </div> {/* form-group // */}
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-3 control-label">Tên Sản Phẩm</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="name" id="name" placeholder="" />
                            </div>
                        </div> {/* form-group // */}

                        <div className="form-group">
                            <label htmlFor="about" className="col-sm-3 control-label">Mô tả sản phẩm</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" defaultValue={""} />
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
                                <input type="text" className="form-control" name="name" id="name" />
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
                                <button type="submit" className="btn btn-primary">Lưu</button>
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
                console.log(nodesReuslt);
                setNodes(nodesReuslt);
            })
    }, [])
    return (
        <div >
            {nodes &&
                (
                    <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
                        <MultiStep steps={steps} />
                    </Modal>
                )}

        </div >
    );

} 