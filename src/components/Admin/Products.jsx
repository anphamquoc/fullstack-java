import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/features/ProductSlice";
import ProductItem from "../../wrapper/Admin/ProductItem";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../Firebase/firebase";
import PaginationItem from "../ScrollToTop/Pagination";
import NotFoundProduct from "../../assets/images/not-found-product.png";

const Products = () => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [productFilter, setProductFilter] = useState(products.products);
  const [imagePreview, setImagePreview] = useState(null);
  // const [imageData, setImageData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [itemProduct, setItemProduct] = useState({
    tenSp: "",
    gia: "",
    moTa: "",
    hinhAnh: "",
    sao: 5,
    status: 1,
  });
  const [index, setIndex] = useState(1);
  const handleFilterValue = (e) => {
    setQuery(e.target.value);
    const filter = products.products.filter((product) => {
      return product.tenSp.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProductFilter(filter);
  };
  useEffect(() => {
    setProductFilter(products.products);
  }, [products.products]);

  const handleChange = (e) => {
    // check if the input is file
    setItemProduct({
      ...itemProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddProduct = () => {
    // const imageData = new FormData();
    // imageData.append("myFile", imageUrl);
    // axios.post("http://localhost:5000/api/uploadfile", imageData);
    const storageRef = ref(storage, `images/${imageUrl.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageUrl);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setLoading(progress !== 100 ? true : false);
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setItemProduct({
            ...itemProduct,
            hinhAnh: downloadURL,
          });
          dispatch(addProduct({ ...itemProduct, hinhAnh: downloadURL }));
          setItemProduct({
            tenSp: "",
            gia: "",
            moTa: "",
            hinhAnh: "",
            sao: 5,
            status: 1,
          });
        });
      }
    );
    // dispatch(addProduct(itemProduct));
  };
  const handleUploadClick = (event) => {
    let file = event.target.files[0];
    setItemProduct({
      ...itemProduct,
      // hinhAnh: file.name,
    });

    setImageUrl(file);
    setImagePreview(URL.createObjectURL(file));
  };
  return (
    <div className="basis-3/4">
      <h1 className="mb-5 text-2xl font-semibold">Sản phẩm</h1>
      <div className="flex items-center justify-between mb-5">
        <input
          className="px-5 py-3 border rounded-lg"
          type="text"
          name="search"
          placeholder="Tìm kiếm sản phẩm"
          value={query}
          onChange={handleFilterValue}
        />
        <i
          class="cursor-pointer fas fa-plus"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable"
        ></i>
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
                  Tên sản phẩm
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body relative p-4 flex flex-col gap-5">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={
                        imagePreview !== null
                          ? imagePreview
                          : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      }
                    />
                  </CardActionArea>
                </Card>
                <input
                  accept="image/*"
                  id="upload-profile-image"
                  type="file"
                  hidden
                  onChange={handleUploadClick}
                />
                <label htmlFor="upload-profile-image">
                  <Button variant="contained" color="primary" component="span">
                    Thay đổi hình ảnh
                  </Button>
                </label>
                <TextField
                  id="standard-basic"
                  label="Tên sản phẩm"
                  variant="standard"
                  className="w-full"
                  name="tenSp"
                  value={itemProduct.tenSp}
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Giá"
                  variant="standard"
                  className="w-full"
                  name="gia"
                  value={itemProduct.gia}
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="standard-basic"
                  label="Mô tả"
                  variant="standard"
                  className="w-full"
                  name="moTa"
                  onChange={handleChange}
                  value={itemProduct.moTa}
                  required
                />
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
                  onClick={handleAddProduct}
                >
                  {loading ? (
                    <i class="fad fa-spinner-third fa-spin"></i>
                  ) : (
                    "Thêm sản phẩm"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {productFilter.length === 0 && products.loading === false ? (
        <div className="text-center flex flex-col justify-center items-center">
          <img src={NotFoundProduct} alt="Not found" className="w-3/4" />
          <h1 className="text-2xl font-semibold text-gray-400">
            Không có sản phẩm nào
          </h1>
        </div>
      ) : (
        <div className={`grid grid-cols-4 gap-5 w-full`}>
          {products.loading ? (
            <Skeleton height={"300px"} />
          ) : (
            productFilter
              .slice((index - 1) * 8, index * 8)
              .map((product, i) => {
                return <ProductItem key={i} product={product} />;
              })
          )}
        </div>
      )}
      <PaginationItem
        products={productFilter}
        setIndex={setIndex}
        quantity={8}
      />
    </div>
  );
};

export default Products;
