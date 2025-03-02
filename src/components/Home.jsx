import React from 'react'

function Home() {
  return (
    <>
      <div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-carousel-init>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("../assets/images/carousel1.jpg")} class="d-block w-100" height={"500px"} alt="Wild Landscape" />
          </div>
          <div class="carousel-item">
            <img src={require("../assets/images/carousel2.jpg")} class="d-block w-100" height={"500px"} alt="Camera" />
          </div>
          <div class="carousel-item">
            <img src={require("../assets/images/carousel3.jpg")} class="d-block w-100" height={"500px"} alt="Exotic Fruits" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      {/* Gallery */}
      <div className="container my-5 text-center">
        <div>
          <h2 className=' bg-dark text-white rounded'>Trendy Footwear</h2>
          <h5 > Most popular choices of Footwear</h5>
          <hr />
        </div>
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            {/* <h5 class="bg-dark text-light">Kashmir</h5> */}
            <img
              src={require("../assets/images/footwear1.jpg")}
              style={{ height: "300px" }}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            {/* <h5 class="bg-dark text-light">Shimla</h5> */}
            <img
              src={require("../assets/images/footwear2.jpg")}
              style={{ height: "510px" }}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Kashmir img"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            {/* <h5 class="bg-dark text-light">Rajasthan</h5> */}
            <img
              src={require("../assets/images/footwear3.jpg")}
              style={{ height: "510px" }}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Shimla img"
            />
            {/* <h5 class="bg-dark text-light">Kanyakumari</h5> */}
            <img
              src={require("../assets/images/footwear4.jpg")}
              style={{ height: "300px" }}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="kanyakumari img"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            {/* <h5 class="bg-dark text-light">Darjeeling</h5> */}
            <img
              src={require("../assets/images/footwear5.jpg")}
              style={{ height: "300px" }}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            {/* <h5 class="bg-dark text-light">Goa</h5> */}
            <img
              src={require("../assets/images/footwear6.jpg")}
              style={{ height: "510px" }}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>

        <a href="/all-products"><button class="btn btn-dark px-5">Shop Now</button></a><hr />


        <div class="my-5">
          <div class="container shadow py-3 px-5">
            <div class="row">
              <div class="col-sm-8 offset-sm-2 text-center">
                <h2>Trusted Partners</h2>
              </div>
            </div>
            <hr />
            <div class="row py-3">
              <div class="col partner-col text-center">
                <img src={require("../assets/images/brand-1.jpg")} class="img-fluid" alt="" />
              </div>
              <div class="col partner-col text-center">
                <img src={require("../assets/images/brand-2.jpg")} class="img-fluid" alt="" />
              </div>
              <div class="col partner-col text-center">
                <img src={require("../assets/images/brand-3.jpg")} class="img-fluid" alt="" />
              </div>
              <div class="col partner-col text-center">
                <img src={require("../assets/images/brand-4.jpg")} class="img-fluid" alt="" />
              </div>
              <div class="col partner-col text-center">
                <img src={require("../assets/images/brand-5.jpg")} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home