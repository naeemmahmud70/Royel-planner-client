import React from 'react';
import EventsCard from './EventsCard/EventsCard';

const LatestEvents = () => {
    const events = [
        {
            img: "https://i.postimg.cc/rmkD5vGj/l-1.jpg",
            name: 'Twn Hall Conference',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            date: 'Posted January 10,2021',
            from: 'California',

        },
        {
            img: "https://i.postimg.cc/vHBt1VZB/l-2.jpg",
            name: 'Twn Hall Conference',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            date: 'Posted January 10,2021',
            from: 'California',

        },
        {
            img: "https://i.postimg.cc/8ChR8dty/l-3.jpg",
            name: 'Twn Hall Conference',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            date: 'Posted January 10,2021',
            from: 'California',

        },
        
    ]
    return (
        <section style={{backgroundColor:'gray', borderRadius:'7px'}} >
            <div  className="ml-5">
            <div className="mt-5 text-white">
                <h2><span style={{ color: '#FE3E01' }}>Latest</span> Events</h2>
                <p>We make your events smart & impactful by personalized event management services.</p>
            </div>
            </div>

            <div className="d-flex justify-content-center" >
                <div className="w-50">

                    <div className=" d-flex justify-content-center  m-2 ">
                        {
                            events.map(event => <EventsCard event={event}></EventsCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LatestEvents;