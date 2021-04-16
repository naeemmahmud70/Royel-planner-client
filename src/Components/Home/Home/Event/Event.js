import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Event = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const { register, handleSubmit } = useForm();



    useEffect(() => {
        fetch('http://localhost:5000/event/' + id)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])

    const onSubmit = data => {
        const orderData = {
            name: data.name,
            email: data.email,
            event: data.event,

        };
        console.log(orderData)
        // const url = `http://localhost:5000/addReview`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(reviewData)
        // })
        //     .then(res => console.log('server side response', res))
    }



    return (
        <div>
            <div className="w-75 p-5 m-5 shadow rounded">
                <h3 className="fw-bold">Order</h3>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group w-50">
                            <input name="name" className="form-control" placeholder=" write your name" ref={register} />
                        </div>
                        <div className="form-group w-50">
                            <input name="email" className="form-control" placeholder="wite your email" ref={register} />
                        </div>
                        <div className="form-group w-50">
                            <input name="event" defaultValue={event.name} className="form-control" placeholder="wite your email" ref={register} />
                        </div>
                        <input value="placeOrder" className="btn-style" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Event;