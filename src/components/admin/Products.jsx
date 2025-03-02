import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function Products() {

  const [newData, setNewData] = useState([]);
  //const [id, setId] = useState(undefined);

  function loadData() {
    //USING AXIOs
    axios.get("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear")
      .then((res) => {
        //console.log(res.data)
        setNewData(res.data)
      })
  };

  useEffect(() => {
    loadData();
  }, []);
  //console.log(newData)


  // function handleDelete(id) {
  //   // alert("hii")
  //   //alert(id)
  //   //axios.delete(`https://6777787480a79bf91901c924.mockapi.io/trendyFootwear`${id})
  //   axios.delete("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear/" + id)
  //     .then((res) => {
  //       console.log(res.data)
  //       loadData();
  //     });
  // };

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://6777787480a79bf91901c924.mockapi.io/trendyFootwear/${id}`)
          .then((res) => {
            console.log(res.data);
            loadData(); // Refresh the data after deletion
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success"
            });
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again later.",
              icon: "error"
            });
          });
      }
    });
  }

  // ------------------------------------------------------------------------

  return (
    <>
      <div class="container">
        <table class="table border shadow m-5 text-center rounded">
          <thead >
            <tr className='bg-light'>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>MRP</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              newData.map((eachData, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      {/* <img src={require("../../assets/images/item-1.jpg")} alt="Men Casual Shoes" class="" style={{ width: "100px", height: "100px" }} /> */}
                      <img src={eachData.image} alt="" style={{ width: "100px", height: "100px" }} />
                    </td>
                    <td>{eachData.title}</td>
                    <td>{eachData.brand}</td>
                    <td>{eachData.category}</td>
                    <td>₹{eachData.price}/-</td>
                    <td>₹{eachData.mrp}/-</td>
                    <td>
                      <Link to={"/admin/addproduct/" + eachData.id}>
                        <button class="btn btn-dark btn-sm"><i class="fa-solid fa-pencil"></i> Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(eachData.id)} class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i> Delete</button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products