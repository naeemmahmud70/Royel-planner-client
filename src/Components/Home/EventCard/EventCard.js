import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = ({event}) => {
    const {imageURL, name, price, _id} = event;
    return (
        <div className="card-style shadow rounded m-4 p-3">
            <div className="image-style text-center">
                <img src={imageURL} alt=""/>
               <h4>{name}</h4>
            </div>
            <div className="d-flex justify-content-around mt-4">
                <div>
                    <h3 className="text-warning fw-bold">${price}</h3>
                </div>
                <div>
                    <Link to={"/event/"+_id}><button className="btn-style">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;