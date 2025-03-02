import React, { useEffect, useState } from 'react'
import { addToCart } from '../state/cartSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function AllProducts() {
	let dispatch = useDispatch();

	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	// useEffect(() => {
	// 	axios.get("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear")
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setData(res.data)
	// 			setFilteredData(res.data)
	// 		})
	// }, []);


	const [loading, setLoading] = useState(true); // Loading state

	useEffect(() => {
		axios
			.get("https://6777787480a79bf91901c924.mockapi.io/trendyFootwear")
			.then((res) => {
				setData(res.data);
				setFilteredData(res.data);
				setLoading(false); // Data fetched, stop loading
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false); // Stop loading even if there's an error
			});
	}, []);

	// function to add product to cart----------------------------------------

	function addProductToCart(product) {
		// console.log(product);

		const { id, title, image, price, mrp } = product;

		const eachProduct = {
			id: id,
			title: title,
			image: image,
			price: price,
			mrp: mrp,
			quantity: 1
		};

		// console.log(eachProduct);

		dispatch(addToCart(eachProduct))

	};


	// function to Filter Search bar----------------------------------------------------------------

	function handleSearch(e) {
		// console.log(e.target.value);
		const searchText = e.target.value.trim().toLowerCase();
		//console.log(searchText);


		if (searchText === "") {
			setFilteredData(data)
		} else {
			const result = data.filter((eachData) => {
				//return eachData.title.toLowerCase() === searchText
				return eachData.title.toLowerCase().includes(searchText) ||
					eachData.price.includes(searchText)
			})
			setFilteredData(result)
		}
	}

	return (
		<>
			<div class="container mt-5">
				<div class="d-flex align-items-center">
					{/* <!-- Search Input --> */}
					<input
						onChange={(e) => handleSearch(e)}
						type="text"
						class="form-control shadow border me-3"
						placeholder="Search"
					/>
					{/* <!-- Sort By Text --> */}
					<h5 class=" text-nowrap">Sort by :</h5>
					{/* <!-- Select Option with Bootstrap Grid --> */}
					<div class="col-auto">
						<select class="form-select shadow rounded" aria-label="Sort by options">
							<option selected>Featured</option>
							<option value="1">Price: Low to High</option>
							<option value="2">Price: High to Low</option>
							<option value="3">New Arrivals</option>
						</select>
					</div>
				</div>
			</div>

			<div class="colorlib-product p-5">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-xl-3">
							<div class="row">
								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Category</h3>
										<ul>
											<li><a href="#">Male</a></li>
											<li><a href="#">Female</a></li>
											<li><a href="#">Kids</a></li>
										</ul>
									</div>
								</div>

								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Brand</h3>
										<ul>
											<li><a href="#">Nike</a></li>
											<li><a href="#">Adidas</a></li>
											<li><a href="#">Bata</a></li>
											<li><a href="#">Gucci</a></li>
											<li><a href="#">Mochi</a></li>
											<li><a href="#">Puma</a></li>
										</ul>
									</div>
								</div>

								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Size</h3>
										<div class="block-26 mb-2">
											<h4>Size</h4>
											<ul>
												<li><a href="#">4</a></li>
												<li><a href="#">5</a></li>
												<li><a href="#">6</a></li>
												<li><a href="#">7</a></li>
												<li><a href="#">8</a></li>
												<li><a href="#">9</a></li>
												<li><a href="#">10</a></li>
												<li><a href="#">11</a></li>
												<li><a href="#">12</a></li>
												<li><a href="#">13</a></li>
											</ul>
										</div>

									</div>
								</div>

								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Colors</h3>
										<ul>
											<li><a href="#">Black</a></li>
											<li><a href="#">White</a></li>
											<li><a href="#">Blue</a></li>
											<li><a href="#">Red</a></li>
											<li><a href="#">Green</a></li>
											<li><a href="#">Grey</a></li>
											<li><a href="#">Orange</a></li>
											<li><a href="#">Cream</a></li>
											<li><a href="#">Brown</a></li>
										</ul>
									</div>
								</div>

								<div class="col-sm-12">
									<div class="side border mb-1">
										<button className='btn btn-dark w-100'>Clear Filter</button>
									</div>

								</div>


							</div>
						</div>
						<div class="col-lg-9 col-xl-9">
							<div class="row row-pb-md">
								{/* {
									filteredData.map((product) => {
										return (
											<div class="col-lg-4 mb-4 text-center">
												<div class="product-entry border">
													<a href="#" class="prod-img">
														<img src={product.image} class="img-fluid" alt="footwear img" style={{ width: "300px", height: "300px" }} />
													</a>
													<div class="desc">
														<h2><a href="#">{product.title}</a></h2>
														<span class="price"><i class="fa-solid fa-indian-rupee-sign"></i> {product.price}/-</span>
														<span class="price"><i class="fa-solid fa-indian-rupee-sign"></i><del>{product.mrp}/-</del> </span>

														<button onClick={() => addProductToCart(product)} className='btn btn-dark m-2'><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
													</div>
												</div>
											</div>
										)
									})
								} */}

								{loading ? ( // Show spinner while loading
									<div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
										<div className="spinner-border text-dark" role="status">
											<span className="visually-hidden">Loading...</span>
										</div>
									</div>
								) : (
									<div className="row">
										{filteredData.map((product) => (
											<div className="col-lg-4 mb-4 text-center" key={product.id}>
												<div className="product-entry border">
													<a href="#" className="prod-img">
														<img
															src={product.image}
															className="img-fluid"
															alt="footwear img"
															style={{ width: '300px', height: '300px' }}
														/>
													</a>
													<div className="desc">
														<h2>
															<a href="#">{product.title}</a>
														</h2>
														<span className="price">
															<i className="fa-solid fa-indian-rupee-sign"></i> {product.price}/-
														</span>
														<span className="price">
															<i className="fa-solid fa-indian-rupee-sign"></i>
															<del>{product.mrp}/-</del>
														</span>

														<button
															onClick={() => addProductToCart(product)}
															className="btn btn-dark m-2"
														>
															<i className="fa-solid fa-cart-shopping"></i> Add to Cart
														</button>
													</div>
												</div>
											</div>
										))}
									</div>
								)}
							</div>


							<div class="row">
								<div class="col-md-12 text-center">
									<div class="block-27">
										<ul>
											<li><a href="#"><i class="fa-solid fa-chevron-left"></i></a></li>
											<li class="active"><span>1</span></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#"><i class="fa-solid fa-chevron-right"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default AllProducts


