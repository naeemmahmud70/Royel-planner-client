import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';


const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL

        };
        const url = `http://localhost:5000/addEvent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    }


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c27cdbd7f672caa5d177ddecda022824');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="w-75 col-md-9">
                <h4 className="fw-bold mt-2">Add Event Service</h4>
                <hr/>
                <div className="shadow p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group w-50">
                            <input name="name" className="form-control" placeholder="event name" ref={register} />
                        </div>
                        <div className="form-group w-50">
                            <input name="price" className="form-control" placeholder="event cost" ref={register} />
                        </div>
                        <div className="form-group w-50">
                            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        </div>


                        <input value="Submit" className="btn-style" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;