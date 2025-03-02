import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
	const count = useSelector((state) => state.cart.products);

	return (
		<>
			<nav className=" colorlib-nav navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">

					<a className="navbar-brand mb-4 me-4" href="/">
						<img
							src={require("../assets/images/trendyLogo.png")}
							style={{ width: "120px" }}
							alt="Trendy Logo"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse my-3" id="navbarNav">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link text-dark">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-link text-dark">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/all-products" className="nav-link text-dark">
									All Products
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link text-dark">
									Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/admin-login" className="nav-link text-dark">
									Admin Login
								</Link>
							</li>
						</ul>

						{/* <form className="search-wrap d-flex me-3" role="search">
							<input
								className="form-control search me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-dark submit-search text-center" type="submit">
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>
						</form> */}

						<form className="search-wrap d-flex align-items-center me-3" role="search">
							<div className="input-group" style={{ height: "40px" }}>
								<input
									className="form-control shadow border border-dark"
									type="search"
									placeholder="Search"
									aria-label="Search"
									style={{ height: "100%" }}
								/>
								<button
									className="btn btn-dark"
									type="submit"
									style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
								>
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</div>
						</form>

						<Link to="/cart" className="btn btn-outline-dark">
							<i className="fa-solid fa-cart-shopping"></i> Cart
							{/*[ <span className="fw-bold">{count.length}</span> ] */}
							<span className='badge-dark px-2 rounded m-2'>{count.length}</span>
						</Link>
					</div>
				</div>
			</nav>
			<div className="bg-dark text-center py-2 text-light">
				<h4>
					<a href="#" className="text-light text-decoration-none ">
						25% off (Almost) Everything! Use Code: Summer Sale
					</a>
				</h4>
			</div>
		</>
	)
}

export default Header



