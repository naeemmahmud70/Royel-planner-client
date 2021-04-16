import React from 'react';
import './EventsCard.css'

const EventsCard = ({ event }) => {

    return (
        <div className="shadow p-3 m-3 bg-white rounded">
            <div className="card-style  text-center">
                <img src={event.img} alt="" />
                <h3 className='fw-bold'>{event.name}</h3>
            </div>
            <div>
                <small>{event.date}</small>
                <h5>{event.description}</h5>
            </div>
        </div>
    );
};

export default EventsCard;