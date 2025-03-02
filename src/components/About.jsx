import React from 'react'

function About() {
  return (
    <>
      <div class="container my-5">
        <div className='text-center rounded shadow my-5 px-5 py-2 animate__animated animate__fadeInLeft bg-light'>
          <h3 className='text-center p-3'>TRENDY FOOTWEAR</h3>
          <hr />
          <p>Welcome to <a href="" className='text-primary text-decoration-underline'>Trendy Footwear</a>, where passion for footwear meets unparalleled style and comfort! Since our inception, we've been committed to redefining the way people step into the world, offering footwear that combines quality craftsmanship, timeless designs, and unbeatable comfort.
          </p>

          {/* <h4>What Sets Us Apart?</h4>
          <p>
            <span className='fw-bold text-dark'>Premium Quality : </span> We source the finest materials and employ skilled artisans to ensure every pair of shoes exceeds expectations in durability and comfort.
          </p>

          <p>
            <span className='fw-bold text-dark'>Diverse Collection :</span> From trendy designs to classic favorites, we offer a wide range of styles for men, women, and kids.
          </p>
          <p>
            <span className='fw-bold text-dark'>Customer-Centric Approach :</span> Your satisfaction is our priority. We take pride in delivering exceptional service and helping you find the perfect fit for your unique needs.
          </p>

          <h4>Our Journey</h4>
          <p>
            Founded in 2017, Trendy Footwear started with a vision to bring stylish, high-quality footwear to everyone. Over the years, we’ve grown into a trusted name in the industry, cherished by our loyal customers for our dedication to excellence.
          </p> */}
          <h4>Visit Us !!</h4>
          <p>Step into our world of footwear , or browse our online store to explore the latest trends. Let us help you find your perfect pair !</p>
          <img src={require("../assets/images/footwear_about.jpg")} style={{ width: "600px" }} className='mb-3 img-fluid' alt="footwear_about" />
          <p>Thank you for choosing Trendy Footwear ! Your trust and support inspire us to keep innovating and delivering the best in footwear.</p>
        </div>
        <hr />

        {/* <!-- Heading --> */}
        <h3 class="my-5 border rounded shadow py-1 text-center">Discover Our Collection</h3>

        {/* <!-- Image Grid --> */}
        <div class="row text-center">
          <div class="col-md-3">
            <div class="position-relative">
              <img src={require("../assets/images/about-img1.jpg")} class="img-fluid" alt="Online Exclusive" />
              <div class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-5">
                ONLINE EXCLUSIVE
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="position-relative">
              <img src={require("../assets/images/about-img2.jpg")} class="img-fluid" alt="Festive & Ethnic" />
              <div class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-5">
                FESTIVE & ETHNIC
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="position-relative">
              <img src={require("../assets/images/about-img3.jpg")} class="img-fluid" alt="365 Closet" />
              <div class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-5">
                365 CLOSET
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="position-relative">
              <img src={require("../assets/images/about-img4.jpg")} class="img-fluid" alt="Work Wear" />
              <div class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-5">
                WORK WEAR
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />

      </div>


      <div class="container my-5 text-center">

        {/* <!-- Heading --> */}
        <h3 class="mb-5 border rounded shadow py-1">Offers</h3>

        {/* <!-- Discount Section --> */}
        <div class="row text-center">
          <div class="col-4">
            <div class="bg-danger text-white py-4 fs-4">20-30% OFF</div>
          </div>
          <div class="col-4">
            <div class="bg-danger text-white py-4 fs-4">40-50% OFF</div>
          </div>
          <div class="col-4">
            <div class="bg-danger text-white py-4 fs-4">60-70% OFF</div>
          </div>
        </div>

        {/* <!-- Brand Section --> */}
        <div class="row mt-4">
          <div class="col-4">
            <div class="position-relative">
              <img src={require("../assets/images/about-floats.jpg")} class="img-fluid" alt="Floatz" />
              <div class="position-absolute bottom-0 start-50 translate-middle-x bg-dark bg-opacity-75 text-white py-2 px-3 fw-bold text-center">
                FLOATZ
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="position-relative">
              <img src={require("../assets/images/about-nine-west.jpg")} class="img-fluid" alt="Nine West" />
              <div class="position-absolute bottom-0 start-50 translate-middle-x bg-dark bg-opacity-75 text-white py-2 px-3 fw-bold text-center">
                NINE WEST
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="position-relative">
              <img src={require("../assets/images/about-sneakers.jpg")} class="img-fluid" alt="Hush Puppies" />
              <div class="position-absolute bottom-0 start-50 translate-middle-x bg-dark bg-opacity-75 text-white py-2 px-3 fw-bold text-center">
                SNEAKERS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About