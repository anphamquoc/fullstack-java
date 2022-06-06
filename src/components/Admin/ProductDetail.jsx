import { MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleImageUrl, numberWithDots } from "../../actions";
import {
  fetchOneProduct,
  updateProduct,
  deleteProduct,
} from "../../redux/features/ProductSlice";
const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [productState, setProductState] = useState(
    {
      tenSp: "",
      gia: "",
      moTa: "",
      status: 1,
    },
    [params.id, dispatch]
  );
  useEffect(() => {
    dispatch(fetchOneProduct(params.id));
  }, [params.id, dispatch]);
  useEffect(() => {
    setProductState({
      tenSp: products.product?.tenSp,
      gia: products.product?.gia,
      moTa: products.product?.moTa,
      status: products.product?.status,
    });
  }, [products.product]);
  let star = [];
  const calculateStar = (sao) => {
    for (let index = 0; index < Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star text-yellow-500"></i>);
    }
    for (let index = 0; index < 5 - Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star"></i>);
    }
  };

  const { product } = products;
  calculateStar(product?.sao);
  const handleSave = () => {
    dispatch(updateProduct({ maSp: product.maSp, ...productState }));
  };
  const handleChange = (e) => {
    setProductState({
      ...productState,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      dispatch(deleteProduct(product.maSp));
      navigate("/admin/products");
    }
  };
  return (
    <div className="basis-3/4">
      {products.loadingProduct ? (
        <Skeleton height={"300px"} />
      ) : (
        <>
          <h1 className="mb-5 text-2xl font-semibold">Chi tiết sản phẩm</h1>
          <div className="flex flex-row gap-5 relative">
            <div className="basis-1/4">
              <img
                src={handleImageUrl(product.hinhAnh)}
                alt={"product"}
                className="w-[500px] h-[300px]"
              />
            </div>
            <div className="flex flex-col gap-6 basis-3/4">
              <div className="basis-1/2 flex flex-col gap-5">
                <h2 className="text-2xl font-semibold">{product.tenSp}</h2>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    product.status === 1 ? "bg-green-500" : "bg-red-500"
                  } w-fit text-white`}
                >
                  {product.status === 1 ? "Còn hàng" : "Hết hàng"}
                </span>
                <p>{product.moTa}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-semibold text-xl">
                  {numberWithDots(product.gia)}
                </h5>
                <div className="flex flex-row gap-3">{star}</div>
              </div>
              <div className="flex flex-row gap-5">
                <button
                  className="px-5 py-2 rounded-full bg-yellow-500 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalScrollable"
                >
                  Sửa
                </button>
                {/* Modal */}
                <div
                  className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                  id="exampleModalScrollable"
                  tabIndex={-1}
                  aria-labelledby="exampleModalScrollableLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5
                          className="text-xl font-medium leading-normal text-gray-800"
                          id="exampleModalScrollableLabel"
                        >
                          Thông tin sản phẩm
                        </h5>
                        <button
                          type="button"
                          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body relative p-4 flex flex-col gap-5">
                        <TextField
                          id="standard-basic"
                          label="Tên sản phẩm"
                          variant="standard"
                          className="w-full"
                          value={productState.tenSp}
                          onChange={handleChange}
                          name="tenSp"
                        />
                        <TextField
                          id="standard-basic"
                          label="Mô tả"
                          variant="standard"
                          className="w-full"
                          value={productState.moTa}
                          onChange={handleChange}
                          name="moTa"
                        />
                        <TextField
                          id="standard-basic"
                          label="Giá cả"
                          variant="standard"
                          className="w-full"
                          value={productState.gia}
                          onChange={handleChange}
                          name="gia"
                        />
                        <Select
                          value={productState.status}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          name="status"
                        >
                          <MenuItem value={1}>Còn hàng</MenuItem>
                          <MenuItem value={0}>Hết hàng</MenuItem>
                        </Select>
                      </div>
                      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-bs-dismiss="modal"
                        >
                          Đóng
                        </button>
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                          onClick={handleSave}
                        >
                          Lưu lại thay đổi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ////////////////// */}
                <button
                  className="px-5 py-2 rounded-full bg-red-500 text-white"
                  onClick={handleDelete}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
