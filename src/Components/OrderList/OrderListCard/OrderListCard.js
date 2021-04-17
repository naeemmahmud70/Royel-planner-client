import React from 'react';

const OrderListCard = ({ orders }) => {
    return (
        <table className="table table-borderless table-light table-striped">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Event</th>
                    <th className="text-secondary" scope="col">Price</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order.order.event}</td>
                            <td>${order.order.price}</td>
                            <td>{order.order.name}</td>
                            <td>{order.order.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
};

export default OrderListCard;