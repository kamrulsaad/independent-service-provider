import React from 'react';
import notfound from '../../../Images/404-error-page.png'

const NotFound = () => {
    return (
        <div className='h-screen'>
            <img className='object-cover w-full lg:absolute h-80 lg:h-full ' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;