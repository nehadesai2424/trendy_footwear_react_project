import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div class="container py-5 mx-5 animate__animated animate__fadeInRight">
        <div class="row g-4 ">
          {/* <!-- Card 1 --> */}
          <div class="col-md-4">
            <div class="card text-center border-1  bg-light " style={{ borderRadius: "50px" }}>
              <div class="card-body">
                {/* <i class="bi bi-people" style={{fontsize: "48px" , color: "#3c3c59"}}></i> */}
                <img src={require("../../assets/images/users.jpg")} style={{ width: "200px", height: "150px" }} alt="" />
                <hr class="my-3" style={{ border: "1px solid black" }} />
                <Link to="/admin/user">
                  <button class="btn btn-outline-dark">Users</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div class="col-md-4">
            <div class="card text-center border-1  bg-light" style={{ borderRadius: "50px" }}>
              <div class="card-body">
                {/* <i class="fa fa-bag" style={{fontsize: "48px" , color: "#3c3c59"}}></i> */}
                {/* <i class="fa-solid fa-bag-shopping"></i> */}
                <img src={require("../../assets/images/bag.jpg")} style={{ width: "200px", height: "150px" }} alt="" />
                <hr class="my-3" style={{ border: "1px solid black" }} />
                <Link to="/admin/products">
                  <button class="btn btn-outline-dark">Products</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div class="col-md-4">
            <div class="card text-center border-1  bg-light " style={{ borderRadius: "50px" }}>
              <div class="card-body">
                {/* <i class="bi bi-hexagon" style={{fontsize: "48px" , color: "#3c3c59"}}></i> */}
                <img src={require("../../assets/images/order.jpg")} style={{ width: "200px", height: "150px" }} alt="" />
                <hr class="my-3" style={{ border: "1px solid black" }} />
                <Link to="/admin/orders">
                  <button class="btn btn-outline-dark">Orders</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard