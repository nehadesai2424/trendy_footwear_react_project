import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { removeProductToCart, incrementQuanity, decrementQuanity, setTotalAmount, setDiscountAmount } from '../state/cartSlice';


function Cart() {

  //let navigate = useNavigate();
  let dispatch = useDispatch();


  // function handleCheckout(e) {
  //   navigate("/checkout")
  // }

  let cartData = useSelector((state) => {
    return state.cart.products
  });


  // Total Payment card =================================================================

  const [allTotal, setAllTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [discount, setDiscount] = useState(0);

  let [count, setCount] = useState(1);

  let data = useSelector((state) => state.cart.products);
  // console.log(data);

  // function removeProduct(e, product) {
  // 	e.preventDefault();
  // 	dispatch(storeRemoveProduct(product.id));
  //   }

  useEffect(() => {
    let total = 0;
    data.forEach(item => {
      total += item.price * item.quantity;
    });
    setAllTotal(total);
  }, [data]);

  function handleCoupon() {
    let promoCode = coupon.match(/(\d+)/);

    if (promoCode) {
      const discountValue = parseInt(promoCode[0]);
      // console.log(typeof(discountValue));
      setDiscount(discountValue)
      // console.log(discountValue);
      dispatch(setDiscountAmount(discountValue))
    }
  };


  return (
    <>
      <div class="container mt-5">
        {/* <!-- Product Details Table --> */}
        <div class="row">
          <div class="col-12">
            <table class="table table-bordered text-center shadow">
              <thead class="table-light">
                <tr>
                  <th>PRODUCT DETAILS</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartData.map((eachdData) => {
                    return (
                      <tr>
                        <td className="align-middle"><img style={{ width: "100px", height: "100px" }} src={eachdData.image} alt="" />

                          <h5 className='mt-2'>{eachdData.title}</h5>
                        </td>

                        <td className="align-middle"><h5><i class="fa-solid fa-indian-rupee-sign"></i> {eachdData.price}/-</h5></td>
                        <td className="align-middle">
                          <button onClick={() => dispatch(decrementQuanity(eachdData.id))} className='btn btn-dark px-3'>-</button>
                          <span className='m-3'>{eachdData.quantity}</span>

                          <button onClick={() => dispatch(incrementQuanity(eachdData.id))} className="btn btn-dark px-3">+</button>
                        </td>
                        <td className="align-middle"><h5><i class="fa-solid fa-indian-rupee-sign"></i> {eachdData.price * eachdData.quantity}/-</h5></td>

                        <td className="align-middle">

                          <button onClick={() => dispatch(removeProductToCart(eachdData.id))} href="#" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i> Remove</button>

                        </td>

                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
        <br />
        {/* <!-- Coupon Section and Summary Section in a Single Row --> */}
        <div class="row  mt-3">
          {/* <!-- Input Box --> */}
          <div class="col-md-6 col-lg-6">
            <input type="text" class="form-control shadow" placeholder="Your Coupon Number..." />
          </div>

          {/* <!-- Apply Coupon Button --> */}
          <div class="col-auto">
            <button class="btn btn-dark">Apply Coupon</button>
          </div>

          {/* <!-- Proceed to Checkout Box --> */}
          <div class="col-md-4 col-lg-3 ms-auto">
            <div class="border p-3 rounded shadow">
              <p class="mb-2 d-flex justify-content-between">
                <strong>Subtotal:</strong>
                <span> ₹{allTotal}.00/-</span>
              </p>
              <p class="mb-2 d-flex justify-content-between">
                <strong>Shipping:</strong>
                <span> ₹100.00/-</span>
              </p>
              <p class="mb-2 d-flex justify-content-between">
                <strong>Discount:</strong>
                <span> ₹{discount}.00/-</span>
              </p>
              <hr />
              <h5 class="mb-3 d-flex justify-content-between">
                <strong>Total:</strong>
                <span> ₹{allTotal - discount}/-</span>
              </h5>
              {/* <button onClick={(e) => handleCheckout(e)} class="btn btn-dark w-100">Proceed to Checkout</button> */}
              <div className='text-center'>
                <Link to={"/checkout"} href="#" >
                  <button class="btn btn-dark" onClick={() => dispatch(setTotalAmount(allTotal - discount))}>Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Related Products */}
      <div class="container my-4 text-center">
        <h1>Related Products</h1> <hr /><br />
        <div class="row g-4">
          {/* <!-- Card 1 --> */}
          <div class="col-md-3">
            <div class="card border">
              <img src={require("../assets/images/footwear1.jpg")} style={{ height: "250px" }} class="card-img-top" alt="Women's Boots Shoes Maca" />
              <div class="card-body text-center">
                <h5 class="card-title fw-bold">Men's Sports Shoes</h5>
                <h5 class="card-text"> <i class="fa-solid fa-indian-rupee-sign"></i> 1250/-</h5>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="col-md-3">
            <div class="card border">
              <img src={require("../assets/images/footwear8.jpg")} style={{ height: "250px" }} class="card-img-top" alt="Men's Taja Commissioner" />
              <div class="card-body text-center">
                <h5 class="card-title fw-bold">Men's Shoes</h5>
                <h5 class="card-text"><i class="fa-solid fa-indian-rupee-sign"></i> 1599/-</h5>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="col-md-3">
            <div class="card border">
              <img src={require("../assets/images/footwear9.jpg")} style={{ height: "250px" }} class="card-img-top" alt="Women's Minam Meaghan" />
              <div class="card-body text-center">
                <h5 class="card-title fw-bold">Women's Footwear</h5>
                <h5 class="card-text"><i class="fa-solid fa-indian-rupee-sign"></i> 999/-</h5>
              </div>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="col-md-3">
            <div class="card border">
              <img src={require("../assets/images/footwear10.jpg")} style={{ height: "250px" }} class="card-img-top" alt="Russ Men's Sneakers" />
              <div class="card-body text-center">
                <h5 class="card-title fw-bold">Women's Footwear</h5>
                <h5 class="card-text"><i class="fa-solid fa-indian-rupee-sign"></i> 799/-</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart