import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-20 h-20 border-10 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;