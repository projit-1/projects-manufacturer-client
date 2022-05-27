import React from 'react';


const Loading = () => {

    return (
        <div className='h-screen flex justify-center items-center '>
            <progress className="progress w-14"></progress>
            <progress className="progress w-14"></progress>
            <progress className="progress w-14"></progress>
        </div>
    );
};

export default Loading;