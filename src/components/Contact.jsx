import React from 'react'

function Contact() {
  return (
    <>
      <div class="container animate__animated animate__fadeInDown">
        <div class="row justify-content-md-center mt-4">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h4 class="mb-4 display-6 text-center">Contact Information</h4>
            {/* <p class="text-secondary mb-5 text-center">The best way to contact us is to use our contact form below. Please fill out all of the required fields and we will get back to you as soon as possible.</p> */}
            {/* <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" /> */}
            {/* <hr /> */}
          </div>
        </div>
      </div>


      <div className="container animate__animated animate__fadeInDown ">
        <div className="row mt-2 p-2 bg-dark text-white rounded text-center">
          <div className="col-lg-3">
            <i class="fa-solid fa-location-dot m-2"></i>
            <span> 291 South 21th Street, <br /> Suite 721 India </span>
          </div>

          <div className="col-lg-3">
            <i class="fa-solid fa-phone  m-2"></i>
            <span>+ 1235 2355 98</span>
          </div>

          <div className="col-lg-3">
            <i class="fa-solid fa-envelope  m-2"></i>
            <span>trendyFootwear@gmail.com</span>
          </div>

          <div className="col-lg-3">
            <i class="fa-solid fa-globe m-2"></i>
            <span>trendyFootwear.com</span>
          </div>

        </div>
      </div>

      {/* <!-- Contact 1 - Bootstrap Brain Component --> */}
      <section class=" py-3 py-md-5">


        <div class="container">
          <div class="row ">
            <div class="col-md-2 col-lg-6 mt-3">
              <div class="bg-white border rounded shadow shadow-sm overflow-hidden">

                <form action="#!">
                  <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div class="col-12">
                      <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control shadow" id="fullname" name="fullname" required />
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </span>
                        <input type="email" class="form-control shadow" id="email" name="email" required />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <label for="phone" class="form-label">Phone Number</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                          </svg>
                        </span>
                        <input type="tel" class="form-control shadow" id="phone" name="phone" />
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                      <textarea class="form-control shadow" id="message" name="message" rows="3" required></textarea>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button class="btn btn-primary btn-lg" type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>

            <div className="col-md-2 col-lg-6 mt-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15286.691143360831!2d74.23609623381789!3d16.69324979881668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1003e8dd18f77%3A0x8145dfbd008c138d!2sRajarampuri%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736788658868!5m2!1sen!2sin" width="520" height="555" style={{ border: "5" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Contact