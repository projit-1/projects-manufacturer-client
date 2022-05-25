import React from 'react';


const Loading = () => {

    return (
        <div className='h-screen flex justify-center items-center '>
            <progress class="progress w-14"></progress>
            <progress class="progress w-14"></progress>
            <progress class="progress w-14"></progress>
        </div>
    );
};

export default Loading;