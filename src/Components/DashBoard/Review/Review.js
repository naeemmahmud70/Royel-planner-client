import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            email: data.email,
            description: data.description,

        };
        console.log(reviewData)
        const url = `http://localhost:5000/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    }

    return (
        <div className="row">
            <div className="col-md-4">
            <Sidebar></Sidebar>
            </div>
        <div style={{position:"absolute", right: 0}} className="shadow p-5 w-75 col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group w-50">
                    <input name="name" className="form-control" placeholder=" write your name" ref={register} />
                </div>
                <div className="form-group w-50">
                    <input name="email" className="form-control" placeholder="wite your email" ref={register} />
                </div>
                <div className="form-group input-group w-75">
                    <input style={{ height: '200px' }} name="description" className="form-control " placeholder="write description" ref={register} />
                </div>
                <input value="submit" className="btn-style" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default Review;