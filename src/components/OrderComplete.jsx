import React from 'react'

function OrderComplete() {
	return (
		<>
			<div class="colorlib-product">
				<div class="container">
					<div class="row row-pb-lg">
						<div class="col-sm-10 offset-md-1">
							<div class="process-wrap">
								<div class="process text-center active">
									<p><span>01</span></p>
									<h3>Shopping Cart</h3>
								</div>
								<div class="process text-center active">
									<p><span>02</span></p>
									<h3>Checkout</h3>
								</div>
								<div class="process text-center active">
									<p><span>03</span></p>
									<h3>Order Complete</h3>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-10 offset-sm-1 text-center border shadow p-4 ">
							<p class="icon-addcart text-success"><span><i class="fa-solid fa-check"></i></span></p>
							<h2 class="mb-4">Thank you for purchasing , Your order is complete</h2>
							<p>
								<a href="/" class="btn btn-dark btn-outline-dark">Home</a>
								<a href="/all-products" class="btn btn-dark btn-outline-dark"><i class="icon-shopping-cart"></i> Continue Shopping</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OrderComplete