import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function AddProduct() {

  let navigate = useNavigate();

  let { id } = useParams();


  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    uploadImage: "",
    brand: "",
    color: "",
    size: "",
    description: "",
  });

  //const [newData, setNewData] = useState([]);
  // const [id, setId] = useState(undefined);

  function handleChange(e) {
    //console.log(e.target.value)
    setData({ ...data, [e.target.id]: e.target.value })
    //console.log(data)
  };

  // function handleSubmit(e) {
  //   //console.log(data);
  //   e.preventDefault();
  //   if (id === undefined) {
  //     axios.post("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear", data)
  //       .then((res) => {
  //         //console.log(res.data);
  //         loadData();
  //       })
  //     setData({
  //       title: "",
  //       category: "",
  //       price: "",
  //       mrp: "",
  //       image: "",
  //       uploadImage: "",
  //       brand: "",
  //       color: "",
  //       size: "",
  //       description: "",
  //     })
  //   }

  // };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(data);

    if (id) {
      axios.put("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear/" + id, data)
        .then((res) => {
          console.log(res.data)

          setData({
            title: "",
            category: "",
            price: "",
            mrp: "",
            image: "",
            uploadImage: "",
            brand: "",
            color: "",
            size: "",
            description: ""
          })
        })
    } else {

      axios.post("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear", data)
        .then((res) => {
          console.log(res.data)
        })

      setData({
        title: "",
        category: "",
        price: "",
        mrp: "",
        image: "",
        uploadImage: "",
        brand: "",
        color: "",
        size: "",
        description: ""
      })
    }

    navigate("/admin/products")
  };

  useEffect(() => {
    if (id) {
      axios.get("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear/" + id)
        .then((res) => {
          console.log(res.data);
          setData({
            title: res.data.title,
            category: res.data.category,
            price: res.data.price,
            mrp: res.data.mrp,
            image: res.data.image,
            uploadImage: res.data.uploadImage,
            brand: res.data.brand,
            color: res.data.color,
            size: res.data.size,
            description: res.data.description
          })
        })
    }
  }, [])


  // function loadData() {
  //   //USING AXIOs
  //   axios.get("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear")
  //     .then((res) => {
  //       //console.log(res.data)
  //       setNewData(res.data)
  //     })
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);
  //console.log(newData)

  return (
    <>
      <div>
        <div class="container p-5 border  m-5 rounded shadow">
          <form>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="title" class="form-label"><h5>Title</h5></label>
                <input value={data.title} onChange={(e) => handleChange(e)} type="text" id="title" class="form-control" placeholder="Enter product title" />
              </div>
              <div class="col-md-6">
                <label for="category" class="form-label"><h5>Category</h5></label>
                <select value={data.category} onChange={(e) => handleChange(e)} id="category" class="form-select">
                  <option selected>Choose Category...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-3">
                <label for="price" class="form-label"><h5>Price</h5></label>
                <input value={data.price} onChange={(e) => handleChange(e)} type="number" id="price" class="form-control" placeholder="Enter price" />
              </div>
              <div class="col-md-3">
                <label for="mrp" class="form-label"><h5>MRP</h5></label>
                <input value={data.mrp} onChange={(e) => handleChange(e)} type="number" id="mrp" class="form-control" placeholder="Enter MRP" />
              </div>
              <div class="col-md-3">
                <label for="image" class="form-label"><h5>Image</h5></label>
                <input value={data.image} onChange={(e) => handleChange(e)} type="text" id="image" class="form-control" placeholder="Enter image URL" />
              </div>
              <div class="col-md-3">
                <label for="uploadImage" class="form-label"><h5>Upload Image</h5></label>
                <input value={data.uploadImage} onChange={(e) => handleChange(e)} type="file" id="uploadImage" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-3">
                <label for="size" class="form-label"><h5>Brand</h5></label>
                <select value={data.brand} onChange={(e) => handleChange(e)} id="brand" class="form-select">
                  <option selected>Choose Brand...</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Bata">Bata</option>
                  <option value="Nike">Nike</option>
                  <option value="Puma">Puma</option>
                  <option value="Gucci">Gucci</option>
                  <option value="Mochi">Mochi</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="color" class="form-label"><h5>Color</h5></label>
                <input value={data.color} onChange={(e) => handleChange(e)} type="text" id="color" class="form-control" placeholder="Enter color" />
              </div>
              <div class="col-md-6">
                <label for="size" class="form-label"><h5>Size</h5></label>
                <select value={data.size} onChange={(e) => handleChange(e)} id="size" class="form-select">
                  <option selected>Choose Size...</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>

                </select>
              </div>
            </div>

            <div class="mb-3">
              <label for="description" class="form-label"><h5>Description</h5></label>
              <textarea value={data.description} onChange={(e) => handleChange(e)} id="description" class="form-control" rows="3" placeholder="Enter product description"></textarea>
            </div>

            <div class="d-flex justify-content-center">
              <button onClick={(e) => handleSubmit(e)} type="submit" class="btn btn-dark px-5 my-3">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct