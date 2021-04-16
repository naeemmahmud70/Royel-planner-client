import React from 'react';
import AddServices from './AddService/AddServices';



const DashBoard = () => {
    return (
        <div className="row">
            <div className='col-md-8'>
               <AddServices></AddServices>
            </div>
        </div>
    );
};

export default DashBoard;