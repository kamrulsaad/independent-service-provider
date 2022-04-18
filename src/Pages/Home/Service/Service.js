import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {


    const { id, name, pricing, img, description, duration} = service

    return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
                <img
                    src={img}
                    className="object-cover w-full h-full rounded-t"
                    alt="Plan"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                    <div className="text-lg font-bold">{name}</div>
                    <p className="text-sm text-gray-900">
                    {description}
                    </p>
                    <div className="mt-3 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        ${pricing} <h6 className='inline text-lg'>/ {duration} </h6>
                    </div>
                </div>
                <Link
                    to= {`/contact/${id}`}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                >
                    Buy {name}
                </Link>
            </div>
        </div>
    );
};

export default Service;