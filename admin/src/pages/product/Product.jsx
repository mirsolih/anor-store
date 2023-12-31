import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { updateProduct } from "../../redux/apiCalls";
import app from "../../firebase"
 
export default function Product() {
    const location = useLocation()
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([])


    const product = useSelector(state =>
        state.product.products.find(product => product._id === productId)
        );
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );

      useEffect(() => {
        const getStats = async () => {
          try {
            const res = await userRequest.get("orders/income?pid=" + productId);
            const list = res.data.sort((a,b)=>{
                return a._id - b._id
            })
            list.map((item) =>
              setPStats((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], Sales: item.total },
              ])
            );
          } catch (err) {
            console.log(err);
          }
        };
        getStats();
      }, [productId, MONTHS]);

      const[inputs, setInputs] = useState({});
      const [file, setFile] = useState(null);
      const dispatch = useDispatch();

      const handleChange = (e) => {
        setInputs((prev)=> {
          return {...prev, [e.target.name]: e.target.value}
        })
      } 
      console.log(inputs)
      const handleClick = (e) => {
        e.preventDefault();
        const filename = new Date().getTime()+ file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storage,file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log("Upload is " + progress + "% done")
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
            }
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const product = { ...inputs, img: downloadURL};
              updateProduct(product, dispatch);
            });
          }
        )
      }


  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input name="title" type="text" onChange={handleChange} placeholder={product.title} />
                  <label>Product Description</label>
                  <input name="desc" type="text" onChange={handleChange} placeholder={product.desc} />
                  <label>Product Price</label>
                  <input name="price" type="text" onChange={handleChange} placeholder={product.price} />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock" onChange={handleChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img name="image" src={product.img} />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={handleClick} >Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
