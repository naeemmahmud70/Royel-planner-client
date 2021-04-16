import React, { useEffect, useState } from 'react';
import EventCard from '../../Home/EventCard/EventCard';
import './Service.css'

const Service = () => {

    const [events, setEvents] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/events`)
        .then(res=>res.json())
        .then(data => setEvents(data))
    },[])
    return (
        <section>
            <div className="d-flex justify-content-center">
                <div className="text-center w-50">
                    <h3><span style={{ color: '#FE3E01' }}>Management</span> Services</h3>
                    <h6 className="mb-3">We make your events smart & impactful by personalized event management services</h6>
                    <small className="text-secondary">
                    From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,We offer full range of Events Management Services that scale to your needs & budget
                    </small>
                </div>
                
            </div>
            <div className="flex-style">
            {
                events.map(event=><EventCard event={event} key={event._id}></EventCard>)
            }
            </div>
        </section>
    );
};

export default Service;