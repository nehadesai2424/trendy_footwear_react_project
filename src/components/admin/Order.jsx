import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        axios.get("https://mockapi.io/projects/6777787480a79bf91901c925")
            .then((res) => {
                // console.log(res.data);
                setOrders(res.data)
            })
    }, []);

    const handleView = (order) => {
        setSelectedOrder(order);
    };

    const handlePrint = () => {
        const printContent = document.getElementById("invoice").innerHTML;
        const originalContent = document.body.innerHTML;

        // Replace the body content with the invoice content
        document.body.innerHTML = printContent;

        // Trigger the print
        window.print();

        // Restore the original content
        document.body.innerHTML = originalContent;

        // Re-apply event listeners if needed (React components may need a full reload)
        window.location.reload();
    };

    return (
        <div>
            {/* Orders Table */}
            <div className="container mt-4">
                <table className="table border shadow m-5 text-center rounded">
                    <thead>
                        <tr className='bg-light'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>{order.fname}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>₹{order.subTotal + 100}</td>
                                <td>

                                    <button onClick={() => handleView(order)} type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Modal View */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered" style={{ maxWidth: "700px" }}  >
                    <div class="modal-content" >
                        <div class="modal-header">
                            <h5 class="modal-title " id="exampleModalLabel">Selected Order</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body m-5">
                            {selectedOrder && (
                                <div className="container border shadow p-5" id="invoice">
                                    <h3 className="text-center">Invoice</h3>
                                    <p>
                                        <strong className="fw-bold text-dark">Name :</strong> {selectedOrder.fname} {selectedOrder.lname}
                                    </p>
                                    <p>
                                        <strong className="fw-bold text-dark">Email :</strong> {selectedOrder.email}
                                    </p>
                                    <p>
                                        <strong className="fw-bold text-dark">Mobile :</strong> {selectedOrder.phone}
                                    </p>
                                    <p>
                                        <strong className="fw-bold text-dark">Address :</strong> {selectedOrder.landmark},{selectedOrder.towncity},{" "}
                                        {selectedOrder.state} - {selectedOrder.zippostalcode}, {selectedOrder.state}
                                    </p>
                                    <h5>Order Details</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedOrder.orders.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                                        />
                                                        {item.title}
                                                    </td>
                                                    <td>₹{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>₹{item.price * item.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h6 className="text-right text-dark">Shipping : ₹100</h6>
                                    <h5 className="text-right">Total: ₹{selectedOrder.subTotal + 100}</h5>
                                    {/* <button className="btn btn-outline-primary mt-3" onClick={handlePrint}>
                                        Print Invoice
                                    </button> */}
                                </div>
                            )}
                        </div>
                        <div class="modal-footer">
                            <button className="btn btn-outline-primary" onClick={handlePrint}>Print Invoice </button>
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
