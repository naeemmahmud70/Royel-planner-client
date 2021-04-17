import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Payment from '../../../Payment/Payment';

const Event = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null)



    useEffect(() => {
        fetch('http://localhost:5000/event/' + id)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])

    const onSubmit = data => {
        setShippingData(data)
    }
    
    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            order: shippingData,
            paymentId,
            oderTime: new Date()
        }
        console.log(orderDetails)
    }
    // const url = `http://localhost:5000/addReview`;
    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(reviewData)
    // })
    //     .then(res => console.log('server side response', res))





    return (
        <div>
            <div style={{display: shippingData? 'none': 'block'}} className="w-75 p-5 m-5 shadow rounded">
                <h3 className="fw-bold">Order</h3>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group w-50">
                            <input name="name" defaultValue={loggedInUser.name} className="form-control" placeholder=" write your name" ref={register} />
                        </div>
                        <div className="form-group w-50">
                            <input name="email" defaultValue={loggedInUser.email} className="form-control" placeholder="wite your email" ref={register} />
                        </div>
                        <div className="form-group w-50">
                            <input name="event" defaultValue={event.name} className="form-control" placeholder="wite your email" ref={register} />
                        </div>
                        <div className="form-group w-50">
                            <input name="price" defaultValue={event.price} className="form-control" placeholder="wite your email" ref={register} />
                        </div>
                        <input value="placeOrder" className="btn-style" type="submit" />
                    </form>
                </div>
            </div>

            <hr />
            <div style={{display: shippingData? 'block': 'none'}} className="shadow m-5 p-5">
                <div>
                    <h5 className="fw-bold">Pay here</h5>
                    <h6>You will charged: {event.price}</h6>
                    <Payment handlePayment={handlePaymentSuccess}></Payment>
                </div>
            </div>
        </div>
    );
};

export default Event;