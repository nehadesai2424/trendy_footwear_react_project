import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function AdminPage() {

    let navigate = useNavigate()

    function handleLogout(e) {

        e.preventDefault();
        localStorage.clear();
        navigate("/admin-login");


        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: "top-end",
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.onmouseenter = Swal.stopTimer;
        //       toast.onmouseleave = Swal.resumeTimer;
        //     }
        //   });
        //   Toast.fire({
        //     icon: "success",
        //     title: "Logged out !"
        //   });

        Swal.fire({
            title: "Logged out !",
            icon: "success",
            draggable: true
        });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-2 p-0">
                        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                            <div class="position-sticky">
                                <div class="list-group list-group-flush border">
                                    <Link to={"/admin"} >
                                        <a
                                            href="#"
                                            class="list-group-item list-group-item-action py-2 ripple"
                                            aria-current="true"
                                        >
                                            <i class="fas fa-tachometer-alt fa-xl fa-fw me-3"></i><span>Main dashboard</span>
                                        </a>
                                    </Link>


                                    <Link to={"/admin/products"}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-brands fa-product-hunt fa-xl fa-fw me-3"></i><span>Products</span>
                                        </a>
                                    </Link>


                                    <Link to={"/admin/addproduct"}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-solid fa-cart-plus fa-xl fa-fw me-3"></i><span>Add Product</span></a>

                                    </Link>

                                    <Link to={"/admin/orders"}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-solid fa-bag-shopping fa-xl fa-fw me-3"></i><span>Orders</span>
                                        </a>
                                    </Link>

                                    <Link to={"/admin/user"}>
                                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-solid fa-users fa-xl fa-fw me-3"></i><span>Users</span>
                                        </a>
                                    </Link>

                                    <button onClick={(e) => handleLogout(e)} class="btn btn-dark m-3"><i class="fas fa-lock fa-fw me-2"></i>Log out</button>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="col-9">
                        <Outlet />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminPage