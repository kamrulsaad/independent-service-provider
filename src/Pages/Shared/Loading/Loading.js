import React from 'react';

const Loading = () => {
    return (
        <div class="flex h-screen justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-20 h-20 border-10 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;