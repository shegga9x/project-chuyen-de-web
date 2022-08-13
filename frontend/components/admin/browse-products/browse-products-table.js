import { faEdit, faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instance from "../../../helpers/axiosConfig";

export default function BrowseProductsTable({ singleProductPages, setProductPages, isLoading, status }) {

    const duyetSanPham = async (idSingleProductPage) => {
        isLoading(true);
        const res = await instance().get('https://localhost:4000/api/admin/duyetSanPham', { params: { idSinglePage: idSingleProductPage } })
        if (res) {
            isLoading(false);
            setProductPages(res.data);
        }
    }

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive" style={{ overflowY: "scroll", height: "500px" }} >
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price range</th>
                                    <th>ImgUrl</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price range</th>
                                    <th>ImgUrl</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {singleProductPages.map(ele => {
                                    if (status == 0 || ele.status == status) {
                                        return (
                                            <tr key={ele.idSingleProductPage}>
                                                <td>{ele.idSingleProductPage}</td>
                                                <td style={{ maxWidth: '150px', overflow: "hidden", textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ele.name}</td>
                                                <td><a href="#">view description</a></td>
                                                <td>{ele.priceRange}</td>
                                                <td>{ele.imgUrl}</td>
                                                <td>{ele.status}</td>
                                                <td>
                                                    {
                                                        status == 3 && (<button onClick={() => { duyetSanPham(ele.idSingleProductPage) }} className="btn-outline-secondary" style={{ border: "none" }}>
                                                            <i className="F-icon" > <FontAwesomeIcon icon={faSync} /> </i>
                                                        </button>)
                                                    }
                                                    <button onClick={() => { test() }} className="btn-outline-secondary" style={{ border: "none" }}>
                                                        <i className="F-icon"> <FontAwesomeIcon icon={faEdit} /> </i>
                                                    </button>
                                                    <button className="btn-outline-secondary" style={{ border: "none" }}>
                                                        <i className="F-icon"> <FontAwesomeIcon icon={faTrash} /> </i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}