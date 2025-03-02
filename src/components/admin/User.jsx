import axios from 'axios';
import React, { useEffect, useState } from 'react'

function User() {

     const [orders, setOrders] = useState([]);
     useEffect(() => {
        axios.get("https://6777787480a79bf91901c924.mockapi.io/orders")
            .then((res) => {
                // console.log(res.data);
                setOrders(res.data)
            })
    }, []);


    return (
        <>
           <div className="container mt-4">
                <table className="table border shadow m-5 text-center rounded">
                    <thead>
                        <tr className='bg-light'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>{order.fname}</td>
                                <td>{order.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 

        </>
    )
}

export default User