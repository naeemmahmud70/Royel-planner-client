import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import OrderListCard from './OrderListCard/OrderListCard';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=`+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    },[])
    return (
        <div className="row">

            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h4 className="fw-bold mt-2">Order List</h4>
                <hr />
                <div className="shadow p-5">

                    <OrderListCard orders={orders} key={orders._id}></OrderListCard>)

                </div>
            </div>
        </div>
    );
};

export default OrderList;